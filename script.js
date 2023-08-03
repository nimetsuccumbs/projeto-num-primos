function total(){
    var livro1 = document.getElementById("livro1").value
    var livro2 = document.getElementById("livro2").value
    var livro3 = document.getElementById("livro3").value
    
    var soma = Number(livro1)+Number(livro2)+Number(livro3)
    
    document.getElementById("resultado").innerHTML = "R$ "+soma
    }
    
    function desconto(){
    var livro1 = document.getElementById("livro1").value
    var livro2 = document.getElementById("livro2").value
    var livro3 = document.getElementById("livro3").value
    
    var soma = Number(livro1)+Number(livro2)+Number(livro3)
    var desconto = soma*0.15
    var totaldesconto = soma-desconto
    
    document.getElementById("resultado").innerHTML = "R$ "+totaldesconto
    }
    