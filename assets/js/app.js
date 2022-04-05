//import {Produit} from "./classes/Produit.js";

class Produit{
    //constructor est la methode permettant de créer une nouvelle instance de la classe
    constructor(nom,prix,img){
        //Les propriétés de l'objet
        this.img = img;
        this.nom = nom;
        this.prix = prix;
    }
}

let listeProduits = [];
listeProduits.push( new Produit('Chemise', 29, 'img/chemise.jpg'));
listeProduits.push( new Produit('Sneaker', 29, 'img/sneaker.jpg'));
listeProduits.push( new Produit('Sac', 29, 'img/sac.jpg'));
listeProduits.push( new Produit('Jean', 29, 'img/jean.jpg'));

let quteProduit1 = 0,
    quteProduit2 = 0,
    quteProduit3 = 0,
    quteProduit4 = 0,
    qutePanier = 0,
    totalPanier = 0,
    blocHTML = "";

const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const icone = document.getElementById('icPanier');

btn3.addEventListener('click', function(e){
    e.preventDefault();
    quteProduit1++;
    qutePanier++;
    totalPanier += listeProduits[0].prix;
    return console.log(`qté: ${quteProduit1}  ${qutePanier} ${totalPanier}`);
});

btn4.addEventListener('click', function(e){
    e.preventDefault();
    quteProduit2++;
    qutePanier++;
    totalPanier += listeProduits[1].prix;
});

btn5.addEventListener('click', function(e){
    e.preventDefault();
    quteProduit3++;
    qutePanier++;
    totalPanier += listeProduits[2].prix;
});

btn6.addEventListener('click', function(e){
    e.preventDefault();
    quteProduit4++;
    qutePanier++;
    totalPanier += listeProduits[3].prix;
});

icone.addEventListener('mouseover', function(e){
    e.preventDefault();
    affichagePanier();
    return document.getElementById('affichagePanier').innerHTML = blocHTML;
    
});

function affichagePanier(){
    blocHTML = " ";
    if(qutePanier !=0 ) {
        blocHTML = '<div class="blocPanier">';
        blocHTML += `<h3>${qutePanier} ITEMS</h3>`;
        if(quteProduit1 != 0){
            blocHTML += '<div class="blocPdt">';
            blocHTML += '<div>';
            blocHTML += `<h3>${listeProduits[0].nom}</h3>`;
            blocHTML += `<h3>${quteProduit1} - $ ${listeProduits[0].prix}</h3>`;
            blocHTML += '</div>';
            blocHTML += '<div>';
            blocHTML += `<img src=${listeProduits[0].image}>`;
            blocHTML += '</div>';
            blocHTML += '</div>';
        }
        if(quteProduit2 != 0){
            blocHTML += '<div class="blocPdt">';
            blocHTML += '<div>';
            blocHTML += `<h3>${listeProduits[1].nom}</h3>`;
            blocHTML += `<h3>${quteProduit2} - $ ${listeProduits[1].prix}</h3>`;
            blocHTML += '</div>';
            blocHTML += '<div>';
            blocHTML += `<img src=${listeProduits[1].image}>`;
            blocHTML += '</div>';
            blocHTML += '</div>';
        }
        if(quteProduit3 != 0){
            blocHTML += '<div class="blocPdt">';
            blocHTML += '<div>';
            blocHTML += `<h3>${listeProduits[2].nom}</h3>`;
            blocHTML += `<h3>${quteProduit3} - $ ${listeProduits[2].prix}</h3>`;
            blocHTML += '</div>';
            blocHTML += '<div>';
            blocHTML += `<img src=${listeProduits[2].image}>`;
            blocHTML += '</div>';
            blocHTML += '</div>';
        }
        if(quteProduit4 != 0){
            blocHTML += '<div class="blocPdt">';
            blocHTML += '<div>';
            blocHTML += `<h3>${listeProduits[3].nom}</h3>`;
            blocHTML += `<h3>${quteProduit4} - $ ${listeProduits[3].prix}</h3>`;
            blocHTML += '</div>';
            blocHTML += '<div>';
            blocHTML += `<img src=${listeProduits[3].image}>`;
            blocHTML += '</div>';
            blocHTML += '</div>';
        }
        blocHTML += `<h3>TOTAL ${totalPanier} $</h3>`;
        blocHTML += '</div>';
    }
    return blocHTML;
}