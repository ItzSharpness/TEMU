document.addEventListener("DOMContentLoaded", function () {
    let panier = [];
    let totalPrix = 0;
    let soldeEcus = 0;

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

        totalElement.textContent = totalPrix + " 🪙";
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

    // 🎯 Gestion du bouton "+" pour rediriger vers YouTube et ajouter des écus
    const incrementBtn = document.querySelector('.increment-btn');
    const ecusCompte = document.querySelector('.ecus-compte');

    if (incrementBtn) {
        incrementBtn.addEventListener('click', () => {
            // Ouvrir la vidéo YouTube dans un nouvel onglet
            window.open("https://www.youtube.com/watch?v=ksfPZ4XWzyk", "_blank");

            // Ajouter 1000 écus
            soldeEcus += 1000;

            // Mettre à jour l'affichage des écus
            if (ecusCompte) {
                ecusCompte.textContent = soldeEcus + " 🪙"; // Mise à jour du solde
            }
        });
    }

    // 🪙 Affichage des écus et de l'addition des créatures
    function afficherSoldeEcus() {
        const ecusCompte = document.querySelector('.ecus-compte');
        if (ecusCompte) {
            ecusCompte.textContent = soldeEcus + " 🪙";
        }
    }

    // 🛒 Ajouter des créatures au panier (détails supplémentaires)
    document.querySelectorAll(".ajouter-panier").forEach(button => {
        button.addEventListener("click", function () {
            let nom = this.getAttribute("data-nom");
            let prix = parseInt(this.getAttribute("data-prix"));

            if (soldeEcus >= prix) {
                soldeEcus -= prix; // Déduire le prix de la créature du solde
                panier.push({ nom, prix });
                mettreAJourPanier();
                afficherSoldeEcus(); // Mise à jour du solde des écus
            } else {
                alert("Vous n'avez pas assez d'écus pour cet achat !");
            }
        });
    });

    // 🪙 Fonction pour ajuster les écus via le bouton "+"
    document.querySelector('.increment-btn').addEventListener('click', () => {
        soldeEcus += 1000; // Ajoute 1000 écus
        afficherSoldeEcus(); // Met à jour l'affichage des écus
    });

});

