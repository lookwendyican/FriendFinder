//The apiRoutes file includes two basic routes for app.get and app.post function which used for displaying a JSON data and incoming survey results off al possible friends. 


//The app.post  is used to handle the compatability logic.


// Dependencies
var friends = require('../data/friends.js');

// Export the function
module.exports = function(app) {

    // The app.get requests handles when a user visits the page
    app.get('/api/friends', function(req, res) {
        res.json(friends);
        console.log(friends);

    });

    // The app.post request handles when a user submits a form and thus submits data to the server. 
    
    app.post('/api/friends', function(req, res) {
    		// Set variables only needed for the post and loops through all matches
       
    // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: []
      };
      var scoresArray = [];
      for(var i=0; i < req.body.scores.length; i++){
        scoresArray.push( parseInt(req.body.scores[i]) )
      }
      newFriend.scores = scoresArray;
  
  
      // Cross check the new friend entry with the existing ones
      var scoreComparisionArray = [];
      for(var i=0; i < friends.length; i++){
  
        // Check each friend's scores and sum difference in points
        var currentComparison = 0;
        for(var j=0; j < newFriend.scores.length; j++){
          currentComparison += Math.abs( newFriend.scores[j] - friends[i].scores[j] );
        }
  
        // Push each comparison between friends to array
        scoreComparisionArray.push(currentComparison);
      }
  
      // Determine the best match using the postion of best match in the friends array
      var bestMatchPosition = 0; // assume its the first person to start
      for(var i=1; i < scoreComparisionArray.length; i++){
        
        // Lower number in comparison difference means better match
        if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
          bestMatchPosition = i;
        }
  
      }
  
      // ***NOTE*** If the 2 friends have the same comparison, then the NEWEST entry in the friends array is chosen
      var bestFriendMatch = friends[bestMatchPosition];
  
  
  
      // Reply with a JSON object of the best match
      res.json(bestFriendMatch);
  
  
  
      // Push the new friend to the friends data array for storage
      friends.push(newFriend);
  
    });
  
  }//End of module export
  