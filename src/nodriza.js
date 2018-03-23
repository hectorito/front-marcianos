$("#botoncrearnodriza")
.click(function(e)
{
	var idnodriza = document.getElementById('idnodriza').value;
	var nombrenodriza = document.getElementById('nombrenodriza').value;
	// var Json = {"IdNodriza":idnodriza,
	// 			"NombreNodriza":nombrenodriza
	// 			};
	// console.log("Prueba de recoleccion datos",idnodriza, nombrenodriza);
	// 			//"Parametro en Api":var, "Parametro en Api":var, etc...
	//

	$.ajax({
		url:"http://localhost:4242/newmothership/?name="+nombrenodriza+"&&id="+idnodriza,
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
