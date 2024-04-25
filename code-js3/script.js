// Método simples para adicionar um título ao site
document.getElementById('titulo').innerText = "Loja Online";

// Método complexo para adicionar um produto à venda
let produtoContainer = document.createElement('div');
produtoContainer.classList.add('produto');

let nomeProduto = document.createElement('h2');
nomeProduto.innerText = "Smartphone XYZ";

let descricaoProduto = document.createElement('p');
descricaoProduto.innerText = "Um smartphone incrível com uma câmera de alta resolução e uma tela vibrante.";

let precoProduto = document.createElement('p');
precoProduto.innerText = "Preço: R$ 999,00";

// Adicionando elementos filhos ao contêiner do produto
produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);

// Adicionando o contêiner do produto ao corpo do documento
document.body.appendChild(produtoContainer);
