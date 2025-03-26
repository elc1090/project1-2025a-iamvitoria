document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".hamburger-button");
    const menu = document.createElement("div");
    menu.classList.add("hamburger-menu-list");

    menu.innerHTML = `
        <ul>
            <li><a href="C:/Users/vitor/OneDrive/Documents/GitHub/project1-2025a-iamvitoria/index.html">Home</a></li>
            <li><a href="C:/Users/vitor/OneDrive/Documents/GitHub/project1-2025a-iamvitoria/pages/products.html">Produtos</a></li>
        </ul>
    `;
    
    document.body.appendChild(menu);

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("show");
        }
    });

    // Dados dos produtos
    const produtos = [
        {
            nome: "iPad",
            descricao: "iPad Air 2020",
            preco: "R$ 4.359,99",
            imagem: "../img/tablet.png"
        },
        {
            nome: "Televisão",
            descricao: "Televisão Samsung 32 polegadas",
            preco: "R$ 2.599,99",
            imagem: "../img/televisao.png"
        },
        {
            nome: "iPhone",
            descricao: "iPhone X",
            preco: "R$ 4.099,99",
            imagem: "../img/celular.png"
        }
    ];

    // Capturar clique no botão "Detalhes" e redirecionar para a página de detalhes
    document.querySelectorAll(".product-card button").forEach((button, index) => {
        button.addEventListener("click", function() {
            const produto = produtos[index]; // Obtém o produto baseado na posição

            // Armazenar os detalhes do produto no localStorage
            localStorage.setItem("produtoSelecionado", JSON.stringify(produto));

            // Redirecionar para a página de detalhes
            window.location.href = "details.html";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    console.log(produtoSelecionado); // Verifique se o produto está sendo recuperado corretamente

    if (produtoSelecionado) {
        // Preencher a imagem
        document.querySelector(".product-image img").src = produtoSelecionado.imagem;

        // Preencher o nome, descrição e preço
        document.querySelector(".product-info h2").textContent = produtoSelecionado.nome;
        document.querySelector(".product-info p").textContent = produtoSelecionado.descricao;
        document.querySelector(".product-info span").textContent = produtoSelecionado.preco;
    } else {
        console.log("Nenhum produto encontrado no localStorage.");
    }
});
