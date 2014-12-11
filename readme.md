Badgr - Send your friends a badge!
==================================

## Synopsis

Badgr was the second project from FATS Inc as part of our final project at Makers Academy. Badgr is an cross-platform App built using PhoneGap - HTML, CSS and JavaScript. Parse was used for the database. The design was based around the Yo App, however, when clicking on a friend's name a box appears showing a selection of badge icons for you to send to your friend.

[Check out the demo video here!](https://www.youtube.com/watch?v=sUN0YaqLpF8&list=UU1NQjRun26caQPa6D6j3dsg)

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Parse
- PhoneGap

## Favourite Code Snippet

~~~
var ParseUserList = Parse.Object.extend("_User");
var query = new Parse.Query(Parse.User);
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
~~~

A team effort with this snippet. This piece of jQuery means that when the Friend List is generated the block of colour changes for each user (up to 10 users) before starting again. The same colour will not be seen twice on a page.

## Collaborators

- @Scully87 (http://www.github.com/Scully87)
- @andrewhercules (http://www.github.com/andrewhercules)
- @HatStephens (http://www.github.com/HatStephens)
- @fadieh (http://www.github.com/fadieh)

## Still to complete/refactor

- [ ] Testing - neither model nor feature tests were completed
- [ ] Get the App live

## Takeaway

PhoneGap was a great way to get a mobile App up and running without the need the learn a new native technology. However, it was slow and at times unresponsive. In hindsight, Meteor may have been worth looking at. That said, the time frame we had managing three projects meant that PhoneGap was ideal for us.