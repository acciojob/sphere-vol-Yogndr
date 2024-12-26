function volume_sphere() {
    let elem=document.getElementById("radius");
	let radius=parseFloat(elem.value);
	if(radius<0 ||isNan(radius)){
		document.getElementById("volume").textcontent="NaN";
		return;
	}
	let elem1=document.getElementById("volume");
	let vol=(4/3)*(3.14)*(content**3);
	elem1.texcontent=vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
