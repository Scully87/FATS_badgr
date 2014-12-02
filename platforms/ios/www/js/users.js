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
        var scrollHandler = new ScrollHandler(),
            links = $('.each');
            links.each(function(i, element) {
                $(element).on('click', function(e) { scrollHandler.toggleScrollLock(); });
            });
    });

      $('.zero').click(function(){
      $('.badge-up').slideToggle();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.one').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.two').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.three').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.four').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.five').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.six').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.seven').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.eight .badge-up').hide();
      });

      $('.eight').click(function(){
      $('.badge-up').slideToggle();
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
      });


      // $('.img-1').draggable();

      // $('.badge').on('click', function() {
      //   console.log('you have clicked on a badge')
      // });

      $(document).on('click', '.username-entry', function() {

        var recipientName = $(this).find('.username').text()

        // $(this).find('.username').css('background-color', 'yellow');

          $('.badge').on('click', function() {

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
