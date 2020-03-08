const Register_forms= [...document.getElementsByClassName("task-content")];
const Next_Back = action => {
   	var activeIndex = Register_forms.indexOf(
		Register_forms.find(form => form.classList.contains("active"))
	);
   switch(action){
	   	case 'next':
	   	     Register_forms[activeIndex].classList.remove("active");
	         Register_forms[activeIndex+1].classList.add("active");
	   	break;
	         
	   	case 'back':
	          Register_forms[activeIndex].classList.remove("active");
	         Register_forms[activeIndex-1].classList.add("active");
	   	break;
   }
}