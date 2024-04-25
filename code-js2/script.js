// Capturando os elementos HTML
let titulo = document.getElementById('titulo');
let listaNaoOrdenada = document.querySelector('ul');
let link = document.getElementById('link');
let listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual aos elementos
titulo.innerText = "Título da Página";
link.innerText = "Link para Proz Educação";

// Adicionando itens na lista não ordenada
listaNaoOrdenada.innerHTML += "<li>Item 1</li>";
listaNaoOrdenada.innerHTML += "<li>Item 2</li>";
listaNaoOrdenada.innerHTML += "<li>Item 3</li>";

// Adicionando itens na lista ordenada com links
listaOrdenada.innerHTML += "<li><a href='https://exemplo.com'>Link 1</a></li>";
listaOrdenada.innerHTML += "<li><a href='https://exemplo.com'>Link 2</a></li>";
listaOrdenada.innerHTML += "<li><a href='https://exemplo.com'>Link 3</a></li>";
