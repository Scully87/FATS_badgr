Parse.initialize("mb5W1qycBdfI5o1n4HIa1kTay05cr3ZYWaY0ztB7", "Ju1HmxUHUi94vV1DQdblOHEBvZSwi94z2bHjKZuJ");

    var source = $('#user-template').html();
    var template = Handlebars.compile(source);

    var ParseUserList = Parse.Object.extend("User");
    var query = new Parse.Query(ParseUserList);
    query.limit(100)
    query.find({
      success: function(data) {
        var counter = 0
        var timArray = ['zero', 'one', 'two', 'three', 'four', 'tim']
        var userList = $.each(data, function(count, listOfAllUsers) {})
        $.each(userList, function(count, individualUser) {
          var userObjectAsJSON = JSON.stringify(individualUser);
          var user = JSON.parse(userObjectAsJSON)
          user.userNumber = counter

          $('#list-of-users').append(template(user))
          var classNumber = $('.user-number').last().text();
          $('.username-entry').last().attr('class', timArray[classNumber]);

          if(counter < 5){
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
