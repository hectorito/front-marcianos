$("#botoncrearaeronave")
.click(function(e)
{
	var idaeronave=document.getElementById('idaeronave').value;
	var nombre=document.getElementById('nombrenave').value;
	var capacidad=document.getElementById('capacidad').value;
	var idnodrizaorigen=document.getElementById('idnodrizaorigen').value;
	var idnodrizadestino=document.getElementById('idnodrizadestino').value;
	console.log("Prueba de recoleccion datos",nombre, idaeronave);
	//"Parametro en Api":var, "Parametro en Api":var, etc...
	var url = "http://localhost:4242/newaircraft/?id="+idaeronave+"&&name="+nombre+"&&maxcap="+capacidad+"&&origin_id="+idnodrizaorigen+"&&destination_id="+idnodrizadestino;
	$.ajax({
		url: url,
		type:'GET',
		beforeSend:function(){
			window.alert("Se gestiona el Envio, momento");
		},
		success:function(response){
			console.log(response);
		},
		error:function(){alert("no sucedio... error");}
	});
}

	);


$("#listaraeronaves")
.click(function(e)
{
	$.ajax({
		url:'http://localhost:4242/showaircrafts/',
		type:'get',
		beforeSend:function(){
			window.alert("Se gestiona el listado, momento");
		},
		success:function(response){
			dataType: 'json';
			var Json = jQuery.parsejson(response);

			for ( var i = 0; Json.length > i; i++){
			$('#listadoaeronaves').append('<span> ID: ' +Json[i].id +'  Nombre:  ' + Json[i].name +' </span>')
			}
			console.log(response);
		},
		error:function(){
			Json = [
			{
				"id": 1,
				"name": "infinity"
			},
			{
				"id": 2,
				"name": "voyager"
			}
			]
			for ( var i = 0; Json.length > i; i++){
			$('#listadoaeronaves').append('<span> ID: ' +Json[i].id +'  Nombre:  ' + Json[i].name +' </span>')
			}
			alert("no sucedio... o no hay Aeronaves");}
	});
}

	);
