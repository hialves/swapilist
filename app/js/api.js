function api_call(main_path,page){
	
	const url_api = "https://swapi.co/api/"+main_path

	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
		data: {"page":page}
	}).done(function(data){
		father = document.getElementById('list')
		var len = data["results"].length
		//console.log(data)

		if(data["next"] != null){
			for(var i=0;i < len;i++){
				var li = document.createElement("li")
				var a = document.createElement('a')
				li.className = 'element'
				//li.addEventListener('click',(e)=>{redirect("x",main_path)})
				a.innerHTML = data["results"][i]["name"]
				a.href = data["results"][i]["url"]
				li.appendChild(a)
				father.appendChild(li)
			}
			api_call(main_path,page+1)
		}
	}).fail(function(){
		console.log("Error")
	});
}

function getDataArray(main_path){
	var data_array = new Array()
	switch(main_path){
		case 'films':
			data_array = {}
			break
		case 'people':
			data_array = {}
			break
		case 'planets':
			data_array = {}
			break
		case 'species':
			data_array = {}
			break
		case 'starships':
			data_array = {}
			break
		case 'vehicles':
			data_array = {}
			break
	}
	return data_array
}
