function habilitarDesabilitar(){
	const local = document.getElementsByClassName('alternativas')
	if (document.getElementById('dissertativa').checked){
		for(i = 0;i <= local.length - 1; i++){
			local[i].setAttribute("disabled","disabled")		
		}	
		document.getElementById('enunciado').removeAttribute("disabled")
    }else if(document.getElementById('objetiva').checked){
		for(i = 0;i <= local.length - 1;i++){
			local[i].removeAttribute("disabled")
		}
		document.getElementById('enunciado').setAttribute("disabled","disabled")	        
    }
}