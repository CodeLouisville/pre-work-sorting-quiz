// QUESTIONS

const questions = [
    {
      "question": "What was your favorite subject in high school?",
      "answer1": "Art",
      "answer1Total": "1",
      "answer2": "Math",
      "answer2Total": "2",
      "answer3": "Science",
      "answer3Total": "3"
    },
    {
      "question": "If you could take a peek under the “hood” of any code whose would it be?",
      "answer1": "ESPN Sports Statistics",
      "answer1Total": "2",
      "answer2": "Facebook",
      "answer2Total": "1",
      "answer3": "CERN Collider",
      "answer3Total": "3"
    },
    {
      "question":
        "Of the following movie types which do you like best?",
      "answer1": "Art House Film",
      "answer1Total": "1",
      "answer2": "Action Movie",
      "answer2Total": "3",
      "answer3": "A Documentary",
      "answer3Total": "2"
    },
    {
      "question": "Spend your time doing:",
      "answer1": "A puzzle",
      "answer1Total": "3",
      "answer2": "Answering questions on the internet",
      "answer2Total": "2",
      "answer3":"Or writing a story.",
      "answer3Total": "1"
    },
    {
      "question": "When you see a building you:",
      "answer1": "Admire the outside.",
      "answer1Total": "1",
      "answer2": "Wonder what happens inside",
      "answer2Total": "2",
      "answer3": "Think about how it was built",
      "answer3Total": "3"
    },
    {
      "question": "I like to build something that will last for ages, even if it takes time.",
      "answer1": "Yes",
      "answer1Total": "3",
      "answer2": "Kinda - Not building the great Pyramids",
      "answer2Total": "2",
      "answer3": "No",
      "answer3Total": "1"
    },
    {
      "question": "What kind of Company would you like to work for:",
      "answer1": "Large company",
      "answer1Total": "3",
      "answer2": "Startup",
      "answer2Total": "2",
      "answer3": "Agency",
      "answer3Total": "1"
    },
    {
      "question": "What Annoys you most:",
      "answer1": "A website where the buttons are in the wrong spot",
      "answer1Total": "3",
      "answer2": "Things not working right",
      "answer2Total": "2",
      "answer3": "Not finding the answers to your questions",
      "answer3Total": "1"
    },
    {
      "question": "Would your friend describe you you as:",
      "answer1": "Skeptical",
      "answer1Total": "2",
      "answer2": "Storyteller",
      "answer2Total": "1",
      "answer3": "Problem Solver",
      "answer3Total": "3"
    },
    {
      "question": "Which one of the following would you like to build a competitor for:",
      "answer1": "Facebook",
      "answer1Total": "1",
      "answer2": "Yahoo Stocks",
      "answer2Total": "2",
      "answer3": "Microsoft Office",
      "answer3Total": "3"
      
     },
    {
      "question": "Which one is your favorite Video Game:",
      "answer1": "Minecraft",
      "answer1Total": "2",
      "answer2": "2048",
      "answer2Total": "3",
      "answer3": "Candy Crush",
      "answer3Total": "1"
    } 
     
    
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              <h1>Summary</h1>
              <p>Possible Pathway options. Remeber this is just for fun. Pick the best option for yourself.</p>
              <p>15 - 21- Application Development with C#</p>
              <p>10 - 15 - Data Analytics with Python</p>
              <p>5 - 10 - Front End with Javascript </p>
              <p>5 - Neo?</p>
          </div>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //<button class="restart">Restart Quiz</button>


  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);