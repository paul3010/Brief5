function Pizza() {

    //*********calcul pizza************************* */
    let affichepizza = document.getElementById("affichepizza");
    let choixPizza = ""
    let a = 0;
    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].selected == false)
            affichepizza.innerHTML = `pas de pizza selectionné`;
    }
    for (let i = 0; i < pizza.length; i++) {
        if (pizza[i].selected)

            a = a + parseInt(pizza[i].value);
        choixPizza = a;
    }
    let compteurPizza = document.getElementById("compteur_pizza").value;
    let facturepizza = compteurPizza * choixPizza;

    if (facturepizza > 0) {
        affichepizza.innerHTML = `choix pizza : ${facturepizza}euros`;
    }

    //*********calcul burger************************* */
    let afficheburger = document.getElementById("afficheburger");
    let choixBurger = "";
    let b = 0;
    for (let i = 0; i < burger.length; i++) {
        if (burger[i].selected == false)
            afficheburger.innerHTML = `Pas de burger selectionné`;
    }
    for (let i = 0; i < burger.length; i++) {
        if (burger[i].selected == true)
            b = b + parseInt(burger[i].value);
        choixBurger = b;
    }

    let compteurBurger = document.getElementById("compteur_burger").value;
    let factureburger = compteurBurger * choixBurger;
    if (factureburger > 0) {
        afficheburger.innerHTML = `choix boisson : ${factureburger}euros`;
    }
    //*********calcul boisson************************* */

    let afficheboisson = document.getElementById("afficheboisson");
    let choixBoisson = "";
    let c = 0;
    for (let i = 0; i < burger.length; i++) {
        if (burger[i].selected == false)
            afficheboisson.innerHTML = `Pas de boisson selectionné`;
    }
    for (let i = 0; i < boisson.length; i++) {
        if (boisson[i].selected == true) {
            c = c + parseInt(boisson[i].value);
            choixBoisson = c;
        }
    }
    //*********Affichage de resultat****************** */

    let compteurBoisson = document.getElementById("compteur_boisson").value;
    let factureboisson = compteurBoisson * choixBoisson;
    if (factureboisson > 0) {
        afficheboisson.innerHTML = `choix boisson : ${factureboisson}euros`;
    }
    //*********calcul du total des factures ****************** */

    let affichetotal = document.getElementById("affichetotal");
    let total = factureboisson + factureburger + facturepizza;

    if (total > 0) {
        affichetotal.innerHTML = `Votre facture s'élève à  : <b>${total}euros</b> </br>
            <b style="color:green">veuillez entrer vos informations pour proceder au paiement par carte</b>`;
    }

    let demo = document.getElementById("demo");
    let cb = document.getElementById("cb").value;
    let crypto = document.getElementById("crypto").value;
    let date = document.getElementById("date").value;

    if ((cb.length == 0) && (crypto.length == 0) && (date.length == 0)) {
        demo.innerHTML = alert("veuillez saisir tous les champs");
    } else if (crypto.length !== 3) {

        demo.innerHTML = alert("votre code secret et à l'arrière de votre carte et contient 3 chiffres");
    } else if (cb.length !== 10) {
        demo.innerHTML = alert("votre carte bancaire doit contenir 10 chiffre");
    } else if (date.length !== 4) {

        demo.innerHTML = alert("la date de validation doit etre inferieure à 5");
    }
    else if (total > 0) {
        demo.innerHTML = alert("paiement de " + total + "euros   effectué avec succès");
    } else {
        demo.innerHTML = alert("vous devrez remplir votre commande");
    }


}