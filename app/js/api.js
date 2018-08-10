function api_call(){
	
	//const url_api = "https://gateway.marvel.com/v1/public/"+main_path

	$.ajax({
		type: 'GET',
		url: "https://swapi.co/api/planets/1/",
		dataType: 'json'
	}).done(function(data){
		father = document.getElementById('list')
		//var tam = data["data"]["results"].length
		console.log(data)
		/*for(var i=0;i<tam;i++){
			elem = document.createElement('li')
			img = document.createElement('img')
			img.src = data["data"]["results"][i]["thumbnail"].path+"."
					 +data["data"]["results"][i]["thumbnail"].extension
			elem.appendChild(img)
			father.appendChild(elem)
		}*/
	}).fail(function(){
		console.log("Error")
	});
}
function getTimestamp(){
	let date = new Date()
	let timestamp = date.getDate()
	return timestamp
}

function getPublicKey(){
	return "402d6a7cfb4795d0287880e47b42dbbb"
}

function getDataArray(main_path){
	var data_array = new Array()
	var public = getPublicKey()
	var timestamp = getTimestamp()
	var limit = 99
	var hash = hashmd5(timestamp,public)
	//console.log(hash)
	switch(main_path){
		case 'characters':
			data_array = {"limit":limit, "orderBy":"name", "ts":timestamp, "apikey":public, "hash":hash}
			break
		case 'comics':
			data_array = {"limit":limit, "format":"magazine", "orderBy":"title", "ts":timestamp, "apikey":public,"hash":hash}
			break
		case 'series':
			data_array = {"limit":limit, "orderBy":"title", "ts":timestamp, "apikey":public,"hash":hash}
			break
		case 'stories':
			data_array = {"limit":limit, "orderBy":"name", "ts":timestamp, "apikey":public,"hash":hash}
			break
	}
	return data_array
}