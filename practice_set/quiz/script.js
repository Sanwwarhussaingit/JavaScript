// const question =[

//     {
//    "qusn": "Who develop c langyage?",
//     "a": "Denish ritche",
//     "b": "Brendan Eich",
//     "c": "James Gosling",
//     "d": "Bjarne Stroustrup",
//     "correct": "a"
//     },
//     {
//    "qusn": "What is the size of float and double in java",
//     "a": "32 and 64",
//     "b": "32 and 32",
//     "c": "64 and 64",
//     "d": "64 and 32",
//     "correct": "a"
//     },
//     {
//    "qusn": "Automatic type conversion is possible in which of the possible cases? ",
//     "a": "Byte to int",
//     "b": "int to long",
//     "c": "long to int",
//     "d": "Short to int",
//     "correct": "b"
//     },

// ];

// let index =0;
// let total = question.length;
// let right = 0;
// let wrong =0;

// const questionBox= document.querySelector("#questionBox");
// const optionInputs = document.querySelectorAll(".option");


// const loadQuestion = function(){

//     if(index === total){
//         return endQuiz();
//     }
//     reset();

//     const data = question[index];
//     // console.log(data);
//     questionBox.innerText = `${index+1})${data.qusn}`;
//     optionInputs[0].nextElementSibling.innerText = data.a;
//     optionInputs[1].nextElementSibling.innerText = data.b;
//     optionInputs[2].nextElementSibling.innerText = data.c;
//     optionInputs[3].nextElementSibling.innerText = data.d;

// }


// const submitQuiz= function(){
//     const data = question[index];
//     const ans = getAnswer();
//     if(ans === data.correct){
//         right++;

//     }else{
//         wrong++;
//     }
//     index++;
//     loadQuestion();
// }

// const getAnswer = function(){
//     let answer
//     optionInputs.forEach(function(input){

//         if(input.checked)
//         {
//             answer= input.value;
        
//             // console.log(input.value);   
//         }
//     })
//     return answer;
// }
// const reset =function(){
//     optionInputs.forEach(function(input){
//         input.checked = false;
//     })

// }

// const endQuiz = function(){
//     document.querySelector('#box').innerHTML = `
//     <h3>Thank you for play </h3>
//     <h2>${right} / ${total}</h2>
//     `;

// }

// loadQuestion();