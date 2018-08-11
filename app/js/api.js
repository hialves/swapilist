function api_call(main_path,page){
	const url_api = "https://swapi.co/api/"+main_path

	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
		data: {"page":page}
	}).done(function(data){
		getData(main_path,data,page)
	}).fail(function(){
		console.log("Error")
	});
}

/*function getId(main_path,data,position){
	var str = data["results"][position]["url"]
	var id = str.split("/")
	for(let i=0;i<id.length;i++){
		if(id[i] == main_path){
			return id[i+1]
		}
	}
}*/

function getData(main_path,data,page){
	var len = data["results"].length
	father = document.getElementById('list')
	switch(main_path){
		case 'films':
			for(var i=0;i < len;i++){
				var li = document.createElement("li")
				li.className = 'element'
				let info = data["results"][i]
				li.addEventListener('click',(e)=>openPopUp(main_path,info))
				li.innerHTML = data["results"][i]["title"]
				father.appendChild(li)
			}
			break
		default:
			if(data["next"] != null || data["previous"] != null){
				for(var i=0;i < len;i++){
					var li = document.createElement("li")
					li.className = 'element'
					//let id = getId(main_path,data,i)
					let info = data["results"][i]
					li.addEventListener('click',()=>openPopUp(main_path,info))
					li.innerHTML = data["results"][i]["name"]
					father.appendChild(li)
				}
				if(data["next"] != null){
					api_call(main_path,page+1)
				}
			}
			break
	}
}

/*function loadPopUp(main_path,id){
	const url_api = "https://swapi.co/api/"+main_path+"/"+id
	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
	}).done(function(data){
		openPopUp(main_path,data)
	}).fail(function(){
		console.log("Error")
	});
}*/

function openPopUp(main_path,data){
	let father = document.getElementById('popup')
	let data_list = document.getElementById('data')
	let popup = document.getElementById('popup')
	father.style.display = 'inline-block'
	document.getElementsByTagName('main')[0].style.filter = "blur(5px)"
	var html = loadContent(main_path,data)
	data_list.insertAdjacentHTML('beforeend',html)
}

function loadContent(main_path,data){
	console.log(data)
	let attribute = new Array();
	let info = new Array();
	switch(main_path){
		case 'people':
			attribute = ["Name","Birth Year","Gender","Height","Mass","Hair Color","Skin Color","Eye Color"]
			info = [data["name"],data["birth_year"],data["gender"],data["height"],data["mass"],data["hair_color"],data["skin_color"],data["eye_color"]]
			break
		case 'films':
			attribute = ["Title","Director","Release Date","Episode","Producer","Opening"]
			info = [data["title"],data["director"],data["release_date"],data["episode_id"],data["producer"],formatOpeningText(data["opening_crawl"])]
			break
		case 'planets':
			attribute = ["Name","Population","Diameter","Climate","Terrain","Gravity","Orbital Period","Rotation Period","Surface Water"]
			info = [data["name"],data["population"],data["diameter"],data["climate"],data["terrain"],data["gravity"],data["orbital_period"],data["rotation_period"],data["surface_water"]]
			break
		case 'species':
			attribute = ["Name","Language","Average Height","Average Lifespan","Classification","Designation","Skin Colors","Eye Colors","Hair Colors"]
			info = [data["name"],data["language"],data["average_height"],data["average_lifespan"],data["classification"],data["designation"],data["skin_colors"],data["eye_colors"],data["hair_colors"]]
			break
		case 'starships':
			attribute = ["Name","Model","MGLT","Cargo Capacity","Consumables","Cost In Credits","Crew","Hyper Drive Rate","Length","Manufacturer","Max Atmosphering Speed","Starship Class","Passengers"]
			info = [data["name"],data["model"],data["MGLT"],data["cargo_capacity"],data["consumables"],data["cost_in_credits"],data["crew"],data["hyperdrive_rating"],data["length"],data["manufacturer"],data["max_atmosphering_speed"],data["starship_class"],data["passengers"]]
			break
		case 'vehicles':
			attribute = ["Name","Model","Cargo Capacity","Consumables","Cost In Credits","Crew","Length","Manufacturer","Max Atmosphering Speed","Vehicle Class","Passengers"]
			info = [data["name"],data["model"],data["cargo_capacity"],data["consumables"],data["cost_in_credits"],data["crew"],data["length"],data["manufacturer"],data["max_atmosphering_speed"],data["vehicle_class"],data["passengers"]]
			break
	}
	let html="";
	html += "<table>"
	for(let i=0;i<info.length;i++){
		html += "<tr>"
		html += "<th>"+attribute[i]+"</th>"
		html += "<td>"+info[i]+"</td>"
		html += "</tr>"
	}
	html += "</table>"
	return html
}