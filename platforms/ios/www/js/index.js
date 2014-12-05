//===============
//  APP EVENTS
//===============

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

//===============
//   PARSE DB
//===============
  Parse.initialize("P70VXUD04dCyhKBcfVFnFyUkLFyMh8tPjataJUrQ", "PLoXJgGw7vRLRh5tIhfXi6JdpMiR5QKUfsdbzArx");

  $('.logout_button').on('click', function() {
    Parse.User.logOut();
    var currentUser = Parse.User.current();
    console.log(currentUser);
  });

  Parse.initialize("P70VXUD04dCyhKBcfVFnFyUkLFyMh8tPjataJUrQ", "PLoXJgGw7vRLRh5tIhfXi6JdpMiR5QKUfsdbzArx");

    $('#sign_up_button').on('click', function() {
      var self = this;
      var username = $('#username').val()
      var password = $('#password').val()
      Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
        success: function(user) {
            window.location.href="users.html"
            console.log('Success!')
          },
        error: function(user, error) {
          console.log('Error!')
          }
      });
    });

    $('#sign_in_button').on('click', function(event) {

      var username = $('#username').val();
      var password = $('#password').val();
      Parse.User.logIn(username, password, {
        success: function(user) {
          window.location.href="users.html"
          console.log('success!')
          console.log(user)
        },
        error: function(user, error) {
          console.log('login error!')
        }
      });
    });


//=================
//   ANIMATIONS
//=================
$('#badger-logo').draggable();

$('#badger-logo').click(function() {
  $(this).one('webkitAnimationEnd', function() {
    $(this).removeClass('pulse');
  }).addClass('pulse');
});

$('#badger-logo').on('click', function() {
    $('#popupBasic').toggle("slow", function(){
      $('#fbk-button').toggle(600);
      $('.home-text').fadeToggle(500);
    });
});

$("#fbk-button").click(function() {
  $('#fbk-button').css('border-bottom-style', 'none');
});