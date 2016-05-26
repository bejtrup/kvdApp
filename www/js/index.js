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

        var h = $(window).height();
        var w = $(window).width();
        crosshair.css("top", h/2);
        $("#crosshair img").css("width", w/2.3).show();
        $("#runePeep").css({
          width: w/3,
          top: h/2
        });


        var words = ['And','Angreb','Anke','Apparat','Arm','Bag','Balance','Ball','Kartoffel','Ballon','Banan','Bande','Kul','Lille','Basker','Kano','Beton','Bil','Konto','Krus','Mad','Bokse','Pen','Blind','Gynge','Bror','Brun','Brød','Bast','Buks','Hus','Bunke','Misse','Potte','Bøjle','Musik','Bøtte','Mor','Chef','Chili','Chips','Corn','Creme','Kajak','Damp','Os','Kontra','Dild','Direktør','Dog','Dreng','Dressing','Drift','isme','Durum','Dyne','Dåse','Engangs','Etøjet','Falde','Far','Fedte','Feeling','Filet','Finger','Fis','Fisk','Fiske','Fjeder','Flad','Flamme','Flæske','Fløjte','Svær','Fold','For','Stød','Frisk','Fjeder','Fylde','Fælles','Fører','Gane','Gas','General','Svine','Glasur','Glat','Greb','Tisse','Gris','Grotte','Gruppe','Sved','Gummi','Gylle','Brand','Gæst','Sprække','Tyr','Hals','Hammer','Handske','Handske','Hav','Smat','Heste','Hipster','Hjelm','Hot','Hud','Hul','Hule','Trolde','Buller','Svans','Hævner','Hønse','Hår','Svamp','Indianer','Tunge','Tyk','Jern','Junge','Kage','Dame','Kamel','Kammer','Kanal','Basse','Karl','Balle','Kasse','Kaster','Tomands','Stram','Klister','Kloak','Klods','Bjarke','Dej','Krig','Blod','Krydder','Krølle','Kugle','Barberet','Kuling','Kurv','Kutter','Kvæler','Kys','Kæde','Kæmpe','Kæp','Kød','Sex','Kølle','Køns','Pavillon','Tog','Skam','Leg','Øje','Lejr','Lem','Uld','Bas','Liste','Lokum','Luft','Lugte','Lus','Læbe','Løb','Løs','Lag','Blodig','Skede','Dele','Mande','Maskine','Massage','Medister','Bæ','Charlatan','Thai','Mund','Bøsse','Mælke','Mørke','Nakke','Nisse','Næse','Nøgen','Okse','Ophæng','Orange','Daniel','Ost','Overraskelses','Parfume','Patter','Bolle','Penge','Pige','Spyd','Piske','Pølse','Plante','Pleje','Plæne','Mis','Postej','Bæver','Præmie','Pukkel','Pul','Pumpe','Pung','Piller','Ribs','Ring','Rom','Rotte','Rulle','Sår','Ryste','Ræs','Ræve','Rød','Salat','Salt','Salve','Sans','Køle','Side','Sigøjner','Sjover','Lap','Makker','Skib','Skjuler','Sko','Skole','Skorpe','Skud','Skygge','Skæg','Skål','Slag','Slam','Slange','Slap','Slik','Herre','Smæld','Smør','So','Soft','Sol','Sort','Sovs','Spalte','Spejder','Gård','Pind','Stamme','Stang','Stativ','Kiosk','Stiv','Store','Stål','Sukker','Inder','Hvid','Græs','Giver','Fod','Søster','Søvn','Runde','Tag','Tagselv','Tand','Tank','Tarm','Tartelet','Telt','Tennis','Motor','Greve','Lår','Toilet','Plastik','Top','Torske','Traktor','Hunde','Tromme','Trommel','Trop','Træ','Træk','Trænings','Tun','Is','Tur','Jagt','Halm','Tyv','Tårn','Ulve','Under','Unge','Ur','Varm','Vin','Vorte','Væske','Yngel','Yngle','Ældre','Leif','Økonomi','Øl','Gul','Lygte'];

//,'Glas','Flaske','Gigolo','Sofa','Pude','Kat','Serviet','Skærm','Stof','Lighter','Filt','Denim','Guld','Sølv','Velour','Slæde','Garn','Metal','Vand','Dun'

          var suggestionsWordone = [];
          $.each(words, function(k, v){
                  suggestionsWordone.push(v);
          });
          suggestionsWordone.sort();

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

          if(wordTop >= 0 && wordTop < 2450 && wordLeft >= 0 && wordLeft <3300) {
             $("#box").css({
                  top: wordTop ,
                  left: wordLeft 
             });
             var posLeft = crosshair.position().left;
             var posTop = crosshair.position().top; 

             var x = (-1*wordLeft + posLeft) - 4 ;
             var y = (-1*wordTop + posTop ) - 4;

             $("#panzoom").panzoom("setMatrix", [ 1, 0, 0, 1, x, y ], { animate: true, relative: false });
        
          } else {
               inputWordOne.val('');
               inputWordTwo.val('');
               sug.html('');
               WordOne = '';
               WordTwo = '';
               //alert("Du for stiv!");
          }
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



          //     var text = $('#panzoom').getTransform();
              var wordCordLeft = Math.round( nearPosLeft / scale );
              var wordCordTop = Math.round( nearPosTop / scale );

              
              if(wordCordTop >= 0 && wordCordTop < 2450 && wordCordLeft >= 0 && wordCordLeft < 3300 ) {
               $("#box").css({
                 top: nearPosTop / scale ,
                 left: nearPosLeft / scale 
               });

                wordOne = makeWord( wordCordTop );
               wordTwo = makeWord( wordCordLeft );
               
              inputWordOne.val( wordOne );
              inputWordTwo.val( wordTwo ); 
                
              } else {
                 //alert("neh");              
            }

        }


        $("#fire").click(function(){
            fire();
            sug.html('');
        });

        $("#find").click(function(){
            getPos();
            sug.html('');
        });

        $("#share").click(function(){
            var pos_link = wordOne+"-"+wordTwo;
            window.plugins.socialsharing.share('RUNE siger jeg er i : '+ pos_link +'                                         Åben RUNE appen for at finde mig eller brug dette link (linket kræver lidt net) ', null, null, 'http://bejtrup.github.io/tag/#'+pos_link+'/');
            sug.html('');
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
          var posSplit = pos.split("-");
          wordOne = posSplit[0];
          wordTwo = posSplit[1];
          inputWordOne.val(wordOne);
          inputWordTwo.val(wordTwo);
          getPos();
        }

// autocomplete 
  var sug = $("div#suggestions");
  
  inputWordOne.on("click", function(){
    $(this).select();
    if(inputWordTwo.val() == ''){
      wordTwo = '';
    }
  });

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
          $(this).val( $.trim(value) );
          $.each(suggestionsWordone, function(k, v){         
            if( v.indexOf(value) == 0 ){
              if(k<=244){
                wordOne = v;
               fillSuggetionbox(); 
              }
            }
          });       
      }
    }

  });

  inputWordOne.on('blur', function(){
    //sug.html('');
  });
  inputWordOne.on('focus', function(){});

  inputWordTwo.on("click", function(){
    $(this).select();
  });

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
          $(this).val( $.trim(value) );
          $.each(suggestionsWordone, function(k, v){         
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

$("div#menubtn").on('click', function(){
        $("#menu").addClass("out");
});
$("#close").on('click', function(){
        $("#menu").removeClass("out");
});

  function makeCap(str){
    var str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  }