function search_buttons(main_path){
	var letters = "abcdefghijklmnopqrstuvwxyz"
	father = document.getElementById('letters')
	for(var i in letters){
		let elem = document.createElement('button')
		elem.innerHTML = letters[i].toUpperCase()
		elem.className = "bt"
		elem.addEventListener ('click',(e)=>{searchByLetter(e.target.innerHTML,main_path)})
		father.appendChild(elem)
	}
}

function searchByLetter(letter,main_path){
	const url_api = "https://gateway.marvel.com/v1/public/"+main_path
	var dataArray = getDataArray_Search(letter,main_path)
	//{"limit":100, "orderBy":"name", "nameStartsWith":letter, "ts":getTimestamp(),"apikey":getPublicKey(), "hash":hashmd5(getTimestamp(),getPublicKey()) }
	$.ajax({
		type: 'GET',
		url: url_api,
		dataType: 'json',
		data: dataArray
	}).done(function(data){
		let father = document.getElementById("list")
		delete_childs(father)
		add_childs(data,father,data["data"]["results"].length)
	}).fail(function(){
		console.log("erro")
	});
}

function delete_childs(father){
	while(father.hasChildNodes()){
   		father.removeChild(father.firstChild)
	}
}

function add_childs(data,father,len){
	for(let i=0;i<len;i++){
		elem = document.createElement('li')
		img = document.createElement('img')
		img.src = data["data"]["results"][i]["thumbnail"].path+"."
				 +data["data"]["results"][i]["thumbnail"].extension
		elem.appendChild(img)
		father.appendChild(elem)
	}
}

function close_popup(){
	var father = document.getElementById('data')
	delete_childs(father)
	document.getElementById('popup').style.display = 'none'
	document.getElementsByTagName('main')[0].style.filter = 'none'
	let masterlist = document.getElementById('masterlist')
	masterlist.style.zIndex = "1"
}

function formatOpeningText(text){
	text = text.replace(/(?:\r\n|\r|\n)/g, '<br>')
	return text
}