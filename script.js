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

        totalElement.textContent = totalPrix + " 🪙"; // ✅ Correction de l'affichage
    }

    // 🛒 Ajouter au panier
    document.querySelectorAll(".ajouter-panier").forEach(button => {
        button.addEventListener("click", function () {
            let nom = this.getAttribute("data-nom");
            let prix = parseInt(this.getAttribute("data-prix"));

            panier.push({ nom, prix });
            mettreAJourPanier(); // ✅ Ajout de l'appel correct
        });
    });

    // 🔄 Reset du panier
    document.getElementById("reset-panier").addEventListener("click", function () {
        panier = [];
        mettreAJourPanier();
    });
});
// Sélectionner le bouton "+" et l'élément qui affiche les écus
const incrementBtn = document.querySelector('.increment-btn');
let soldeEcus = 0; // Valeur initiale du solde d'écus (peut être récupérée si elle est déjà présente dans ton code)

const ecusCompte = document.querySelector('.ecus-compte'); // L'élément qui affiche le solde des écus

// Fonction pour gérer le clic
incrementBtn.addEventListener('click', () => {
    // Ouvrir la vidéo YouTube dans un nouvel onglet
    window.open("https://www.youtube.com/watch?v=ksfPZ4XWzyk", "_blank");

    // Ajouter 1000 écus
    soldeEcus += 1000;

    // Mettre à jour l'affichage des écus
    ecusCompte.textContent = soldeEcus; // Mise à jour du solde affiché dans l'élément .ecus-compte
});
