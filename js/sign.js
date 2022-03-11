const Sign = function(make, slogan, contact){

    this.make = make.toUpperCase();
    this.slogan = slogan;
    this.contact = contact;
    this.COST_PER_WORD = 5.0;
    this.COST_PER_DAY = 100.0;
    this.COST_PER_HOUR = 5.0;

    return {

        CostPerWord : () => {
            return this.COST_PER_WORD * this.make.length;
        },

        getMake : () => {
            return this.make;
        },

        getSlogan : () => {
            return this.slogan;
        },

        getContact : () => {
            return this.contact;
        },

        showSignLetter : () => {
            let html = "";
            for(var i=0; i < this.make.length; i++){
                html += `<li> <span>${this.make[i]} </span> </li>`;
            }
            return html;
        },
      
        CostPerPeriod : (initialDate, finalDate) => {
            let dataA, dataB, dtA, dtB, da, db, diff, dayDiff, calcDiffHours, diffHours;
            
            dataA = `${initialDate.month} ${initialDate.day}, ${initialDate.year} ${initialDate.time}`;
            dataB = `${finalDate.month} ${finalDate.day}, ${finalDate.year} ${finalDate.time}`;
            dtA = new Date(dataA);
            dtB = new Date(dataB);
    
            //diferença entre datas
            da = dtA.getTime();
            db = dtB.getTime();
            diff = db - da;
            dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    
            //diferença entre horas
            calcDiffHours = (db - da) / 1000;
            calcDiffHours /= (60 * 60);
            diffHours = Math.abs(Math.round(calcDiffHours));
    
            if (diffHours > 23) {
                return dayDiff * this.COST_PER_DAY;
            } else {
                return diffHours * this.COST_PER_HOUR;
            }
        },

        
    } //return

    
}

const yamaha = new Sign(
    "yamaha", "Existe uma para cada atitude",
    [ "yamaha-motor.com.br", "(11) 2431 6500", "sac@yamaha-motor.com.br" ]
);

const costPerWord = yamaha.CostPerWord();
const contact = yamaha.getContact();
const costPerPeriod = yamaha.CostPerPeriod(
    { month:"March", day:"11", year: "2022", time:"14:00:00" },
    { month:"March", day:"12", year: "2022", time:"18:00:00" }
)

document.querySelector("#word ul").innerHTML = yamaha.showSignLetter();
document.querySelector("#slogan p").innerHTML = yamaha.getSlogan();

for(var i in contact){
    document.querySelector("#contact ul").innerHTML += `<li> ${contact[i]} </li>`;
 }



 





