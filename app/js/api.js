//Requisição inicial ajax
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

//Obtém os dados ajax e os adiciona ao DOM
function getData(main_path,data,page){
	var len = data["results"].length
	father = document.getElementById('list')
	switch(main_path){
		case 'films':
			for(var i=0;i < len;i++){
				var li = document.createElement("li")
				li.className = 'element waves-effect waves-yellow'
				let info = data["results"][i]
				li.addEventListener('click',(e)=>openPopUp(main_path,info))
				li.innerHTML = data["results"][i]["title"]
				father.appendChild(li)
			}
			break
		default:
			//Enquanto houver dados a serem
			if(data["next"] != null || data["previous"] != null){
				for(var i=0;i < len;i++){
					var li = document.createElement("li")		
					li.className = 'element waves-effect waves-yellow'
					let info = data["results"][i]
					li.addEventListener('click',()=>openPopUp(main_path,info))
					li.innerHTML = data["results"][i]["name"]
					father.appendChild(li)
				}
				//Se ainda existir dados a serem carregados
				//a função principal é chamada novamente recursivamente
				if(data["next"] != null){
					api_call(main_path,page+1)
				}
			}
			break
	}
}

//Obtém os dados ajax e abre um popup para mostrar
//uma listagem Master-Detail
//Aplica efeitos de embaçamento para dar foco à listagem
//Ao fechar o efeito é retirado
function openPopUp(main_path,data){
	let father = document.getElementById('popup')
	let data_list = document.getElementById('data')
	let masterlist = document.getElementById('masterlist')
	//Remove os dados atuais do popup se for clicado em outro
	//enquanto estiver aberto
	if(data_list.hasChildNodes()){
		delete_childs(data_list)
	}
	let html = loadContent(main_path,data)
	masterlist.style.zIndex = "-1"
	father.style.display = 'inline-block'
	document.getElementsByTagName('main')[0].style.filter = "blur(5px)"
	data_list.insertAdjacentHTML('beforeend',html)
	//Dá foco à listagem
	document.documentElement.scrollTop = 250;
}

function loadContent(main_path,data){
	let attribute = new Array();
	let info = new Array();

	//De acordo com o que for pedido é atribuido
	//um array para dar os dados equivalentes

	//A demora é devido os dados em json estarem espalhados
	//Necessitando obtê-los iterativamente em ajax
	switch(main_path){
		case 'people':
			attribute = ["Name","Image","Birth Year","Gender","Specie","Height","Mass","Hair Color","Skin Color","Eye Color","Films"]
			info = [data["name"],data["name"],data["birth_year"],getGender(data["gender"]), getGroupDataName('species',data),data["height"]+" cm",data["mass"]+" kg",data["hair_color"],data["skin_color"],data["eye_color"],getGroupDataName('films',data)]
			break
		case 'films':
			attribute = ["Title","Characters","Director","Release Date","Episode","Producer","Opening"]
			info = [data["title"],getGroupDataName('characters',data),data["director"],data["release_date"],data["episode_id"],data["producer"],formatOpeningText(data["opening_crawl"])]
			break
		case 'planets':
			attribute = ["Name","Population","Diameter","Climate","Terrain","Gravity","Orbital Period","Rotation Period","Surface Water","Residents"]
			info = [data["name"],data["population"],data["diameter"],data["climate"],data["terrain"],data["gravity"],data["orbital_period"],data["rotation_period"],data["surface_water"],getGroupDataName('planets',data)]
			break
		case 'species':
			attribute = ["Name","Language","Average Height","Average Lifespan","Classification","Designation","Skin Colors","Eye Colors","Hair Colors"]
			info = [data["name"],data["language"],data["average_height"],data["average_lifespan"],data["classification"],data["designation"],data["skin_colors"],data["eye_colors"],data["hair_colors"]]
			break
		case 'starships':
			attribute = ["Name","Image","Model","MGLT","Cargo Capacity","Consumables","Cost In Credits","Crew","Hyper Drive Rate","Length","Manufacturer","Max Atmosphering Speed","Starship Class","Passengers","Pilots","Films"]
			info = [data["name"],data["name"],data["model"],data["MGLT"],data["cargo_capacity"],data["consumables"],data["cost_in_credits"],data["crew"],data["hyperdrive_rating"],data["length"],data["manufacturer"],data["max_atmosphering_speed"],data["starship_class"],data["passengers"],getGroupDataName('people',data),getGroupDataName('films',data)]
			break
		case 'vehicles':
			attribute = ["Name","Image","Model","Cargo Capacity","Consumables","Cost In Credits","Crew","Length","Manufacturer","Max Atmosphering Speed","Vehicle Class","Passengers"]
			info = [data["name"],data["name"],data["model"],data["cargo_capacity"],data["consumables"],data["cost_in_credits"],data["crew"],data["length"],data["manufacturer"],data["max_atmosphering_speed"],data["vehicle_class"],data["passengers"]]
			break
	}
	let html="";
	html += "<table>"
	for(let i=0;i<info.length;i++){
		html += "<tr>"
		html += "<th>"+attribute[i]+"</th>"
		if(main_path == 'films' && attribute[i] == "Opening"){
			html += "<td id='sw_opening'>"+info[i]+"</td>"
		}else{
			if(attribute[i] == "Image" && (main_path == 'people' || main_path == 'starships' || main_path == 'vehicles')){
				html += "<td><img id='tag_image' src='/swapi/imgs/json_images/"+info[i]+".jpg'></td>"
			}else{
				html += "<td>"+info[i]+"</td>"
			}
		}
		html += "</tr>"
	}
	html += "</table>"
	return html
}

//Retorna os dados contidos em arrays que levam a outras páginas do json
function getGroupDataName(main_path,data){
	let group = ""
	let result = ""
	switch(main_path){
		case 'people':
			result = data["pilots"];
			break
		case 'films':
			result = data["films"]
			break
		case 'planets':
			result = data["residents"];
			break
		case 'characters':
			result = data["characters"]
			break
		case 'species':
			result = data["species"]
			break
	}
	for(let i in result){
		group += getDataName(main_path,result[i]) + "<br>"
	}
	if(group[group.length-1] == ' '){
		group = group.substr(0,group.length-1)
		group = group.substr(0,group.length-1)
	}
	return group
}

//Requisição ajax não-assincrona é necessária para dar um retorno dos dados
function getDataName(main_path,main_url){
	var result;
    $.ajax({
    	type: 'GET',
	    url:main_url,
	   	async:false,
	    success:function(data) {
	    	switch(main_path){
				case 'films':
					result = data["title"]
					break
				default:
					result = data["name"];
					break
	    	}
	    }
   	});
   	return result;
}