<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Skippr. A jQuery plugin for creating tasteful slideshows.</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" sizes="57x57" href="apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="60x60" href="apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="76x76" href="apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="152x152" href="apple-touch-icon-152x152.png">
        <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196">
        <link rel="icon" type="image/png" href="favicon-160x160.png" sizes="160x160">
        <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="mstile-144x144.png">

        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="skippr/css/jquery.skippr.css">
        
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->



      

        <div class="hero">

            <div id="random">
                <div class="yellow"></div>
                <div style="background-image: url(img/test2.jpg)"></div>
                <div style="background-image: url(img/test5.jpg)"></div> 
                <div style="background-image: url(img/test3.jpg)"></div>                   
                <div style="background-image: url(img/test4.jpg)"></div>
            </div>

            <!-- <div id="random">
                <img src="img/test3.jpg">
                <img src="img/test4.jpg">
                <img src="img/test1.jpg">
                <img src="img/test5.jpg">
            </div> -->





            <div class="container">
                <div class="tagline">
                    <h1>Skippr.</h1>
                    <p>A faster, lighter slideshow plugin.<br> Only 3kb minified.</p>
                </div>
                <div class="downloads">
                    <div class="btn-container">
                         <a href="skippr-master.zip" target="_blank"><div class="btn">Download</div></a>
                        <a href="http://www.github.com/austenpayan/skippr" target="_blank"><div class="btn">Github</div></a>
                    </div>
                   
                </div>
            </div>
           
        </div>
        <div class="content">
            <h2>The setup.</h2>
            <p>Include jquery.skippr.css inside your head tag and jquery.skippr.js just before the closing body tag.</p>
            <p>Be sure to include jQuery before jquery.skippr.js</p>
            <pre>
            <code id="code-header">
    &lt;head>
        &lt;title>Your Awesome Website&lt;/title>        
        &lt;link rel="stylesheet" href="css/jquery.skippr.css"&gt;
    &lt;/head>
    &lt;body>
            </code>
            </pre>
            <pre>
            <code id="code-footer">
        &lt;script src="//code.jquery.com/jquery-1.11.0.min.js">&lt;/script>
        &lt;script src="js/jquery.skippr.js">&lt;/script>
    &lt;/body>
            </code>
            </pre>
            

            <p>Create a target element with divs inside, one for each slide, 
                and add a background image with css or the style attribute.
                Skippr targets div tags inside of the selected element with background-images applied to them.
                Put this target element inside of a container element styled and positioned to your liking.
                The target element will completely fill it's parent container element.</p>
            <p>&nbsp;</p>
            <p>**Note: The container element must have a specified width and height, and position other than static to work properly.</p>
            <pre>
            <code id="code-elements">
        &lt;div id="container">
            &lt;div id="theTarget">
                &lt;div style="background-image: url(img/image1.jpg)">
                &lt;div style="background-image: url(img/image2.jpg)">
                &lt;div style="background-image: url(img/image3.jpg)">
                &lt;div style="background-image: url(img/image4.jpg)">
                &lt;div style="background-image: url(img/image5.jpg)">
            &lt;/div>    
        &lt;/div>
            </code>
            </pre>

            <h2>Initiate.</h2>
            <p>Just select the parent element with jQuery and call the skippr method. Thats it!</p>
            <pre>
            <code id="code-initiate">
        $(document).ready(function(){

            $("#theTarget").skippr();

        });    
            </code>
            </pre>

            <h2>Options.</h2>
            <p>Pass in an options object as a parameter to the skippr method for customization.</p>
            <pre>
            <code id="code-options">
        <span class="code-comment">// Defaults </span>  
        $("#theTarget").skippr({

            speed: 500,
            navType: 'block',
            childrenElementType: 'div',
            arrows: true,
            autoPlay: false,
            autoPlayDuration: 5000

        });
            </code>
            </pre>
            <p><b>speed</b> : enter length of time in milliseconds you want the transition between slides to take. Default is 500.</p>
            <p><b>navType</b> : enter a string of what shape you want the navigation elements to be. Skippr currently
                takes either "block" or "bubble". Default is "block".</p>
            <p><b>childrenElementType</b> : choose the children element type of the target element. Skippr now accepts either 'div' or 'img'. Default is 'div'.  </p>
            <p><b>arrows</b> : boolean value determining whether or not to display navigation arrows. Default is true. Set to false to hide arrows.</p>
            <p><b>autoPlay</b> : boolean value determining whether or not to use auto-playing functionality in the slideshow. Default is false. Set to true to activate auto-play. </p>
            <p><b>autoPlayDuration</b>  <span class="new-option">new</span> : sets the amount of time in milliseconds to display each slide when autoPlay is running. Default is 5000 milliseconds.</p>
            
            <hr>

            
            <p>Skippr will be an ongoing project.</p>
            <p>Check back or star on Github for updates.</p>

            <hr>

            
        </div>
        <div class="hero">
            <div id="random2">
                <div style="background-image: url(img/test2.jpg)"></div>
                <div style="background-image: url(img/test5.jpg)"></div> 
                <div style="background-image: url(img/test3.jpg)"></div>                   
                <div style="background-image: url(img/test4.jpg)"></div>
            </div>
        </div>
        <div class="download">
            <div>
                <h1>Get it.</h1>
                <div class="btn-container">
                    <a href="skippr-master.zip" target="_blank"><div class="btn">Download</div></a>
                     <a href="http://www.github.com/austenpayan/skippr" target="_blank"><div class="btn">Github</div></a>
                </div>
                
            </div>
        </div>
        <footer>
            <div class="info">
                <p>created by austen payan</p>
                <p><a href="mailto:austenpayan@gmail.com">austenpayan@gmail.com</a></p>
                <p><a href="http://iamapioneer.com" target="_blank">iamapioneer.com</a></p>
            </div>
        </footer>



           
           <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
           <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
           
        




        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="skippr/js/jquery.skippr.js"></script>
        <script>
            $(document).ready(function() {

                $("#random").skippr();
                $("#random2").skippr({
                    navType: 'bubble',
                    autoPlay: true,
                    autoPlayDuration: 2000
                });


            });

        </script>
       

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>
