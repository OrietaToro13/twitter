function agregar(){
	var tareas = document.getElementById('tarea').value;
	document.getElementById('tarea').value = "";
	//recuperamos texto ingresado en textarea y limpio textarea//

	var cont = document.getElementById('contenedor');
	//indicamos donde van a estar las tareas que recupere de textarea/

	var nuevaTareas = document.createElement('div');
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement('span');
	//creamos nuestro nuevos nodos elementos//

	if(tareas == null || tareas.length == 0){
		alert('¡Error! debe ingresar tarea');
		return false;
	}

	elementoContenedor.appendChild(textoNuevaTarea);
	nuevaTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevaTareas);
	//asignamos padres a nodos credos//

	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class', 'check');
	var basura = document.createElement('span');
	basura.classList.add('fa', 'fa-trash-o');
	var cora = document.createElement('span');
	cora.classList.add('fa', 'fa-heart');
	//creamos checkbox e iconos, les damos atributo y clases//

	nuevaTareas.appendChild(chck);
	nuevaTareas.appendChild(basura);
	nuevaTareas.appendChild(cora);
	//asignamos padres a nodos creados//

	chck.addEventListener('click', function(){
		elementoContenedor.classList.toggle('tachado');
	})
	//agregamos un evento al hacer clic, para que elimine o agregue la clase "tachado" al elementoContenedor//

	basura.addEventListener('click', function(){
		cont.removeChild(nuevaTareas);
	})//removemos el icono al basurero al hacerle click sobre el//

	cora.addEventListener('click', function(){
		cora.classList.toggle('red');
	})//creamos funcion click para el corazon y le asignamos la clase red de css//



}








