//JE N'AI PAS REUSSI A FAIRE DE VAR DATA NI DE J.SON AVEC CE FULL PAGE

//CURSEUR
let mouseCursor = document.querySelector(".curseur");

window.addEventListener('mousemove', cursor);

function cursor(curs) {
    mouseCursor.style.top = curs.pageY + 'px';
    mouseCursor.style.left = curs.pageX + 'px';
}


// FULL PAGE

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollingSpeed: 1500,

})


// POP UP
document.querySelector('.btn-popupimg').addEventListener("click", (function (e) {
    document.querySelector('.popupimg').classList.remove('popupimg-invisible');
}));
document.querySelector('.popupimg-close').addEventListener("click", (function (e) {
    document.querySelector('.popupimg').classList.add('popupimg-invisible');
}));

// Détection de clic sur le bouton
document.querySelector("#envoi").addEventListener('click', function (e) {
    // Personnalisation du lien affiché dans la console
    //console.log("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais... " + document.querySelector("#analogie").value + " je serais..." + document.querySelector("#valeurAnalogie").value);
    //Envoi des données à l'API à l'adresse ci-dessus
    var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais... " + document.querySelector("#analogie").value + " je serais..." + document.querySelector("#valeurAnalogie").value;
    fetch(urlVisitee).then(function (response) {
        response.json().then(function (data) {
            console.log("Réponse reçue : ")
            console.log(data);
        })
    })

})




//Détection qu'une touche du clavier a été relâchée sur le champ analogie
document.querySelector("#analogie").addEventListener('keyup', function (e) {
    console.log("Champ modifié");
    document.querySelector("#analogieSuggeree").innerHTML = document.querySelector('#analogie').value
})

document.querySelector("#valeurAnalogie").addEventListener('keyup', function (e) {
    console.log("Champ modifié");
    document.querySelector("#valeurAnalogieSuggeree").innerHTML = document.querySelector('#valeurAnalogie').value
})
document.querySelector("#justificationAnalogie").addEventListener('keyup', function (e) {
    console.log("Champ modifié");
    document.querySelector("#justificationAnalogieSuggeree").innerHTML = document.querySelector('#justificationAnalogie').value
})


document.addEventListener("DOMContentLoaded", function () {
    /*console.log("Si j'étais " + infosAnalogie.analogie);
    console.log("<section><h2>Si j'étais " + infosAnalogie.analogie + ", je serais" + infosAnalogie.valeurAnalogie + ".</h2></section>");*/

    //section: si j'étais... je serais...
    /*data.forEach(function afficheNote(infosAnalogie) {
        var numCase = 0
        document.querySelector('#liste-analogies').innerHTML += "<section><h2>Si j'étais " + infosAnalogie.analogie + ", je serais " + infosAnalogie.valeurAnalogie + " </h2><p> " + infosAnalogie.justify + ".</p></section>";

    });*/

    //mentions légales volet déroulant


    document.querySelector('.volet').addEventListener('click', function (Click) {

        if (document.querySelector('.volet').classList.contains('volet-invisible')) {
            document.querySelector('.volet-invisible').animate([{
                height: "12em"

            }], {
                duration: 800
            })

            function a() {
                document.querySelector('.volet-invisible').classList.add('volet-visible')
                document.querySelector('.volet-invisible').classList.remove('volet-invisible')
            }
            setTimeout(a, 800)

        } else {
            document.querySelector('.volet-visible').animate([{
                height: "4em"

            }], {
                duration: 800
            })

            function b() {
                document.querySelector('.volet-visible').classList.add('volet-invisible')
                document.querySelector('.volet-visible').classList.add('volet-visible')
            }
            setTimeout(b, 800)
        }

        console.log("click")
        document.querySelector('.volet-invisible').animate([{
            height: '12em'
        }], {
            duration: 800
        })

        setTimeout(function () {
            document.querySelector('.volet-invisible').classList.add('volet-visible')
            document.querySelector('.volet-visible').classList.remove('volet-invisible');

        }, 800);

    });

});



// Valeurs et analogies //