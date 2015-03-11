var socket = io.connect('http://localhost:8080');
(function($){

	

	// récupère les données entrées dans le formulaire page create
	$('#sondageform').submit(function(event){
		console.log($('#position').val())
			event.preventDefault();
			socket.emit('NewSondage', {
				question : $('#question').val(),
				r1	: $('#r1').val(),
				r2	: $('#r2').val(),
				r3	: $('#r3').val(),
				r4	: $('#r4').val(),
				r5	: $('#r5').val(),
				contexte	: $('#contexte').val(),
				adresse	: $('#adresse').val(),
				position	: $('#position').val(),
			})
	});	

	socket.on('newusr', function(){
		alert('nouvel utilisateur');
	});



	// récupère la recherche et l'envoi
		$('#rechercheForm').submit(function(event){
			event.preventDefault();
			socket.emit('recherche', $('#recherche').val())
	});	



	// mobile -- récupère la recherche et l'envoi 
		$('#rechercheMobile').submit(function(event){
			console.log('js');
			event.preventDefault();
			socket.emit('rechercheMobile', $('#recherche').val())
	});	



		
			// envoi du texte "sondage bien envoyé etc"
	socket.on('reponse' , function(msg){

            $('.change').html(msg);
            
        });		
        	// Liste  les sondages recherche
	socket.on('liste' , function(data){
			var html ='';
			/*<a href="sondage/'+data[i].id+'">*/
			 for (var i = 0; i < data.length; i++){
			 	if(data[i].contexte){
	                html+='<a href="sondage/'+data[i].id+'"><div class="vignette"><div class="vignette-question">' + data[i].question + '</div><div class="vignette-contexte"><span>'+ data[i].contexte +'</span></div></div></a>';
	           		}
           		else 
           			{
           			html+='<a href="sondage/'+data[i].id+'"><div class="vignette"><div class="vignette-question">' + data[i].question + '</div><div class="vignette-contexte"></div></div></a>';
	           		}
            };
            $('#content-vignettes').replaceWith('<div id="content-vignettes">'+html+'</div>');
            
        });       

         	// Mobile Liste  les sondages
	socket.on('listeMobile' , function(data){
			var html ='';
			/*<a href="sondage/'+data[i].id+'">*/
			 for (var i = 0; i < data.length; i++){
			 	console.log(data);
			 		html+="<a href='/sondage-mobile/"+ data[i].id +"'><div class='result'><div class='author'>Anonyme</div><div class='place'>Lieu :<span>" + data[i].adresse + "</span></div><div class='question'>" + data[i].question + "</div>	<div class='rep'><span class='rep1'>" + data[i].r1 + "</span><br><span class='rep2'>" + data[i].r2 + "</span><br><span class='rep3'>" + data[i].r3 + "</span><br><span class='rep4'>" + data[i].r4 + "</span><br><span class='rep5'>" + data[i].r5 + "</span></div></div><br></a>";
				};
            $('#mobileres').replaceWith(html);
            
        });

         	// recup la recherche page d'accueil et envoie au form et valide automatiquement
	socket.on('rechercheAccueilJsl' , function(data){
			$(document).ready(function(){
				  $('#recherche').val(data);
 			/* document.forms['recherche'].submit();*/
            
        });      
        });


			//bouton recherche page d'accueil
		$('#rechercheFormAccueil').submit(function(event){
			console.log('penis');
			event.preventDefault();
			$(location).attr('href',"/recherche");
			socket.emit('rechercheAccueil', $('#rechercheFormAccueil').val());
				});
			
		
	


})(jQuery);
		// vote unique
		// recupère l'id du sondage venant d'être voté et le stock dans une variable de session 
		function sendId(voteId){
		    var id = voteId;
	        socket.emit('voteId', voteId)
    	};
