var nav = document.querySelector('nav');
nav.classList.add('dis');
function my_menu(){
	
	var nav = document.querySelector('nav');
	if(nav.style.display === "none"){
		nav.classList.remove('dis');
		nav.style.display= "block";
	}else{
		nav.style.display = "none";
	}
	
}

var y = document.getElementById('my_header');

var sticky = y.offsetTop;


function sti() {
    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
       

    } else {
        y.classList.remove('sticky');
       
    }

}