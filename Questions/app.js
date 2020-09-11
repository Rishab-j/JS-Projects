//Using selectors inside the element -----------------------------

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn'); // (Notice : i am not using the document, i am using question instead)
    // console.log(btn);
    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if(item !== question){  // if this item is not actually the question that i am clicking // jis question ki baat ni ho rhi(jo question clicked ni h) ussey class remove krdo
                item.classList.remove('show-text')
            }
        });
        
        question.classList.toggle('show-text');
    });
});






// BY Traversing the dom----------------------

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });