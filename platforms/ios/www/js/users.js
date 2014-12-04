Parse.initialize("mb5W1qycBdfI5o1n4HIa1kTay05cr3ZYWaY0ztB7", "Ju1HmxUHUi94vV1DQdblOHEBvZSwi94z2bHjKZuJ");

  var currentUser = Parse.User.current();
  if(!currentUser) {
    window.location.replace('index.html')
  }

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

      $('')

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

      $(document).on('click', '.absolute-pussy', function(){
        $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with The 'ANIMAL LOVER BADGE!!'")
        $('.notification .img-notif').html("<img src='img/pussy.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });

      $(document).on('click', '.attention-seeker', function(){
        $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with The 'ATTENTION SEEKER BADGE!!'")
        $('.notification .img-notif').html("<img src='img/attention.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });
      $(document).on('click', '.hardcore-gamer', function(){
        $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with The 'HARDCORE GAMER BADGE!!'")
        $('.notification .img-notif').html("<img src='img/gamer.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });
      $(document).on('click', '.nerd-alert', function(){
        $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with The 'NERD ALERT BADGE!!'")
        $('.notification .img-notif').html("<img src='img/nerd.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });
      $(document).on('click', '.heavy-drinker', function(){
        $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with The 'INTOXICATION BADGE!!'")
        $('.notification .img-notif').html("<img src='img/pint.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });
      $(document).on('click', '.proper-spanner', function(){
      $('.notification').fadeIn(300);
        $('.notification p').html("You awarded " + username + " with 'The PROPA SPANNER BADGE!!'")
        $('.notification .img-notif').html("<img src='img/spanner.png'>")

            var badgeObject = Parse.Object.extend("Badges");
            var badge = new badgeObject();
            var badgeName = $(this).attr('name')
            var senderUserObject = Parse.User.current();
            var senderUsername = senderUserObject.getUsername();

            badge.set("recipient", username);
            badge.set("badge_name", $(this).attr('class'));
            badge.set("sender", senderUserObject);
            badge.set("username", senderUsername);
            badge.save(null, {
              success: function(badge) {
                console.log('SUCCESSFULLY STORED IN DATABASE');
              },
              error: function(badge, error) {
                console.log('FAIL, NOT STORED IN DATABASE!');
              }
            });
        console.log("You awarded " + username + " with " +$(this).attr('class'))
       });

        $('.notification').on('click', function() {
          $(this).fadeOut('500');
        });

          $('.absolute-pussy').hide();
          $('.attention-seeker').hide();
          $('.hardcore-gamer').hide();
          $('.nerd-alert').hide();
          $('.heavy-drinker').hide();
          $('.proper-spanner').hide();

      $('.zero .username').click(function(){
        $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.one .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.two .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.three .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.four .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.five .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.six .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.seven .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.eight .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.eight .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.nine .badge-up').hide();
      });

      $('.nine .username').click(function(){
      $('.badge-up').slideToggle(function() {
          $('.absolute-pussy').fadeIn(600);
          $('.attention-seeker').fadeIn(600);
          $('.hardcore-gamer').fadeIn(600);
          $('.nerd-alert').fadeIn(600);
          $('.heavy-drinker').fadeIn(600);
          $('.proper-spanner').fadeIn(600);
        });
        $('.zero .badge-up').hide();
        $('.one .badge-up').hide();
        $('.two .badge-up').hide();
        $('.three .badge-up').hide();
        $('.four .badge-up').hide();
        $('.five .badge-up').hide();
        $('.six .badge-up').hide();
        $('.seven .badge-up').hide();
        $('.eight .badge-up').hide();
      });
    });

  // $()(function () {
  //   $('.absolute-pussy,.attention-seeker,.hardcore-gamer,.nerd-alert,.heavy-drinker,.proper-spanner').draggable({
  //       revert: true
  //   });
  //   $('.username').droppable({
  //       accept: '.absolute-pussy,.attention-seeker,.hardcore-gamer,.nerd-alert,.heavy-drinker,.proper-spanner'
  //   });
  // });




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