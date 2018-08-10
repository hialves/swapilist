function api_call(main_path,page){
	
	const url_api = "https://swapi.co/api/"+main_path

	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
		data: {"page":page}
	}).done(function(data){
		console.log(data)
		getData(main_path,data,page)
	}).fail(function(){
		console.log("Error")
	});
}

function getId(main_path,data,position){
	var str = data["results"][position]["url"]
	var id = str.split("/")
	for(let i=0;i<id.length;i++){
		if(id[i] == main_path){
			return id[i+1]
		}
	}
}

function getData(main_path,data,page){
	var len = data["results"].length
	father = document.getElementById('list')
	switch(main_path){
		case 'films':
			for(var i=0;i < len;i++){
				var li = document.createElement("li")
				var a = document.createElement('a')
				li.className = 'element'
				//li.addEventListener('click',(e)=>{redirect(getId(main_path,data,i),main_path)})
				a.innerHTML = data["results"][i]["title"]
				//a.href = data["results"][i]["url"]
				a.href="#"
				li.appendChild(a)
				father.appendChild(li)
			}
			break
		default:
			if(data["next"] != null){
				for(var i=0;i < len;i++){
					var li = document.createElement("li")
					var a = document.createElement('a')
					li.className = 'element'
					li.addEventListener('click',(e)=>{openPopUp(main_path,getId(main_path,data,i))})
					a.innerHTML = data["results"][i]["name"]
					a.href = data["results"][i]["url"]
					li.appendChild(a)
					father.appendChild(li)
				}
				api_call(main_path,page+1)
			}
			break
	}
}

function loadPopUp(main_path,id){
	const url_api = "https://swapi.co/api/"+main_path+"/"+id

	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
	}).done(function(data){
		console.log(data)
		openPopUp(main_path,data)
	}).fail(function(){
		console.log("Error")
	});
}

function openPopUp(main_path,data){
	
}