const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
let users = {}
let weight
let height
let youName = "";
let name = "us"
function login() {
    rl.question(" Enter your username: ", (username) => {
        rl.question(" Enter your password: ", (password) => {
            const user=users[username]
            if (password == users[username].password)
             
            {
                console.log(" welcom back " + username)
                youName=user.username
                console.log(youName)
                bmi()
            } 
             else {
                console.log("Invali username or password")
                
            }
            showMenu()
         })
    })        
}
function register() {
    rl.question(" Enter your username: ", (username) => {
    rl.question("Enter your password: ", (password)=>{
        users[username]= {password,username}
        console.log(" Register success")
        showMenu()
    })
    })
}

function bmi() {
    rl.question(" Enter your weight: ", (Wei) => {
        rl.question(" Enter your height: ", (Hei) =>{
            weight = parseFloat(Wei)
            
            height = parseFloat(Hei*0.01)
            console.log(users)
            console.log(weight)
            console.log(height)
            let result = weight / (height*height)
            
            if (result<18.5){
                console.log(youName + "You are underweight")
                console.log(result.toFixed(2))
            }
          else if (result<24.9){
                console.log(youName + "You are nonmal")
                console.log(result.toFixed(2))
            }
            if (result <29.9){
                console.log(youName + "You are Overweight")
                console.log(result.toFixed(2))
            }
            else if (result<39.9){
                console.log(youName + "You are Obese")
                console.log(result.toFixed(2))
            }
            if (result>49.9){
                console.log(youName + "You are Extremely Obese")
                console.log(result.toFixed(2))
            }
                rl.close()
        })
    })        
}

function showMenu(){
    console.log("\n1. Login ")
    console.log("2. Register ")
    console.log("3. Exit ")
    rl.question(" Enter your menu: ",(menu) => {
        if (menu == "1"){
            login()
        }
        if (menu == "2"){
            register()
        }
        if (menu == "3"){
            rl.close()
        }
        
    
    })
}
showMenu()