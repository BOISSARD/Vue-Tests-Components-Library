function rgbAleatoire(){
    return 'rgb('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random()  * 255)+','+Math.floor(Math.random()  * 255)+')'
}

export default {
    methods: {
        objetsToPieByCategorie: function(objets){
            let categories = []
            objets.forEach(element => {
                if(categories[element.categorie] === undefined) categories[element.categorie] = 0
                categories[element.categorie]++
            });
            let catValue = []
            let catKey = Object.keys(categories).sort()
            for(let cat in catKey){
                catValue.push(categories[catKey[cat]])
            }
            let colors = []
            for(let i = 0; i < Object.keys(categories).length ; i++)
                colors.push(rgbAleatoire())
            return {
                datasets: [{
                    data: catValue,
                    backgroundColor: colors
                }],
                labels: catKey
            }
        },
        objetsToBarByValeur: function(objets){
            objets.sort((a,b) => (a.nom > b.nom) ? 1 : -1)
            let labels = [], valeurs = [], colors = []
            objets.forEach(element => {
                labels.push(element.nom)
                valeurs.push(element.valeur)
                colors.push(rgbAleatoire())
            });
            return {
                datasets: [{
                    data: valeurs,
                    backgroundColor: colors
                }],
                labels: labels
            }
        }
    }
}