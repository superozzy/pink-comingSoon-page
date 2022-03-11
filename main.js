//set variables
const submitButton = document.querySelector('.submit');
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const error = document.querySelector('.error');
const inputEmail= document.getElementById('email');


// set my function for validation
function validEmail(e){
    e.preventDefault();
    console.log(inputEmail.value);
    if(inputEmail.value.match(regex)){
        error.textContent='Thank You for your subscribe!';
        console.log(error);
        error.style.color='green';
        inputEmail.style.border='1px solid green';
        error.style.display='flex';
        submitButton.classList.add('submitWithError');
        // inputEmail.value=' ';

                
           
    }else{
         error.textContent='Please provide a valid email address!';
         error.classList.add('errorMessage');
         inputEmail.style.border='1px solid red';
         error.style.color='red';
         error.style.display='flex';
         submitButton.classList.add('submitWithError');
        console.log(submitButton);
        
            
    }
   
   
}

// add event listener

submitButton.addEventListener('click', validEmail);


