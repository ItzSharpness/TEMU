document.addEventListener("DOMContentLoaded", function () {
    let panier = [];
    let totalPrix = 0;
    let soldeEcus = 5000; // Valeur initiale du solde d'écus, tu peux ajuster à tes besoins

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

    // 🎯 Gestion du bouton "+" pour rediriger vers YouTube et ajouter des écus
    const incrementBtn = document.querySelector('.increment-btn');
    const ecusCompte = document.querySelector('.ecus-compte'); // L'élément qui affiche le solde des écus

    // Si le bouton existe
    if (incrementBtn) {
        incrementBtn.addEventListener('click', () => {
            // Ouvrir la vidéo YouTube dans un nouvel onglet
            window.open("https://www.youtube.com/watch?v=ksfPZ4XWzyk", "_blank");

            // Ajouter 1000 écus
            soldeEcus += 1000;

            // Mettre à jour l'affichage des écus
            if (ecusCompte) {
                ecusCompte.textContent = soldeEcus; // Mise à jour du solde affiché
            }
        });
    }

    // 🎯 Payer
    document.getElementById("pay-btn").addEventListener("click", function () {
        if (totalPrix <= soldeEcus) {
            // Si les écus sont suffisants, soustraire du solde
            soldeEcus -= totalPrix;

            // Mettre à jour le solde d'écus affiché
            if (ecusCompte) {
                ecusCompte.textContent = soldeEcus;
            }

            // Réinitialiser le panier après le paiement
            panier = [];
            mettreAJourPanier();

            // Afficher une alerte de confirmation
            alert("Paiement effectué avec succès !");
        } else {
            // Si les écus sont insuffisants, afficher un message d'erreur
            alert("Vous n'avez pas assez d'écus pour effectuer cet achat.");
        }
    });
});
