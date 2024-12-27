function volume_sphere() {
	event.preventDefault();
    let elem=document.getElementById("radius");
	let radius=parseFloat(elem.value);
	if(radius<0 ||isNaN(radius)){
		document.getElementById("volume").value="NaN";
		return;
	}
	let elem1=document.getElementById("volume");
	let vol=(4/3)*Math.PI*(radius**3);
	elem1.value=vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
