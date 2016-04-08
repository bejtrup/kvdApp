/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 1000);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
        // pr 10 px da 1px=1meter
        var crosshair = $("#crosshair");
        var h = $(window).height() / 2;
        crosshair.css("top", h);

        var words = ['And','Angreb','Anke','Apparat','Arm','Bag','Balance','Ball','Balle','Ballon','Banan','Bande','Barberet','Bas','Basker','Basse','Beton','Bil','Bjarke','Blod','Blodig','Bokse','Bolle','Bord','Brand','Bror','Brun','Brød','Buks','Buks','Buller','Bunke','Bæ','Bæver','Bøjle','Bøsse','Bøtte','Cement','Chef','Chili','Chips','Corn','Creme','Dame','Damp','Daniel','Dej','Dild','Direktør','Dog','Dreng','Dressing','Drift','Dun','Durum','Dyne','Dåse','Engangs','Etøjet','Falde','Far','Fedte','Feeling','Filet','Finger','Fis','Fisk','Fiske','Fjeder','Flad','Flamme','Flæske','Fløjte','Fod','Fold','For','Forsamling','Frisk','Fyld','Fylde','Fælles','Fører','Gane','Gas','General','Giver','Glasur','Glat','Greb','Greve','Gris','Grotte','Gruppe','Græs','Gummi','Gylle','Gynge','Gæst','Gård','Halm','Hals','Hammer','Handske','Handske','Hav','Herre','Heste','Hipster','Hjelm','Hot','Hud','Hul','Hule','Hunde','Hus','Hvid','Hævner','Hønse','Hår','Inder','Indianer','Is','Jagt','Jern','Junge','Kage','Kajak','Kamel','Kammer','Kanal','Kano','Karl','Kartoffel','Kasse','Kaster','Kat','Kiosk','Klister','Kloak','Klods','Konto','Kontra','Krig','Krus','Krydder','Krølle','Kugle','Kul','Kuling','Kurv','Kutter','Kvæler','Kys','Kæde','Kæmpe','Kæp','Kød','Køle','Kølle','Køns','Lade','Lag','Lap','Lego','Leif','Lejr','Lem','Lighter','Lille','Liste','Lokum','Luft','Lugte','Lus','Læbe','Løb','Løs','Lår','Mad','Makker','Maler','Mande','Maskine','Massage','Medister','Misse','Mor','Motor','Mund','Musik','Mælke','Mørke','Nakke','Nisse','Næse','Nøgen','Okse','Ophæng','Orange','Os','Ost','Overraskelses','Parfume','Patte','Pen','Penge','Pige','Pind','Piske','Plads','Plante','Pleje','Plæne','Pop','Postej','Potte','Præmie','Pukkel','Pul','Pumpe','Pung','Pølse','Ribs','Ring','Rom','Rotte','Rulle','Runde','Ryste','Ræs','Ræve','Rød','Salat','Salt','Salve','Sans','Sex','Side','Side','Sjover','Skam','Skede','Skib','Skjuler','Sko','Skole','Skorpe','Skud','Skygge','Skæg','Skål','Slag','Slam','Slange','Slap','Slik','Smat','Smæld','Smør','So','Soft','Sol','Sort','Sovs','Spalte','Spejder','Sprække','Spyd','Stamme','Stang','Stativ','Sten','Stiv','Store','Stål','Sukker','Svamp','Svans','Sved','Svine','Svær','Søster','Søvn','Sår','Tag','Tagselv','Tand','Tank','Tarm','Tartelet','Telt','Tennis','Thai','Tisse','Tog','Toilet','Tomands','Top','Torske','Traktor','Trold','Tromme','Trommel','Trop','Træ','Træk','Trænings','Tun','Tunge','Tur','Tyk','Tyr','Tyv','Tårn','Ulve','Under','Unge','Ur','Varm','Vin','Vorte','Væske','Yngel','Yngle','Ældre','Øje','Økonomi','Øl','Gul','Lygte','Glas','Flaske','Gigolo','Sofa','Pude','Plastik','Serviet','Skærm','Stof','Uld','Filt','Denim','Guld','Sølv','Velour','Slæde','Garn','Metal','Vand','Dun'];

        var inputWordOne = $("input#wordOne");
        var inputWordTwo = $("input#wordTwo");
        var wordOne = '';
        var wordTwo = '';

        $("#panzoom").panzoom();
        $("#panzoom").panzoom("pan", -1175, -800, { relative: true });

        //$("#panzoom").panzoom { width: 100%; height: 100%; }

        function getPos(){

           WordOne = $.trim( inputWordOne.val()) ;
           WordTwo = $.trim( inputWordTwo.val()) ;

           wordTop = getWord(WordOne)*10;
           wordLeft = getWord(WordTwo)*10;

           var scale = getScale();

          if(wordTop >= 0 && wordLeft >= 0 ) {
             $("#box").css({
                  top: wordTop ,
                  left: wordLeft 
                });
             } else {
               alert("Du for stiv!");
             }

             var posLeft = crosshair.position().left;
             var posTop = crosshair.position().top; 

             var x = (-1*wordLeft + posLeft) - 4 ;
             var y = (-1*wordTop + posTop ) - 4;

             $("#panzoom").panzoom("setMatrix", [ 1, 0, 0, 1, x, y ], { animate: true, relative: false });
        }

        function fire(){
           var scale = getScale();
           
           var posLeft = crosshair.position().left;
           var posTop = crosshair.position().top; 
              
              var mapLeft = $("#map").position().left;
              var mapTop = $("#map").position().top; 
               
               var realPosLeft = posLeft - mapLeft;
               var realPosTop = posTop - mapTop;

              
              var z = 10 * scale;
              var nearPosTop = (parseInt(realPosTop / z) * z);
              var nearPosLeft = (parseInt(realPosLeft / z) * z);

               $("#box").css({
                 top: nearPosTop / scale ,
                 left: nearPosLeft / scale 
               });

          //     var text = $('#panzoom').getTransform();
              var wordCordLeft = Math.round( nearPosLeft / scale );
              var wordCordTop = Math.round( nearPosTop / scale );

              var wordLeft = makeWord( wordCordLeft );
              var wordTop = makeWord( wordCordTop );
               
              inputWordOne.val( wordTop );
              inputWordTwo.val( wordLeft );  
        }


        $("#fire").click(function(){
            fire();
        });

        $("#find").click(function(){
            getPos();
        });

        $("#share").click(function(){

            var posOne = inputWordOne.val();
            var posTwo = inputWordTwo.val(); 
            window.plugins.socialsharing.share('RUNE siger jeg er i : '+ posOne +' '+posTwo+'                                         Åben RUNE appen for at finde mig eller brug dette link (linket kræver net) ', null, null, 'http://bejtrup.github.io/tag/#'+pos_link+'/');
            
        });

        function makeWord(x) {
          var x = x / 10;
          return words[x];
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function getWord(word) {
          var word = capitalizeFirstLetter(word);
          var pos = jQuery.inArray( word, words )
          return  pos;
        }

        function getScale(){
           var obj = $('#panzoom');
           var transformMatrix = obj.css("-webkit-transform") ||
             obj.css("-moz-transform")    ||
             obj.css("-ms-transform")     ||
             obj.css("-o-transform")      ||
             obj.css("transform");
           var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
           var x = matrix[0];//translate x

           return x
        }

        function getLeft(){
           var obj = $('#panzoom');
           var transformMatrix = obj.css("-webkit-transform") ||
             obj.css("-moz-transform")    ||
             obj.css("-ms-transform")     ||
             obj.css("-o-transform")      ||
             obj.css("transform");
           var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
           var left = matrix[12] || matrix[4];//translate x

           return left
        }

        function getTop(){
           var obj = $('#panzoom');
           var transformMatrix = obj.css("-webkit-transform") ||
             obj.css("-moz-transform")    ||
             obj.css("-ms-transform")     ||
             obj.css("-o-transform")      ||
             obj.css("transform");
           var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
           var top = matrix[13] || matrix[5]//translate x

           return top
        }

        function handleOpenURL(url) {
          var pos = url.substr(url.indexOf("/") + 2);
          var posSplit = pos.split('-');
          inputWordOne.val(posSplit[0]);
          inputWordTwo.val(posSplit[1]);
          getPos();
        }

// autocomplete 
  var sug = $("div#suggestions");
  inputWordOne.on("keyup", function(e){
    var value = $(this).val();
    sug.html('');
    if(e.keyCode == 32 || e.keyCode == 13 ) {
      // validate
      inputWordTwo.focus();
    }
    else {
      if(value != '' ){       
          value = makeCap(value);
          $(this).val(value);
          $.each(words, function(k, v){         
            if( v.indexOf(value) == 0 ){
              wordOne = v;
              fillSuggetionbox(); 
            }
          });       
      }
    }

  });

  inputWordOne.on('blur', function(){
    //sug.html('');
  });
  inputWordOne.on('focus', function(){});


  inputWordTwo.on("keyup", function(e){
    var value = $(this).val();
    sug.html('');
    if(e.keyCode == 32 || e.keyCode == 13 ) {
      // validate
      inputWordTwo.focus();
    }
    else {
      if(value != '' ){       
          value = makeCap(value);
          $(this).val(value);
          $.each(words, function(k, v){         
            if( v.indexOf(value) == 0 ){
              wordTwo = v;
              fillSuggetionbox(); 
            }
          });       
      } else {
        wordTwo = '';
      }
    }
  });

  inputWordTwo.on('blur', function(){
    //sug.html('');
  });
  inputWordTwo.on('focus', function(){
    if(inputWordOne.val() == '' && inputWordTwo.val() == '') {
      inputWordOne.focus();
    }
  });

  function fillSuggetionbox(srt) {
    if(wordOne != '' && wordTwo == ''){
      sug.prepend("<div class='sugBox one'>"+wordOne+"</div>");
    }
    if( wordTwo != ''){
      sug.prepend("<div class='two'><span class='sugBox wOne'>"+wordOne+"</span> <span class='sugBox wTwo'> "+wordTwo+"</span></div>");
    }
  }

sug.on("click", ".one", function(){
  wordOne = $(this).html()
    inputWordOne.val( wordOne );
    sug.html('');
    inputWordTwo.focus();
  });
sug.on("click", ".two", function(){
    wordOne = $(this).find(".wOne").html();
    wordTwo = $(this).find(".wTwo").html() 
    inputWordOne.val( wordOne );
    inputWordTwo.val( wordTwo );
    sug.html('')
    getPos();
  });


  function makeCap(str){
    var str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }


