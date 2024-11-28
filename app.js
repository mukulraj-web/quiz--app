

document.addEventListener("DOMContentLoaded",()=>{
let questionArray =[
    {
        question:"Who is the Prime Minister of india?",
        choiches:["Mukesh Ambani","Narendra Modi","Ratan Tata","Mukul raj"],
        answer:"Narendra Modi"
    },
    {
        question:"Who is the President of india?",
        choiches:["Mukesh Ambani","Narendra Modi","Droupadi Murmu","Mukul raj"],
        answer:"Droupadi Murmu"
    }
]

let score =0
let selectedAnser =""
let currentQuestionIndex = 0
let container =document.getElementById("container")
let heading =document.getElementById("heading")
let mainBox =document.getElementById("ul")
let questionBox =document.getElementById("question")
let startBtn =document.getElementById("button")
let nextBtn =document.getElementById("next")
let questionMainBox = document.getElementById("questionBox")
let scoreDisplay =document.getElementById("score")
let resultContainer = document.getElementById("result-container")
let restartBtn = document.getElementById("restart-btn")
startBtn.addEventListener("click",()=>{
  renderQuestions()

})
let anwserArray =[]
ul.addEventListener("click",(e)=>{
    
    if(e.target.tagName ==="LI"){
        // e.target.classList.add("selected")
        selectedAnser=e.target.textContent
    //   let answer =[]
    //   answer.push(choice)
    // //   anwserArray.push(answer)
    // // console.log(anwserArray)
    }
    // console.log()
    
})

nextBtn.addEventListener("click",function(){
    if(selectedAnser ===""){
       return
    }
   
   anwserArray.push(selectedAnser)
   selectedAnser =""
//    console.log("answerArray",anwserArray)
//    console.log(selectedAnser)
currentQuestionIndex++
if(currentQuestionIndex<questionArray.length){
    renderQuestions()
} else{
    // console.log(score)
    mainBox.classList.add("hidden")
    nextBtn.classList.add("hidden")
    questionBox.classList.add("hidden")
    // console.log(anwserArray)
   for (let i = 0; i <questionArray.length; i++) {
    if(anwserArray[i]=== questionArray[i].answer){
        score= score+1
       
    }
    
   }
   resultContainer.classList.remove("hidden")
   scoreDisplay.textContent =`${score} out of ${questionArray.length}` 
   console.log(score)
}

   

})

// function renderQuestions(){
//     startBtn.classList.add("hidden")
//     nextBtn.classList.remove("hidden")
//     mainBox.classList.remove("hidden")
//    mainBox.textContent =""
   
//    questionBox.textContent =questionArray[currentQuestionIndex].question
//    questionArray[currentQuestionIndex].choiches.forEach(choice => {
//     let choiceBox = document.createElement("li")
//     choiceBox.classList.add("choice")
//     choiceBox.textContent =choice
//     mainBox.appendChild(choiceBox)
    
//    });

// }
function renderQuestions() {
    startBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    mainBox.classList.remove("hidden");

    // Clear previous choices
    mainBox.textContent = "";

    // Display the current question
    questionBox.textContent = questionArray[currentQuestionIndex].question;

    // Display the choices
    questionArray[currentQuestionIndex].choiches.forEach(choice => {
        let choiceBox = document.createElement("li");
        choiceBox.textContent = choice;
        choiceBox.classList.add("choice");
        mainBox.appendChild(choiceBox);
    });
}
restartBtn.addEventListener("click",function(){
    resultContainer.classList.add("hidden")
    
    questionBox.classList.remove("hidden")

    currentQuestionIndex =0
     score =0
    selectedAnser =""
    anwserArray =[]
    renderQuestions()
})
})