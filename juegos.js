function juego1() {	 	
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];
var numero = prompt("Ingrese un numero entre 0 y 25");

if (numero < 0 || numero >25) {
	alert("El numero proporcionado no es valido");
	juego1()
 	}else{
 		var letra = prompt("Ahora elija una letra al azar que crea que acompaña a ese numero");

 		if (letras[numero]== letra.toUpperCase()) {
	 			resultado.innerHTML="El numero y la letra coinciden, GANASTE !!!"
 		}else{
	 			resultado.innerHTML="No hay coincidencia, PERDISTE"
 		}
 	}
}


function juego2() {
	var pregunta = prompt("El perro es...(ingrese un valor del 1 al 5) 1: mamifero 2: pez 3: anfibio 4: reptil 5: ave")
	var respuestas = ["","mamifero","resp2","resp3","resp4","resp5"]
	
	if (pregunta==1) {
		alert("correcto")
		var pregunta = prompt("Los perros son...(ingrese un valor del 1 al 3)1: oviparo 2: viviparo 3: ovoviparo")
		if (pregunta==2) {
			alert("correcto")
			var pregunta = prompt("Los perros segun su desplazamiento...(ingrese un valor del 1 al 4)1: caminan 2: vuelan 3: nadan 4: reptan")
			if (pregunta==1) {
				alert("ganaste")
				resultado.innerHTML="Ganaste !!!"
			}else{
				alert("incorrecto")
				resultado.innerHTML="Perdiste, solo te falto una !!!"
			}
		}else{
			alert("incorrecto")
			resultado.innerHTML="Perdiste, acertaste 2/3 !!!"
		}

	}else{
		alert("incorrecto")
		resultado.innerHTML="Perdiste, Solo acertaste 1/3 !!!"
	}
}