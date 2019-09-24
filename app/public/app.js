

$(document).ready(function () {
    $('.modal').toggle();


    var newUser = [];
    //Capture the form input
    $('#submit').on('click', function (event) {
        event.preventDefault();
        console.log("submitted");
        // Create an object for the user's data
        var userData = {
            name: $("#userName").val(),
            photo: $("#userPic").val(),
            scores: [
                $("#answers1").val(),
                $("#answers2").val(),
                $("#answers3").val(),
                $("#answers4").val(),
                $("#answers5").val(),
                $("#answers6").val(),
                $("#answers7").val(),
                $("#answers8").val(),
                $("#answers9").val(),
                $("#answers10").val()
            ]
        }; //End of user data
        console.log(userData);


        //AJAX to post data to the friends API
        $.post('/api/friends', userData, function (data) {
            console.log(data);
                 // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                 $("#match-name").text(data.name);
                 $("#match-img").attr("src", data.photo);
                 // Show the modal with the best match
                 $("#results-modal").modal;
        });
    }); //End of submmit function
});//End of document ready

