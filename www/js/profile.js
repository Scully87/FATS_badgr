Parse.initialize("mb5W1qycBdfI5o1n4HIa1kTay05cr3ZYWaY0ztB7", "Ju1HmxUHUi94vV1DQdblOHEBvZSwi94z2bHjKZuJ");

  var currentUser = Parse.User.current();
  if(!currentUser) {
    window.location.replace('index.html')
  }

$(document).ready(function() {




  var currentUserObject = Parse.User.current();
  var currentUsername = currentUserObject.getUsername();

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'attention-seeker');
  query.count({
    success:function(count) {
      $('#attention-seeker').text(count)
    }
  })

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'absolute-pussy');
  query.count({
    success:function(count) {
      $('#absolute-pussy').text(count)
    }
  })

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'hardcore-game');
  query.count({
    success:function(count) {
      $('#hardcore-gamer').text(count)
    }
  })

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'nerd-alert');
  query.count({
    success:function(count) {
      $('#nerd-alert').text(count)
    }
  })

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'heavy-drinker');
  query.count({
    success:function(count) {
      $('#heavy-drinker').text(count)
    }
  })

  var BadgeObject = Parse.Object.extend("Badges");
  var query = new Parse.Query(BadgeObject);
  query.equalTo("recipient", currentUsername);
  query.equalTo('badge_name', 'proper-spanner');
  query.count({
    success:function(count) {
      $('#proper-spanner').text(count)
    }
  })


  // for(i=0; i < 6; i++){
  //   var badgeName = arrayOfBadgeNames[i]
  //   var BadgeObject = Parse.Object.extend("Badges");
  //   var query = new Parse.Query(BadgeObject);
  //   var badgeNameId = '.' + badgeName
  //   var badgeCount = 0
  //   console.log(badgeNameId)
  //   query.equalTo("recipient", currentUsername);
  //   query.equalTo("badge_name", badgeName);
  //   query.count({
  //     success:function(count) {
  //       var count = count
  //     }
  //   })
  //   console.log(badgeNameId + count)
  // }


  $('.logout_button').on('click', function() {
    Parse.User.logOut();
    var currentUser = Parse.User.current();
    console.log(currentUser);
  });


});
