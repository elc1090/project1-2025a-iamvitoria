document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".hamburger-button");
    const menu = document.createElement("div");
    menu.classList.add("hamburger-menu-list");
    
    menu.innerHTML = `
        <ul>
            <li><a href="C:/Users/vitor/OneDrive/Documents/GitHub/project1-2025a-iamvitoria/index.html">Home</a></li>
            <li><a href="C:/Users/vitor/OneDrive/Documents/GitHub/project1-2025a-iamvitoria/pages/products.html">Produtos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Entrar</a></li>
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

});