let monBouton = document.getElementById('affichage')
monBouton.onclick = function() 
{
	document.getElementById('bloc_centre').style.display='flex';
	document.getElementById('affichage').style.display='none';
}

let maRecherche = document.getElementById('search')
maRecherche.onclick = function()
{
	let val_input = document.getElementById('input').value;
	val_input.replace(/ /g,"+")
	maRecherche.setAttribute('href',"http://www.google.com/#q="+val_input);

}

setTimeout(function() {alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')}, 10000);
