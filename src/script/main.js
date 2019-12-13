window.addEventListener("load", function(){
	var x = document.getElementsByClassName("tabcontent");
	for (var i = 0; i < x.length; i++) {
		x[0].style.display = 'grid';
		if(i>0){
			x[i].style.display = 'none';
		}
	}
});

window.addEventListener("scroll", function(){
    var y = Math.round(window.scrollY);
    if (y == 0) {
        // alert("working");
        document.getElementById('navb').classList.remove("navbar-active");
    } else {
        document.getElementById('navb').classList.add("navbar-active");
	}
	
	var height = window.pageYOffset / 2;
	document.getElementsByTagName("body")[0].style = 'background-position-y :' + height + 'px';
	// console.log(height);
	
});

var gallery = {
	tabs	: function(rudr_tab_id, rudr_tab_content){
		var x = document.getElementsByClassName("tabcontent");
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'none';
		}
		document.getElementById(rudr_tab_content).style.display = 'grid';
		
		var y = document.getElementsByClassName("bt-selector");
		var i;
		for (i = 0; i < y.length; i++) {
			y[i].className = 'bt-selector'; 
		}
		document.getElementById(rudr_tab_id).className = 'bt-selector active';
	}
};

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
	  left: rect.left + window.scrollX,
	  top: rect.top + window.scrollY
	};
  }

var obj = document.querySelector("#about");
// var rect = obj.getBoundingClientRect();
console.log(getOffset(obj));
