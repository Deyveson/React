var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]
//interando nos campos da Index.html

console.log(campos);

var tbody = document.querySelector('table tbody');
// pegando o elemento do tbody no 'DOM'

document.querySelector('.form').addEventListener('submit', function(event){
// peço para selecionar '.form' que esta no HTML, para esse elemento quero adcionar um evento 'addEventListener'
// passo o tipo de evento 'submit', quando o evento for desparado vou executa uma função de callback

    event.preventDefault();
    //pedindo pro event nao submeter o formulario 

    var tr = document.createElement('tr');
    // criando uma tr dinamicamente, que nao faz parte do 'DOM' 

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        // criando uma td dinamicamente 

        td.textContent = campo.value;
        //o conteudo dela ou seja o que vem entre a tag TD, vai ser o conteudo da lista 'campo'

        tr.appendChild(td);
        //adicionando um filho nela

    });

    var tdVolume = document.createElement('td');
    // criando uma td dinamicamente 

    tdVolume.textContent = campos[1].value * campos[2].value;
    // pega o campos na posição 2 e posição 3 e multiplica, para obter o valor total (quantidade*valor) 

    tr.appendChild(tdVolume);
    //adicionando um filho nela

    tbody.appendChild(tr);
    //adcionando tr ao tbody

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;
    //limpando os campos

    campos[0].focus();
    // dando foco no campo data

});