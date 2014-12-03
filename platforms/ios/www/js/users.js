Parse.initialize("mb5W1qycBdfI5o1n4HIa1kTay05cr3ZYWaY0ztB7", "Ju1HmxUHUi94vV1DQdblOHEBvZSwi94z2bHjKZuJ");

    var source = $('#user-template').html();
    var template = Handlebars.compile(source);

    var ParseUserList = Parse.Object.extend("User");
    var query = new Parse.Query(ParseUserList);
    query.limit(100)
    query.find({
      success: function(data) {
        var counter = 0
        var timArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        var userList = $.each(data, function(count, listOfAllUsers) {})
        $.each(userList, function(count, individualUser) {
          var userObjectAsJSON = JSON.stringify(individualUser);
          var user = JSON.parse(userObjectAsJSON)
          user.userNumber = counter

          $('#list-of-users').append(template(user))
          var classNumber = $('.user-number').last().text();
          $('.username-entry').last().attr('class', timArray[classNumber]);

          if(counter < 9){
          counter++
        } else {
          counter = 0
        }

        })
      }
    })
    // allows user to select user, then select badge, which transmits name of badge and user information to Parse database

    $(document).ready(function(){

      $('body').css('cursor', 'pointer');

    var ScrollHandler = (function() {
    //Assumes jQuery has initialized
    var hasScrollListener = false;
    var toggleScrollLock = function() {
      if(!hasScrollListener) {
          $('body').css('overflow', 'hidden');
          $('.each').css('color', '#ff0000');
      }
      else {
          $('body').css('overflow', '');
          $('.each').css('color', '#0000ff');
      }
      hasScrollListener = !hasScrollListener;
    }
    //Return a public toggle method
      return {
          toggleScrollLock: toggleScrollLock
      };
    });

    $(document).ready(function() {

      var username = 'nil'
      console.log(username)

        var scrollHandler = new ScrollHandler(),
            links = $('.each');
            links.each(function(i, element) {
                $(element).on('click', function(e) {

                  username = $(this).find('.username').text()
                  // console.log(username)
                  scrollHandler.toggleScrollLock(); });
            });
    });
      $(document).on('click', '.img-1', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });
      $(document).on('click', '.img-2', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });
      $(document).on('click', '.img-3', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });
      $(document).on('click', '.img-4', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });
      $(document).on('click', '.img-5', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });
      $(document).on('click', '.img-6', function(){
        console.log("You awarded " + username + " with " + $(this).attr('class'))
       });

          $('.img-1').hide();
          $('.img-2').hide();
          $('.img-3').hide();
          $('.img-4').hide();
          $('.img-5').hide();
          $('.img-6').hide();

      $('.zero .username').click(function(){
        $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.one .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.two .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.three .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.four .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.five .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.six .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.seven .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.eight .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.img-1').fadeIn(600);
          $('.img-2').fadeIn(600);
          $('.img-3').fadeIn(600);
          $('.img-4').fadeIn(600);
          $('.img-5').fadeIn(600);
          $('.img-6').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
      });



      $(document).on('click', '.username-entry', function() {

        var recipientName = $(this).find('.username').text()

        // $(this).find('.username').css('background-color', 'yellow');

          $('#img .img-1').on('click', function() {
            console.log('hello')
            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", recipientName);
            badge.set("badge_name", badgeName);
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESS!');
              },
              error: function(badge, error) {
                console.log('FAIL!');
              }
            });

            // console.log($(this).attr('name'));
            // console.log('you have sent a badge to ' + recipientName)
            // setTimeout(function() { location.reload() }, 3000);

          });
        });
    });
