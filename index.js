
let homeScore = document.getElementById("home_score");
let guestScore = document.getElementById("guest_score");

let homeCount = 0;
let guestCount = 0;


function home_add_one_point(){
    homeCount += 1;
    homeScore.textContent = homeCount;
}
function home_add_two_point(){
    homeCount += 2;
    homeScore.textContent = homeCount;
}
function home_add_three_point(){
    homeCount += 3;
    homeScore.textContent = homeCount;
}
function guest_add_one_point(){
    guestCount += 1;
    guestScore.textContent = guestCount;
}
function guest_add_two_point(){
    guestCount += 2;
    guestScore.textContent = guestCount;
}
function guest_add_three_point(){
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function reset(){
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
}   

