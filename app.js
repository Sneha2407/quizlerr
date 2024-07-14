const correctAns=['B', 'B', 'B', 'B'];
const form=document.querySelector('.quiz-form');
const questions=document.querySelector('.questions');
const result=document.querySelector('.result');
const userName = prompt('Please enter your name:');

    result.querySelector('h4').textContent= `Hello, ${userName}`;
    // questions.querySelector('p').textContent="test";
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
})