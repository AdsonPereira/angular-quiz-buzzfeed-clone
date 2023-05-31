
function adicionar(){
    var nomeItem = document.getElementById("texto");
    var texto = nomeItem.value;
    
    let listadeItens = document.getElementById("listadetasks");
    listadeItens.innerHTML+='<input type="checkbox" id="checkbox">'+texto+'</br>';
}




   /* var nomeItem = document.querySelector('input[type=text]');

    let listadeItens = document.getElementById("item1");
    listadeItens.innerHTML+=`
    <input type="checkbox" id="checkbox">`
    +itemIndividual+' '; */
