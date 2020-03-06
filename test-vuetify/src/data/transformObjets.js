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
                colors.push('rgb('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random()  * 255)+','+Math.floor(Math.random()  * 255)+')')
            return {
                datasets: [{
                    data: catValue,
                    backgroundColor: colors
                }],
                labels: catKey
            }
        }
    }
}