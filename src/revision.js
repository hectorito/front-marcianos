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
		url:'http://localhost:4242/generatereview/?id=idrevision&&name=nombrerevisor&&aircraft_id=idaeronave',
		type:'get',
		beforeSend:function(){
			window.alert("Se gestiona el Envio, momento");
		},
		success:function(response){
			var json = $.parseJSON(response);

			for (var i = 0; json.length > i; ++i) {
				$('#listarpasajeros').append('<div class="listarpasajeros">'+json[i].ID+' json[i].Nombre</>');
			}

			console.log(response);
		},
		error:function(){alert("no sucedio... error");}
	});
}

	);







