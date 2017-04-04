(function(){
	const target = document.querySelector(".target");
	const links = document.querySelectorAll(".mynav a");
	const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];

	function mouseenterFunc() {
		if (!this.parentNode.classList.contains("active")) {
			for (let i = 0; i < links.length; i++) {
				if (links[i].parentNode.classList.contains("active")) {
					links[i].parentNode.classList.remove("active");
					}
					links[i].style.opacity = "0.25";
			}	
		}
	}


}