$("#botoncrearaeronave")
.click(function(e)
{
	var nombre=document.getElementById('nombrenave').value;
	var idaeronave=document.getElementById('idaeronave').value;
	var capacidad=document.getElementById('capacidad').value;
	var idnodrizaorigen=document.getElementById('idnodrizaorigen').value;
	var idnodrizadestino=document.getElementById('idnodrizadestino').value;
	var Json = {"NombreAeronave":nombre, 
				"IdPasajero":idaeronave,
				"Capacidad":capacidad,
				"NodrizaOrigen":idnodrizaorigen,
				"NodrizaDestino":idnodrizadestino
				};
	console.log("Prueba de recoleccion datos",nombre, idaeronave);
				//"Parametro en Api":var, "Parametro en Api":var, etc...
	
	$.ajax({
		data:Json,
		url:'localhost/API/GestionarPasajero/crearpasajero',
		type:'post',
		beforeSend:function(){
			window.alert("Se gestiona el Envio, momento");
		},
		success:function(response){
			console.log(response);
		},
		error:function(){alert("no sucedio... err´or");}
	});
}

	);

