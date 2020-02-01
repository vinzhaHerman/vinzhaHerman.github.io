// var arrs = document.querySelectorAll('.nav-links');
// arrs.forEach(element => {
// 	element.classList.remove('active')	
// });


// window.addEventListener("load", function(){
// 	var x = document.getElementsByClassName("tabcontent");
// 	for (var i = 0; i < x.length; i++) {
// 		x[0].style.display = 'grid';
// 		if(i>0){
// 			x[i].style.display = 'none';
// 		}
// 	}
// });

window.addEventListener("scroll", function(){
    var y = Math.round(window.scrollY);
    if (y == 0) {
        document.getElementById('navb').classList.remove("navbar-active");
    } else {
        document.getElementById('navb').classList.add("navbar-active");
	}





	var height = window.pageYOffset / 2;
	document.getElementsByTagName("body")[0].style = 'background-position-y :' + height + 'px';





	const abt = document.querySelector("#about").getBoundingClientRect();
	const pro = document.querySelector('#project-gal').getBoundingClientRect();
	const con = document.querySelector('#contacts').getBoundingClientRect();
	const windowWidth = window.screen.width;
	if(abt.top>0 && abt.top<windowWidth/4){
		this.document.getElementById('aboutlink').classList.add("active");
	}
	else if(pro.top>0 && pro.top<windowWidth/4){
		this.document.getElementById('prolink').classList.add("active");
	}
	else if(con.top>0 && con.top<windowWidth/3){
		this.document.getElementById('conlink').classList.add("active");
	}
	else{
		this.document.getElementById('aboutlink').classList.remove("active");
		this.document.getElementById('prolink').classList.remove("active");
		this.document.getElementById('conlink').classList.remove("active");
	}

	
});

// var gallery = {
// 	tabs	: function(tab_id, tab_content){
// 		var x = document.getElementsByClassName("tabcontent");
// 		for (let i = 0; i < x.length; i++) {
// 			x[i].style.display = 'none';
// 		}
// 		document.getElementById(tab_content).style.display = 'grid';
		
// 		var y = document.getElementsByClassName("bt-selector");
// 		for (let i = 0; i < y.length; i++) {
// 			y[i].className = 'bt-selector'; 
// 		}
// 		document.getElementById(tab_id).className = 'bt-selector active';
// 	}
// };

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
	  	left: rect.left,
	  	top: rect.top,
	  	scrollX: window.scrollX,
		scrollY: window.scrollY
	};
  }






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sl-content");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}





// var ov = document.getElementById('modalClose');
// var mo = document.getElementById('md-overlay');
// var md = document.getElementById('the-modal');
// var mt = document.getElementById('modaltrigger');

// mt.addEventListener('click', function(){
// 	mo.style.display = "block";
// 	md.classList.add("fadeIn");
// 	setTimeout(function(){
// 		md.classList.remove("fadeIn");
// 	}, 1000);
// })

// ov.addEventListener('click', function(){
// 	md.classList.add("fadeOut");
// 	setTimeout(function(){
// 		md.classList.remove("fadeOut");
// 		mo.style.display = "none";
// 	}, 500);
// });
