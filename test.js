var array1 = [{ 
    name: "tom",
    answers: ["1", "2", "3", "4"]
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



var j = 1

function personality () {

    answerValue = 0;

for (var i = 0; i < array2[0].answers.length; i++) {
    var numArray1 = parseInt(array1[j].answers[i]);
    var numArray2 = parseInt(array2[0].answers[i]);
    
    var questionDifference = Math.abs(numArray1 - numArray2);

    answerValue += questionDifference;
}
if (answerValue < matchDifference) {
    matchDifference = answerValue
    console.log(answerValue);
    console.log(array1[j].name);
    console.log(matchDifference)
    
}

}

personality();
