var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');
    var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'yws',
  password : ''
});


// route des fichier statics (js, css, etc.)
app.use(express.static(__dirname+'/public'));


 
// Quand on est connecté à io
io.sockets.on('connection', function(socket) {
    console.log('Un client est connecté !');
  
    // recupération du sondage envoyé par client.js
    socket.on('NewSondage', function(sondage){ //NewSondage c'est le name du formulaire
      
      connection.query('INSERT INTO sondage SET ?', sondage, function(err, result) {
      if (err) throw err;

        // envoie du message ok + lien
        socket.emit('reponse', 'Votre sondage a bien été envoyé, vous pouvez le voir en cliquant sur <a href="/sondage/'+result.insertId+'">ce lien</a><br> Pour visualiser le template, veuillez cliquer <a href="/template/'+result.insertId+'">ici</a>')
      })
     });
     
     
    // envoie les sondages trouvés de la recherche 
    socket.on('recherche', function(keyword){ //recherche c'est le name du formulaire
      var results = [];
      connection.query('SELECT * FROM  `sondage` WHERE  `question` LIKE  \'%'+keyword+'%\'')
        .on('result', function(data){
          results.push(data)
        })
        .on('end', function(){
          socket.emit('liste', results);
        })
    });       

    // récup la recherche de la page d'accueil et l'envoi  a la page recherche 
    socket.on('rechercheMobile', function(keyword){ 
          socket.emit('recherchemobile', keyword);
        });
           


       // MOBILE envoie les sondages trouvés de la recherche 
    socket.on('rechercheMobile', function(keyword){ //recherche c'est le name du formulaire
      var results = [];
      connection.query('SELECT * FROM  `sondage` WHERE  `question` LIKE  \'%'+keyword+'%\'')
        .on('result', function(data){
          results.push(data)
        })
        .on('end', function(){
          socket.emit('listeMobile', results);
        })
    });    


    socket.on('vote', function(voteNb){ //vote c'est le name du formulaire
     var voteNumber = voteNb;
    // ajoute +1 bdd
        connection.query("UPDATE sondage set vote"+voteNumber+" = vote"+voteNumber+"+1  WHERE  `id` = '"+req.params.id+"'")

          .on('end', function(){
                socket.emit('midpage', 'oui')
            
                })
          });

});


// ICI on met toutes les routes

app.get('/', function(req, res) {

  // affiche highlight
var p =[];
      connection.query("SELECT * FROM `sondage` WHERE  `highlight` = '1'")

        .on('result', function(rows){
          p.push(rows);
          console.log(p);
        })
        .on('end', function(rows){
          res.render('index.ejs', {data : p}); //envoie des donnée à sondage.ejs
        })

});


app.get('/questions', function(req, res) {
        res.render('questions.ejs');
});

app.get('/consultation', function(req, res) {
        res.render('consultation.ejs');
});

app.get('/inscription', function(req, res) {
        res.render('inscription.ejs');
});

app.get('/connexion', function(req, res) {
        res.render('connexion.ejs');
});

app.get('/recherche', function(req, res) {
        res.render('recherche.ejs');
});


app.get('/dupliquer', function(req, res) {
        res.render('dupliquer.ejs');
});

app.get('/create', function(req, res) {
        res.render('create.ejs');
});

app.get('/connexion', function(req, res) {
        res.render('connexion.ejs');
});

/************* version mobile ******************/

app.get('/favorismobile', function(req, res) {
        res.render('favorismobile.ejs');
});

app.get('/statistiquesmobile', function(req, res) {
        res.render('statistiquesmobile.ejs');
});

app.get('/inscriptionmobile', function(req, res) {
    res.render('inscriptionmobile.ejs');
});

app.get('/connexionmobile', function(req, res) {
    res.render('connexionmobile.ejs');
});




      

// confirmation vote mobile
app.get('/demandeconfirmationmobile/:id/:reponse', function(req, res) {

    var reponses = req.params.reponse;
    // ajoute +1 bdd
connection.query("SELECT id, question, contexte, r"+reponses+" FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")

            .on('result', function(vote){
            res.render('demandeconfirmationmobile.ejs', {data : vote }); //envoie des donnée à sondage.ejs
            console.log(vote);
            
          });       
          }); 

app.get('/consultationmobile/:id', function(req, res) {
    connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
        .on('result', function(rows){
            res.render('consultationmobile.ejs', {data : rows}); //envoie des donnée à sondage.ejs

    });
});

app.get('/recherchermobile', function(req, res) {
        res.render('recherchermobile.ejs');
});

app.get('/sondage-mobile/:id', function(req, res) {
    connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
        .on('result', function(rows){
            res.render('sondage-mobile.ejs', {data : rows}); //envoie des donnée à sondage.ejs
    });
});

app.get('/enregistrementvotemobile/:id/:reponse', function(req, res) {
    var voteNumber = req.params.reponse;
   connection.query("UPDATE sondage set vote"+voteNumber+" = vote"+voteNumber+"+1  WHERE  `id` = '"+req.params.id+"'")

        .on('end', function(){
             connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
            .on('result', function(rows){
            res.render('enregistrementvotemobile.ejs', {data : rows}); //envoie des donnée à sondage.ejs
        });
  
      });  
      });

app.get('/mobile/vote/:id', function(req, res) {
  
      connection.query("SELECT *, vote1 + vote2 + vote3 + vote4 + vote5 as somme FROM `sondage` WHERE  `id` = '"+req.params.id+"'")
      .on('result', function(vote){
      res.render('statistiquesmobile.ejs', {data : vote}); //envoie des donnée à sondage.ejs
            
          }); 
    });


/************* RECUPERATION SONDAGE ******************/
app.get('/sondage', function(req, res) {
        res.render('sondage.ejs');
});



// affichage du sondage par l'id
app.get('/sondage/:id', function(req, res) {
connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
            .on('result', function(rows){
            res.render('sondage.ejs', {data : rows}); //envoie des donnée à sondage.ejs
            })
            
          }); 

 // génération template
app.get('/template/:id', function(req, res) {
connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
            .on('result', function(rows){
            res.render('template.ejs', {data : rows}); //envoie des donnée à sondage.ejs
            })
            
          }); 
 


// récupération du vote 
app.get('/sondage/:id/:reponse', function(req, res) {

    var voteNumber = req.params.reponse;
    // ajoute +1 bdd
connection.query("UPDATE sondage set vote"+voteNumber+" = vote"+voteNumber+"+1  WHERE  `id` = '"+req.params.id+"'")

          .on('end', function(){
            //selectionne le résultat validé

          connection.query("SELECT *, vote1 + vote2 + vote3 + vote4 + vote5 as somme FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
            .on('result', function(vote){
            res.render('vote.ejs', {data : vote, id : voteNumber}); //envoie des donnée à sondage.ejs
            
          }); 
    });
 });


// confirmation vote mobile
app.get('/demandeconfirmationmobile/:id/:reponse', function(req, res) {

    var reponses = req.params.reponse;
    // ajoute +1 bdd
connection.query("SELECT id, question, contexte, r"+reponses+" FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")

            .on('result', function(vote){
            res.render('demandeconfirmationmobile.ejs', {data : vote }); //envoie des donnée à sondage.ejs
            console.log(vote);
            
          }); 
    });

/*****************************************************/

// Dupplication sondage
app.get('/dupliquer/:id', function(req, res) {
  connection.query("SELECT * FROM  `sondage` WHERE  `id` = '"+req.params.id+"'")
            .on('result', function(rows){
            res.render('dupliquer.ejs', {data : rows}); //envoie des donnée à sondage.ejs
            })
            
}); 



// En cas de 404

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});


//FIN de la liste des ROUTES
server.listen(8080);
