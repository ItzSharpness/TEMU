let panier = [];
let total = 0;

function ajouterAuPanier(nom, prix) {
    panier.push({ nom, prix });
    total += prix;
    afficherPanier();
}

function afficherPanier() {
    let contenuPanier = document.getElementById("contenu-panier");
    let totalElement = document.getElementById("total");
    
    contenuPanier.innerHTML = "";
    panier.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nom} - ${item.prix} 🪙`;
        contenuPanier.appendChild(li);
    });

    totalElement.textContent = total;
}
