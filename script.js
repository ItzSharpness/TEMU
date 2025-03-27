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
    
    contenuPanier.innerHTML = ""; // On vide l'ancien contenu
    panier.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nom} - ${item.prix} 🪙`;
        contenuPanier.appendChild(li);
    });

    totalElement.textContent = total + " 🪙"; // On met à jour le total
}

document.addEventListener("DOMContentLoaded", function () {
    let panier = [];
    let totalPrix = 0;

    function mettreAJourPanier() {
        let listePanier = document.getElementById("contenu-panier");
        let totalElement = document.getElementById("total");
        listePanier.innerHTML = "";
        totalPrix = 0;

        panier.forEach(item => {
            let li = document.createElement("li");
            li.textContent = `${item.nom} - ${item.prix} 🪙`;
            listePanier.appendChild(li);
            totalPrix += item.prix;
        });

        totalElement.textContent = totalPrix; // ✅ Correction du total
    }

    // 🛒 Ajouter au panier
    document.querySelectorAll(".ajouter-panier").forEach(button => {
        button.addEventListener("click", function () {
            let nom = this.getAttribute("data-nom");
            let prix = parseInt(this.getAttribute("data-prix"));

            panier.push({ nom, prix });
            mettreAJourPanier();
        });
    });

    // 🔄 Reset du panier
    document.getElementById("reset-panier").addEventListener("click", function () {
        panier = [];
        mettreAJourPanier();
    });
});
