function alterarCor(id, novacor){
    document.getElementById(id).style.background = (novacor)
    
}

function voltarCor(){
    document.getElementById('primeiralinha').style.background = ('white')
}

function segundaLinha(){
    document.getElementById('segundalinha').style.background = ('pink')
    
}

function voltarCorSegundaLinha(){
    document.getElementById('segundalinha').style.background = ('white')
    
}

function mostrarTime(id){
    alert(document.getElementById(id).innerHTML)
}