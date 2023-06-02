let currentDate = document.querySelector("#current-date")
let age = document.querySelector("#age")
const date = new Date()
let quotes = [
    "You are very young, still a baby with your parents",
    "You are still young, No matter what keep pushing, take your education serious. Live your life, maximize your potentials.",
    "You need to start making money and working towards being independent.",
    "You have to look towards looking for love and settling down with someone you truly love and get married.",
    "You and your partner ought to be raising kids by now, or settling bills in the family.",
    "You are approaching retirement, I hope you have saved enough money for it and trained your kids the right way, so you can enjoy them.",
    "You should be a granny by now, atleast one of your children should have an offspring.",
    "I hope you are eating healthy, because bad health habits may lead to your death soon."
]



const usersAge = () => {
    let currentYear = date.getFullYear().toString();
    console.log(currentYear);
    currentDate.addEventListener("input", ()=>{
        let userDateOfBirth = currentDate.value
        let userYear = userDateOfBirth.slice(0,4)
        console.log(userYear);
        let ageOfUser = currentYear + "-" + userYear
        let ageResult = eval(ageOfUser);
        console.log(typeof(ageResult));

        
        if (ageResult > 1 && ageResult <= 12   ) {
            age.textContent =  "You are " + ageResult + " years old. " + quotes[0]
        } else if (ageResult > 12 && ageResult <= 20  ) {
            age.textContent =  "You are " + ageResult + " years old. " + quotes[1]
        }
        else if(ageResult > 20 && ageResult <= 25){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[2]
        }
        else if(ageResult > 25 && ageResult <= 30){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[3]
        }
        else if(ageResult > 30 && ageResult <= 40){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[4]
        }
        else if(ageResult > 40 && ageResult <= 50){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[5]
        }
        else if(ageResult > 60 && ageResult <= 70){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[6]
        }
        else if(ageResult > 70){
            age.textContent =  "You are " + ageResult + " years old. " + quotes[7]
        }

    })  
}

usersAge();

