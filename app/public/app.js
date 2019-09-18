

$(document).ready(function () {

    //Capture the form input
    $('#submit').on('click', function(event) {
        event.preventDefault();
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

    }); //End of submmit function

    //AJAX to post data to the friends API
    $.post('/api/friends', userData, function(data) {
        console.log(data);
    });






});//End of document ready