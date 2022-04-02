const liens = document.querySelectorAll("a") /* On séléctionne tous les liens soius forme de tableau */

liens.forEach(lien =>{ /* Pour chaque liens dans le tableau "liens" */
    lien.addEventListener("click", function () { /* On ajoute un EventListener click */
        liens.forEach(a=>a.classList.remove("active")) /* Ici on séléctionne tous les liens et on leur enlève la classe "active"  */
        this.classList.add("active") /* Puis sur l'élément actuellement cliqué on ajoute la classe "active" */
    })
})


/* -----------------------------Augmentation----------------------------------------- */
const inputAugmentationNb = document.querySelector(".augmentationNb")
const inputAugmentationPourc = document.querySelector(".augmentationPourc")
const bouttonAugmentation = document.querySelector("#btnAugm")
const phraseResultatAugmentation = document.querySelector(".resultatAugmentation")
let resultatCalculAugmentation = 0

bouttonAugmentation.addEventListener("click", function (){
    resultatCalculAugmentation = parseFloat(inputAugmentationNb.value) + (parseFloat(inputAugmentationPourc.value)/100 * parseInt(inputAugmentationNb.value))
    phraseResultatAugmentation.innerHTML = `${inputAugmentationNb.value} + ${inputAugmentationPourc.value}% est égal a ${resultatCalculAugmentation}`
})

/* ---------------------------------Baisse------------------------------------------------ */
const inputBaisseNb = document.querySelector(".baisseNb")
const inputBaissePourc = document.querySelector(".baissePourc")
const bouttonBaisse = document.querySelector("#btnBaisse")
const phraseResultatBaisse = document.querySelector(".phraseResultatBaisse")
let resultatCalculBaisse = 0

bouttonBaisse.addEventListener("click", function (){
    resultatCalculBaisse = parseFloat(inputBaisseNb.value) - (parseFloat(inputBaissePourc.value)/100 * parseInt(inputBaisseNb.value))
    phraseResultatBaisse.innerHTML = `${inputBaisseNb.value} - ${inputBaissePourc.value}% est égal a ${resultatCalculBaisse}`
})
/* ------------------------------------------Variation------------------------------------- */
const inputVariationValeur1 = document.querySelector(".variationValeur1")
const inputVariationValeur2 = document.querySelector(".variationValeur2")
const bouttonVariation = document.querySelector("#btnVariation")
const phraseResultatVariation = document.querySelector(".phraseResultatVariation")
let resultatCalculVariation = 0

bouttonVariation.addEventListener("click", function(){
    resultatCalculVariation = ((parseFloat(inputVariationValeur2.value) - parseFloat(inputVariationValeur1.value))/parseFloat(inputVariationValeur1.value))*100
    phraseResultatVariation.innerHTML = `Le taux de variation entre ${inputVariationValeur1.value} et ${inputVariationValeur2.value} est de ${resultatCalculVariation}%`
})
/* -------------------------------------------Pourcentage en nombre---------------------------------- */
const inputPourcEnNbPourcentage = document.querySelector(".inputPourcEnNbPourcentage")
const inputPourcEnNbValeur = document.querySelector(".inputPourcEnNbValeur")
const bouttonPourcEnNb = document.querySelector("#btnPourcEnNb")
const phraseResultatPourcEnNb = document.querySelector(".phraseResultatPourcEnNb")
let resultatCalculPourcEnNb = 0

bouttonPourcEnNb.addEventListener("click", function(){
    resultatCalculPourcEnNb = (parseFloat(inputPourcEnNbPourcentage.value) * parseFloat(inputPourcEnNbValeur.value)/100)
    phraseResultatPourcEnNb.innerHTML = `${inputPourcEnNbPourcentage.value}% de ${inputPourcEnNbValeur.value} est égal a ${resultatCalculPourcEnNb}`
})
/* -------------------------------------------Nombre en pourcentage---------------------------------- */
const inputNbEnPourcValeur1 = document.querySelector(".inputNbEnPourcValeur1")
const inputNbEnPourcValeur2 = document.querySelector(".inputNbEnPourcValeur2")
const bouttonNombreEnPourcentages = document.querySelector("#btnNbEnPourc")
const phraseResultatNbEnPourc = document.querySelector(".phraseResultatNbEnPourc")
let resultatCalculNbEnPourc = 0

bouttonNombreEnPourcentages.addEventListener("click", function(){
    resultatCalculNbEnPourc = parseFloat(inputNbEnPourcValeur1.value) * 100 / parseFloat(inputNbEnPourcValeur2.value)
    phraseResultatNbEnPourc.innerHTML = `${inputNbEnPourcValeur1.value} represente ${resultatCalculNbEnPourc}% de ${inputNbEnPourcValeur2.value}`
})
