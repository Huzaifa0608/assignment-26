var questions = [
    {
      question: "HTML Stands for ______________",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______________",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______________",
      options: ["JS", "JS", "JavaScript", "JS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______________",
      options: ["RAM", "RAM", "Random Access Memory", "RAM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______________",
      options: ["SQL", "SQL", "Structured Query Language", "SQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },
  ];

  var displayQuestion = document.getElementById("question")
  var currentQuestionNum = document.getElementById("span1")
  var totalQuestionNum = document.getElementById("span2")
  var  optionsParent = document.getElementById("options")

  var indexVal = 0
  var marks = 0
  function renderQuestion(){
    var que = questions[indexVal]
  displayQuestion.innerHTML= que.question
  totalQuestionNum.innerHTML = questions.length
  currentQuestionNum.innerHTML = indexVal + 1;

  optionsParent.innerHTML = ""
  for( var i =0 ; i<que.options.length;i++){
    optionsParent.innerHTML += ` <div> 
    <button onclick="cheAns('${que.correctAnswer}','${que.options[i]}')","disaballed()">
    ${
        que.options[i]
    }
    </button>
    </div`
  }
}




function nextQue(){
    indexVal++
    renderQuestion()
}

function cheAns(a,b){
    console.log(a,b)
    if(a == b ){
        marks = marks + 1;
    }
    nextQue()
getMarks()

    // console.log(marks)
}
renderQuestion()
function getMarks(){

    if(currentQuestionNum === totalQuestionNum){
    alert(marks)
    }
}
