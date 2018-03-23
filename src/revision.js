$("#botoncrearrevision")
.click(function(e)
{
	var idrevision=document.getElementById('idrevision').value;
	var nombrerevisior=document.getElementById('nombrerevisor').value;
	var idaeronave=document.getElementById('idaeronave').value;
	var fecha=document.getElementById('fecha').value;
	var cantidadpasajeros=document.getElementById('cantidadpasajeros').value;
	var Json = {"IdRevision":idrevision, 
				"NombreRevisor":nombrerevisior,
				"IdAeronave":idaeronave,
				"Fecha":fecha,
				"Cantidad":cantidadpasajeros
				};
	console.log("Prueba de recoleccion datos",idrevision, idaeronave);
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