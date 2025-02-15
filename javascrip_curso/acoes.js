/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

var resp = window.document.getElementById('saida');

// Lembre-se que toda variável declarada aqui fora possui escopo global. Veja mais sobre escopo no seu material em PDF, na aula 07.

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'
    
    var a = prompt("Informe um número");
    if (a != "6") { 	
        resp.innerHTML += '<h1>Diferente de 6</h1>';
    } else {				
        resp.innerHTML += '<h1>Igual a 6</h1>';
    }
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>'
    
    switch(prompt("Como está o tempo? Use chuvoso, ensolarado ou nublado.")) {
        //switch("chuvoso") {	
            case "chuvoso":
                resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva!</h1>';    
                break;	
            case "ensolarado":		
                resp.innerHTML += '<h1>Vista roupas leves!</h1>';		                
                break;	
            case "nublado":		    
                resp.innerHTML += '<h1>Vá lá fora!!!</h1>';		
                break;	
            default:	            
                resp.innerHTML += '<h1>Tempo desconhecido</h1>';		
                break;
        }    
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'

    var numero = prompt("Informe um número");
    for (i = 0; i < numero; i++){
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>';
    }
}

function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'

    var var1  = prompt("Informe um número");
    while (var1 <= 10) {	
         resp.innerHTML += 'linha '+var1+'<br/>';
         var1++;
    }    
}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>'

    var var1 = prompt("Informe um número");
    do {	
        resp.innerHTML += 'linha '+var1+'<br/>';
        var1++;
   } while (var1 <= 10);  
}

function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botão</p>'

    var myArray = [1,2,3,4,5,6,7,8,9,10,11];

    myArray.forEach(function(value, key) {
        resp.innerHTML += 'Chave: '+key+' Valor: '+value+'<br/>';
        //document.write(value+' ', key+'<br/>'); 
    }); 
}

function acao7() {
    
    var entrada = "Bem vindo Denisson" //+ prompt("Informe seu Nome: ");
    var saldacao = document.getElementById('titulo');
    saldacao.textContent = entrada;    

    const collection = document.getElementsByName("animal");
        for (let i = 0; i < collection.length; i++) {
        if (collection[i].type == "checkbox") {
            collection[i].checked = true;
        }
    }

    resp.innerHTML += 'Clicou no setimo botão'

    document.getElementsByTagName("p")[1].innerHTML = "Texto do paragrafo 2 substituido com sucesso!";

    var teste = document.getElementsByName("paragrafo");
    teste[1].textContent = 'Texto do paragrafo identificado por "paragrafo" na posição 1, substituido com sucesso!';
}


function acao8() {
    resp.innerHTML += '<p>Clicou no oitavo botão</p>'

    function calcularArea() {
        var area = 3*5;
        resp.innerHTML +=  '<h1>Área total: '+ area +'</h1>';
    }
    calcularArea();
         
}


function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>'

    var largura = prompt("Informe largura");
    var altura = prompt("Informe altura");

    function getArea(width, height) {
        var calculateArea = width * height;
        return calculateArea;
    }

    var area = getArea(largura, altura);
    resp.innerHTML +=  '<h1>Área total: '+ area +'</h1>';	
}


function acao10() {
    resp.innerHTML += '<p>Clicou no decimo botão</p>'

    // Set Item
    var login = ['user', '********'];
    sessionStorage.setItem("acessoOn", login);
    // Retrieve
    document.getElementById("session").innerHTML = sessionStorage.getItem("acessoOn");
         
}

function acao11() {
    resp.innerHTML += '<p>Clicou no decimo primeiro botão</p>'
    //Criando um objeto notação literal.
    var hotel = { //O objeto é declarado como uma variavel.
         nome: prompt('Informe o nome do hotel') , //as chaves são separadas do seu valor por dois pontos. Igual ao CSS.
        quartos: prompt('Informe a quantidades de quartos'),
        reservados: prompt('Informe '),
        reserva_cancelada: 0,
        piscina: true,
        tipoQuarto: ['simples', 'duplo', 'suite'],
        

        checkAvailability: function () {
            return this.quartos - this.reservados;
        },

        cancelados: function() {
            return this.checkAvailability() + this.reserva_cancelada;
        }


    };

    var atrNome = document.getElementById('nome');
    atrNome.textContent = hotel.nome; //Acessando um objeto com a notação de ponto.

    var atrQuartos = document.getElementById('quartos');
    atrQuartos.textContent = hotel.checkAvailability();  

    var quartosCancelados = document.getElementById('cancelados')
    quartosCancelados.textContent = hotel.cancelados();
}


function acao12() {
    resp.innerHTML += '<p>Clicou no decimo segundo botão</p>'

        //Criando objeto notação de construtor.
        var carro = new Object(); //Função do construtor object(). 

            carro.modelo= 'tracker', //
            carro.ano= 2025,
            carro.fabricante= 'Chevrolet',
            carro.kmAtual= 123680,
            carro.proxTrocaOleo= 131680,
    
            carro.checkStatus= function () {
                return this.proxTrocaOleo - this.kmAtual;
            }
        
    
        var atrModelo = document.getElementById('modelo');
        atrModelo.textContent = carro.modelo; //Acessando um objeto com a notação de ponto.
    
        var atrProxTrocaOleo = document.getElementById('oleoMotor');
        atrProxTrocaOleo.textContent = carro.checkStatus() + ' Km/h';  

        var atrKmAtual = document.getElementById('kmAtual');
        atrKmAtual.textContent = carro.kmAtual + ' Km/h';
         
}





function acao13() {
    resp.innerHTML += '<p>Clicou no decimo terceiro botão</p>'
    
    //Notação objeto construtor.
    function Mobilia(nome, largura, altura, peso) { //Construção do template. Nome começa com letra maiúscula Informe as propriedades do objeto.

        this.nome = nome; //Usamos o this para indicar a propriedade ou metodo que a função criou.
        this.largura = largura;
        this.altura = altura;
        this.peso = peso;

        this.checkAreaOcupada= function () {
            return this.largura * this.altura;
        }
    }

    //Criando objetos do tipo Mobilia.
    var listaObj = [
        cadeira = new Mobilia('Cadeira', 2, 1.5, 0.5),
        mesa = new Mobilia('Mesa', 3, 2, 1),
        cama = new Mobilia('Cama', 3, 4, 2)
    ];

    for (var i = 0; i < listaObj.length; i++) {
        document.getElementById('item').innerHTML += 'Item: <b>' + listaObj[i].nome + ' </b>' + 'Área Ocupada: <b>' + listaObj[i].checkAreaOcupada() + ' </b>' +'Peso: <b>' + listaObj[i].peso + ' </b> <br/>'; 
    }
}

function acao14() {
    resp.innerHTML += '<p>Clicou no decimo quarto botão</p>'

    var bd = 'Para conectar ao Banco de dados aprenda Node JS primeiro'


    document.getElementById('saida').innerHTML = '<h1>'+ bd +'</h1>';
         
}

