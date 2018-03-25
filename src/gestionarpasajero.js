$("#botoncrearpasajero")
.click(function(e)
{
	var nombre=document.getElementById('nombrepasajero').value;
	var id=document.getElementById('idpasajero').value;
	var Json = {"NombrePasajero":nombre, "IdPasajero":id};
	console.log("Prueba de recoleccion datos",nombre, id);
				//"Parametro en Api":var, "Parametro en Api":var, etc...

	$.ajax({
		data:Json,
		url:"http://localhost:4242/newpassenger/?name="+nombre+"&&id="+id,
		type:'get',
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


$("#botonasignarpasajero")
.click(function()
{
	var idpasajero=document.getElementById('idpasajeroasignar').value;
	var idaeronave=document.getElementById('idaeronaveasignar').value;
	//var Json = {"IdPasajero":idpasajero, "IdAeronave":idaeronave};
	//console.log("definicion de elementos",idpasajero, idaeronave);
				//"Parametro en Api":var, "Parametro en Api":var, etc...

	$.ajax({
		//data:Json,
		url:"http://localhost:4242/addpassenger/?passenger_id="+idpasajero+"&&aircraft_id="+idaeronave,
		type:'get',
		beforeSend:function(){
			window.alert("Se gestiona la asignación, momento");
		},
		success:function(response){
			console.log(response);
		},
		error:function(){alert("no sucedio... err´or");}
	});
}

	);


// TODO: Arreglar bajar pasajero, no realiza llamada API (Tal vez boton no funciona)
$("#botonbajarpasajero")
.click(function(e)
{
	var idpasajero=document.getElementById('idpasajerobajar').value;
	var idaeronave=document.getElementById('idaeronavebajar').value;
	//var Json = {"IdPasajero":idpasajero, "IdAeronave":idaeronave};
	//console.log("Identificación de sujetos bajados",idpasajero, idaeronave);
				//"Parametro en Api":var, "Parametro en Api":var, etc...

	$.ajax({
		//data:Json,
		url:"http://localhost:4242/removepassenger/?passenger_id="+idpasajero+"&&aircraft_id="+idaeronave,
		type:'get',
		beforeSend:function(){
			window.alert("Se gestiona el bajar al pasajero, momento");
		},
		success:function(response){
			console.log(response);
		},
		error:function(){alert("no sucedio... error");}
	});
}

	);


$("#bottonlistarpasajerosaeronave")
 .click(function(e)
{
	var idaeronave=document.getElementById('idaeronavelistarpasajero').value;
	$.ajax({
		url:"http://localhost:4242/showpassengers/",
		type:'get',
		beforeSend:function(){
			window.alert("Se gestiona el listado, momento");
		},
		success:function(response){
			console.log(response);
		},
		error:function(){alert("no sucedio... error");}
	});
}
);
