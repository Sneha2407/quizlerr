document.addEventListener('DOMContentLoaded', () => {
    const scores=document.getElementById('score-history');

    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key);
    userDataHtml=`<tr>
            <td>${key}</td>
            <td>${localStorage.getItem(key)}</td>
          </tr>`
          scores.innerHTML+=userDataHtml;
    }


});    