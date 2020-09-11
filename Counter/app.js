// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn"); // this returns a node list which is like an array but not an array
                                                // we can use few methods of array like "for each" but not all of the array methods
btns.forEach(function(btn){ // the callback function needs a parameter to access the elements of the array (node list in this case)
    btn.addEventListener('click',function(e){  // e basically stands for event object
        // console.log(e.currentTarget.classList);  // returns classList of the button that was clicked
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
});
