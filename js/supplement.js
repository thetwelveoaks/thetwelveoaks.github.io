function change_label(e) {
	var btn = document.getElementById(e.target.id);
	if(btn.innerHTML == "Show me more \xBB"){
		btn.innerHTML = "Show me less \xAB";
	}else{
		btn.innerHTML = "Show me more \xBB";
	}
}