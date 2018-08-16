function delete_childs(father){
	while(father.hasChildNodes()){
   		father.removeChild(father.firstChild)
	}
}

//Retorna aos estilos anteriores do DOM
function close_popup(){
	var father = document.getElementById('data')
	delete_childs(father)
	document.getElementById('popup').style.display = 'none'
	document.getElementsByTagName('main')[0].style.filter = 'none'
	let masterlist = document.getElementById('masterlist')
	masterlist.style.zIndex = "1"
}

//Função específica para trocar o \n por <br> dos dados de filmes
function formatOpeningText(text){
	text = text.replace(/(?:\r\n|\r|\n)/g, '<br>')
	return text
}

function getGender(data){
	switch(data){
		case 'male':
			return "<img id='icon' src='/swapi/imgs/male.png'>"
			break
		case 'female':
			return "<img id='icon' src='/swapi/imgs/female.png'>"
			break
		default:
			return data
			break
	}
}

function search(){
	var path = document.getElementById('select_value').value
	var text = document.getElementById('text').value

	window.location = "http://localhost/swapi/app/views/search.php?path="+path+"&text="+text
}