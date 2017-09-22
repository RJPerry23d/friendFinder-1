var array1 = [{ 
    name: "tom",
    answers: ["1", "2", "3", "4"]
},
{
    name: "Sue",
    answers: ["3","1","1","2"]
},
{
    name: "best friendzy",
    answers: ["3","2","1","2"]
}]

var array2 = [{
    name: "wes",
    answers: ["4", "3", "2", "1"]
}]

var answerValue = 50;

var match;

var matchDifference = 20;



var friendsIndex = 0;

function searchFriends () {
    for (j = 0; j < array1.length; j++) {
        friendsIndex = j;
        personality();
    }
    console.log("You perfect match is..... " + match);
}

function personality () {

    answerValue = 0;

for (var i = 0; i < array2[0].answers.length; i++) {
    
    var numArray1 = parseInt(array1[friendsIndex].answers[i]);
    var numArray2 = parseInt(array2[0].answers[i]);
    
    var questionDifference = Math.abs(numArray1 - numArray2);

    answerValue += questionDifference;
}

    if (answerValue < matchDifference) {

        matchDifference = answerValue;
        match = array1[friendsIndex].name;
        console.log(answerValue);
        console.log(array1[friendsIndex].name);
        console.log(matchDifference)
    }

    


}

searchFriends();
