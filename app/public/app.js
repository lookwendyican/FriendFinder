

// $(document).ready(function () {
//     console.log("ready!");

//     // $('input.autocomplete').autocomplete({
//     //     data: {
//     //         "Apple": null,
//     //         "Microsoft": null,
//     //         "Google": 'https://placehold.it/250x250'
//     //     },
//     // }); //End autocomplete

//     var questions = [
//         "I like to enjoy a good meal and a bottle of wine with my bff.",
//         "I like to party and get thrashed with my friends.",
//         "I enjoy nature (hiking, snorkeling, ect…).",
//         "I enjoy traveling around the world and learning about different cultures and different foods. ",
//         "I enjoy Netflix and chill.",
//         "I enjoy experimenting with different recipes in the kitchen.",
//         "I could eat at fast food chains every single day.",
//         "I enjoy watching sports (live games and TV).",
//         "I enjoy working out (running, heavy weights, CrossFit).",
//         "I  enjoy mindful practices and lighter workouts (yoga, pilates, barre."
//     ];



//     function allQuestions() {
        
//          for (var i = 0; i < questions.length; i++) {

//             console.log(questions[i]);
            

//             var divRow = $('<div>').attr('class', 'row');
//             var divCol = $('<div>').attr('class', 'col s12 center');
//             divRow = divRow.append(divCol);


//             var divCardPanel = $('<div>').attr('class', 'card-panel pink');
//             divCol = divCol.append(divCardPanel);



//             var addquestions = $('<span>').attr({ class: 'white-text', id: 'questions' }).text(questions[i]);
//             divCardPanel = divCardPanel.append(addquestions);



//             var range = $('<p>').attr('class', 'range-field');
//             addquestions = addquestions.append(range);
//             var inputRange = $('<input>').attr({ type: "range", id: "answers", min: "1", max: "5" })            
//             range = range.append(inputRange);

            
//     }; //End of for loop
//      $('#addPanelQuestions').append(divRow);
//     }; //End of allQuestions function
// allQuestions();


// });//End of document ready