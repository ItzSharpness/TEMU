document.addEventListener("DOMContentLoaded", function () {
    let panier = [];
    let totalPrix = 0;
    let soldeEcus = 5000; // Valeur initiale du solde d'écus

    function mettreAJourPanier() {
        let listePanier = document.getElementById("contenu-panier");
        let totalElement = document.getElementById("total");
        listePanier.innerHTML = "";
        totalPrix = 0;

        // Regrouper les animaux identiques
        let produitsRegroupes = panier.reduce((acc, item) => {
            if (!acc[item.nom]) {
                acc[item.nom] = { ...item, quantite: 1 }; // Ajoute un champ quantite pour le produit
            } else {
                acc[item.nom].quantite += 1; // Si déjà présent, on incrémente la quantité
            }
            return acc;
        }, {});

        // Affichage des produits
        for (let item of Object.values(produitsRegroupes)) {
            let li = document.createElement("li");
            li.textContent = `${item.nom} - ${item.prix * item.quantite} 🪙 (x${item.quantite})`;
            listePanier.appendChild(li);
            totalPrix += item.prix * item.quantite;
        }

        totalElement.textContent = totalPrix + " 🪙"; // Mise à jour du total
    }

    // 🛒 Ajouter au panier
    document.querySelectorAll(".ajouter-panier").forEach(button => {
        button.addEventListener("click", function () {
            let nom = this.getAttribute("data-nom");
            let prix = parseInt(this.getAttribute("data-prix"));

            panier.push({ nom, prix });
            mettreAJourPanier(); // Mise à jour du panier
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
            window.open("https://www.youtube.com/watch?v=ksfPZ4XWzyk", "_blank");
            soldeEcus += 1000;
            if (ecusCompte) {
                ecusCompte.textContent = soldeEcus;
            }
        });
    }

    // 🎯 Payer
    document.getElementById("pay-btn").addEventListener("click", function () {
        if (totalPrix <= soldeEcus) {
            soldeEcus -= totalPrix;
            if (ecusCompte) {
                ecusCompte.textContent = soldeEcus;
            }

            panier = [];
            mettreAJourPanier();

            alert("Paiement effectué avec succès !");
        } else {
            alert("Vous n'avez pas assez d'écus pour effectuer cet achat.");
        }
        // Sélection des éléments HTML
const validerIdentifiantBtn = document.getElementById("valider-identifiant-btn");
const identifiantInput = document.getElementById("identifiant-input");
const compteEcus = document.getElementById("compte-ecus");

// Fonction pour valider l'identifiant
validerIdentifiantBtn.addEventListener("click", function() {
    const identifiant = identifiantInput.value; // Récupère l'identifiant entré

    if (identifiant === "TEMU007") {
        // Si l'identifiant est correct, on met le solde à infini
        compteEcus.textContent = "Infini 🪙";
        alert("Identifiant valide ! Votre solde est maintenant infini.");
    } else {
        // Si l'identifiant est incorrect
        alert("Identifiant incorrect.");
    }

    // Réinitialisation de l'input après la validation
    identifiantInput.value = "";
});
        
    });
});
