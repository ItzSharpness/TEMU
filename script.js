// Variables
let compteEcusu = 100; // Solde initial d'écus
let panier = []; // Tableau pour les articles ajoutés
const compteEcusuElem = document.getElementById('compte-ecus');
const panierElem = document.getElementById('contenu-panier');
const totalElem = document.getElementById('total');
const payBtn = document.getElementById('pay-btn');

// Mise à jour du solde des écus
function updateSolde() {
    compteEcusuElem.textContent = compteEcusu;
}

// Ajouter au panier
const ajouterBtns = document.querySelectorAll('.ajouter-panier');
ajouterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const produit = btn.parentElement;
        const prix = parseInt(produit.getAttribute('data-prix'));
        const animal = produit.getAttribute('data-animal');
        
        panier.push({ prix, animal });
        updatePanier();
    });
});

// Mise à jour du panier
function updatePanier() {
    panierElem.innerHTML = ''; // Réinitialiser le panier
    let totalPanier = 0;
    panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.animal} - ${item.prix} écus`;
        panierElem.appendChild(li);
        totalPanier += item.prix;
    });
    totalElem.textContent = `Total : ${totalPanier} écus`;
}

// Paiement
if (payBtn) {
    payBtn.addEventListener('click', function() {
        const totalPanier = panier.reduce((acc, item) => acc + item.prix, 0);

        // Page d'achat (achat.html)
        const messageElem = document.getElementById('message-paiement');
        
        if (totalPanier > compteEcusu) {
            messageElem.innerHTML = `
                <p>Vous n'avez pas les moyens de payer ceci.</p>
                <a href="index.html" class="retour">Retour à la boutique</a>
            `;
        } else {
            compteEcusu -= totalPanier;
            panier = []; // Vider le panier
            updateSolde();

            let articlesCommandes = panier.map(item => item.animal).join(', ');

            messageElem.innerHTML = `
                <p>Votre achat de ${totalPanier} écus a été effectué. Il vous reste ${compteEcusu} écus.</p>
                <p>Vous avez commandé : ${articlesCommandes}</p>
                <a href="index.html" class="retour">Retour à la boutique</a>
            `;
        }
    });
}
