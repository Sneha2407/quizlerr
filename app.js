document.addEventListener('DOMContentLoaded', () => {
const correctAns=['B', 'B', 'B', 'B'];
const form=document.querySelector('.quiz-form');
const questions=document.querySelector('.questions');
const result=document.querySelector('.result');
const userName = prompt('Please enter your name:');

    result.querySelector('h4').textContent= `Hello, ${userName}`;
    const question = [
        {
          question: "What is Meaw's favourite color?",
          answers: ["Blue", "Pink"]
        },
        {
          question: "What does Meaw do?",
          answers: ["Bite", "Learn JS"]
        },
        {
          question: "What is Meaw's favourite food?",
          answers: ["Mutton Biryani", "Chicken Lasagne"]
        },
        {
          question: "Where is Meaw's office?",
          answers: ["Sector 5", "Ecospace"]
        }
      ];
    
      question.forEach((q,index)=>{
        const quesHTML=`<div class="my-5">
              <p class="lead font-weight-normal">${q.question}</p>

              <div class="form-check my-2 text-white-50">
                <input type="radio" name="q${index+1}" value="A" />

                <label class="form-check-label">${q.answers[0]}</label>
              </div>

              <div class="form-check my-2 text-white-50">
                <input type="radio" name="q${index+1}" value="B" />

                <label class="form-check-label">${q.answers[1]}</label>
              </div>`;
              questions.innerHTML+=quesHTML;
      })

    form.addEventListener('submit', e =>{
    e.preventDefault();

    let score=0;
    const userAns=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    
    userAns.forEach((ans, index)=>{
        if(ans===correctAns[index]){
            score=score+25;

        }
    }
    );
   scrollTo(0,0);
    result.querySelector('span').textContent= `${score} %`;
    result.classList.remove('d-none');
    localStorage.setItem(`${userName}`, `${score} %`);
    
})
});