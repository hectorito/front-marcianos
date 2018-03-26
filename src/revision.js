//TODO: no realiza llamada API (Tal vez boton no funciona)
$("#botoncrearrevision")
.click(function(e)
{
	var idrevision=document.getElementById('idrevision').value;
	var nombrerevisor=document.getElementById('nombrerevisor').value;
	var idaeronave=document.getElementById('idaeronave').value;
	var fecha=document.getElementById('fecha').value;
	$.ajax({
		//data:Json,
		url:'http://localhost:4242/generatereview/?id='+idrevision+'&&name='+nombrerevisor+'&&aircraft_id='+idaeronave+'&&created_at='+fecha,
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

//hay que crear listar revisiones boton***********

$("#listarpasajeros")
.click(function(e)
{
	//debe mandar el id del revisor y obtener:
	// lista de pasajeros y nombre del revisor
	$.ajax({
		//data:Json,
		//url:'http://localhost:4242/generatereview/?id=idrevision&&name=nombrerevisor&&aircraft_id=idaeronave',
		//type:'get',
		beforeSend:function(){
			window.alert("Se solicita lista, momento");
		},
		success:function(response){
			dataType: 'json';
			var Json = $.parseJSON(response);

			for ( var i = 0; Json.length > i; i++){
			$('#despliegelistapasajeros').append('<span> ID: ' +Json[i].id +'  Nombre:  ' + Json[i].name +' </span>')
			}
			// for (var i = 0; Json.length > i; ++i) {
			// $('#despliegelistapasajeros').append('<div id="newdiv1">'+Json[i].id+' " " '+Json[i].name' +" " "</>')
			// }
		},
		error:function(){
			 Json = [
			{
				"id": 1,
				"name": "Nicolas"
			},
			{
				"id": 2,
				"name": "Hector"
			}
			]
			for ( var i = 0; Json.length > i; i++){
			$('#despliegelistapasajeros').append('<span> ID: ' +Json[i].id +'  Nombre:  ' + Json[i].name +' </success>')
			}
			// for (var i = 0; Json.length > i; ++i) {
			// $('#despliegelistapasajeros').append('<div id="newdiv1">'+Json[i].id+' " " '+Json[i].name' +" " "</>')
			// }
			alert("no sucedio... error");}
	});
}

	);





