let UserScore = 0;
let BotScore  = 0;

// git push

let SelOptions = document.querySelectorAll(".opt");
let YourScore = document.querySelector("#your-score");
let ComScore = document.querySelector("#computer-score");
let ResultMsg = document.querySelector(".result-card");
let nameof = document.querySelector("#name");

//functions

SelOptions.forEach(choice => {
    choice.addEventListener("click", ()=>{
        const User_sel_choise = choice.getAttribute("id");
        userresult(User_sel_choise);
    })
});

let Bot_choise = () => {
    let arr=["rock","paper","scessor"];
    const randome_opt = Math.floor(Math.random()*3);
    return arr[randome_opt];
};

let userresult = (x) =>{
    let userx1=x;
    result_generator(userx1);
};

const result_generator = (x) =>{
    let user_choice1 = x;
    let Bot_choice1 = Bot_choise();     
    if(user_choice1===Bot_choice1){
        drawmatch(user_choice1,Bot_choice1);
    }
    else{
        if(user_choice1==="rock"){
            if(Bot_choice1==="paper"){
                botwin(user_choice1,Bot_choice1);
            }
            else{
                userwin(user_choice1,Bot_choice1);
            }
        }
        else if(user_choice1==="paper"){
            if(Bot_choice1==="scessor"){
                botwin(user_choice1,Bot_choice1);
            }
            else{
                userwin(user_choice1,Bot_choice1);
            }
        }
        else if(user_choice1==="scessor"){
            if(Bot_choice1==="rock"){
                botwin(user_choice1,Bot_choice1);
            }
            else{
                userwin(user_choice1,Bot_choice1);
            }
        }
    }
    
};



const drawmatch = (m1,m2) =>{
    ResultMsg.innerText=`Match was draw! Your ${m1} & Bot's ${m2} are same`;
    ResultMsg.style.backgroundColor = "#4C1D95";
}

const userwin =(m1,m2) =>{
    ResultMsg.innerText=`You win! Your ${m1} beats Bot's ${m2} `;
    ResultMsg.style.backgroundColor = "#065F46";
    UserScore++;
    YourScore.innerText=UserScore;
}

const botwin = (m1,m2) =>{
    ResultMsg.innerText=`You lose! Your ${m1} defeated by Bot's ${m2} `;
    ResultMsg.style.backgroundColor = "#7F1D1D";
    BotScore++;
    ComScore.innerText=BotScore;
}



// const name11= ()=>{
//     let name12=prompt("Enter Your Name");
//     nameof.innerText=`${name12}`;
// }

