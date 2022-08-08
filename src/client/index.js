import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

//SASS
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener("DOMContentLoaded", () => {  
     const buttonSubmit = document.getElementById("btn-submit");
     buttonSubmit.addEventListener("click", () => {
          handleSubmit();
     } )
} )

     

console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");

export { handleSubmit };
