
var cnpj = document.getElementById("cnpj")
cnpj.addEventListener('keyup',maskCNPJ)
function maskCNPJ() {
    if(event.keyCode != 8){
        if(cnpj.value.length == 2){
            cnpj.value+= "."
    
        }else if(cnpj.value.length == 6){
            cnpj.value+= "."
    
        }else if(cnpj.value.length == 10){
            cnpj.value+= "/"
    
        }else if(cnpj.value.length == 15){
            cnpj.value+= "-"
            
        }
        
    }
}