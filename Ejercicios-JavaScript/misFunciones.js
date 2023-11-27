/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar(){
	alert("hola mundo");
}

/**
 * Cambia el valor de las unidades de medida en el formulario 'unidades'.
 * @method cambiarUnidades
 * @param {string}
 * @param {number|string}
 * @return {void}
 */
function cambiarUnidades(id, value){
	if(isNaN(value)){
		alert("se ingreso un valor invalido")
		document.unidades.unid_metro.value   = "";
		document.unidades.unid_pulgada.value = "";
		document.unidades.unid_pie.value     = "";	
		document.unidades.unid_yarda.value   = "";
	}else if (id == "metro"){
		document.unidades.unid_pulgada.value = Math.round(39.3701*value*100)/100;
		document.unidades.unid_pie.value 	 = Math.round(3.28084*value*100)/100;
		document.unidades.unid_yarda.value   = Math.round(1.09361*value*100)/100;
	}
}

function gradoRadian(id, value){
	if(isNaN(value)){
		alert("se ingreso un valor invalido")
		document.medidas.unid_grados = "";
		document.medidas.unid_radianes = "";
	}else if (id == "grados"){
		document.getElementById("radianes").value = 57.2957795131*value;
	}
}

function visibilidad(id){
	if (id == "mostrarDiv"){
		document.getElementById("hiding-div").style.opacity = 0;
	} else if (id == "ocultarDiv"){
		document.getElementById("hiding-div").style.opacity = 1.0;
	}
}

function fSuma(){
	document.getElementsByName("sum_total")[0].value = Number(document.getElementsByName("sum_num1")[0].value) + Number(document.getElementsByName("sum_num2")[0].value);
}

function fResta(){
	document.getElementsByName("res_total")[0].value = Number(document.getElementsByName("res_num1")[0].value) - Number(document.getElementsByName("res_num2")[0].value);
}

function fMult(){
	document.getElementsByName("mul_total")[0].value = Number(document.getElementsByName("mul_num1")[0].value) * Number(document.getElementsByName("mul_num2")[0].value);
}

function fDiv(){
	document.getElementsByName("div_total")[0].value = Number(document.getElementsByName("div_num1")[0].value) / Number(document.getElementsByName("div_num2")[0].value);
}

function cargarWeb(){
	var cant, unidad, urlComp;

	cant = document.getElementById("distancia").value;
	unidad = document.getElementsByName("unidades")[0].value;

	urlComp = "segundaWeb.html#" + cant + "#" + unidad;
	window.open(urlComp);
}

function cargarResultado(){
	var urlComp, can, un;

	urlComp = window.location.href.split("/")[10];

	can = urlComp.split("#")[1]
	un = urlComp.split("#")[2]

	document.getElementById("dist").value = can + " " + un;
}
