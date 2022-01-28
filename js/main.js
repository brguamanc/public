AOS.init();


var animation = bodymovin.loadAnimation({
	container: document.getElementById('anim'),
	renderer:'svg',
	loop: true,
	autoplay: true,
	path: 'https://assets5.lottiefiles.com/private_files/lf30_WdTEui.json'

})
let ubicacionPrincipal= window.pageYOffset;

window.addEventListener("scroll",function(){
	let desplazamientoActual = window.pageYOffset;
	if(ubicacionPrincipal>=desplazamientoActual){
		document.getElementsByTagName("nav")[0].style.top="0px";
	}else{
		document.getElementsByTagName("nav")[0].style.top="-100px";
	}
	ubicacionPrincipal=desplazamientoActual;

})

//menu
let enlacesHeader=document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;
document.querySelectorAll(".barras")[0].addEventListener("click",function(){
	if(semaforo){
		document.querySelectorAll(".barras")[0].style.color="#fff";
		semaforo=false;
	}else{
		document.querySelectorAll(".barras")[0].style.color="#00ebc7";
		semaforo=true;

	}
	enlacesHeader.classList.toggle("menudos")
}

)
document.querySelectorAll(".enlaces-header")[0].addEventListener("click",function(){
	if(semaforo){
		document.querySelectorAll(".barras")[0].style.color="#fff";
		semaforo=false;
	}else{
		document.querySelectorAll(".barras")[0].style.color="#00ebc7";
		semaforo=true;

	}
	enlacesHeader.classList.toggle("menudos")
}

)

