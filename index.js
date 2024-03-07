let homeScore=document.getElementById('homeScore')
let guestScore=document.getElementById('guestScore')

let countHome=0

function addOneHome(){
    
    countHome+=1
    homeScore.textContent=countHome    
}
function addTwoHome(){
    countHome+=2
    homeScore.textContent=countHome
}
function addThereHome(){
    countHome+=3
    homeScore.textContent=countHome   
}
let countGuest=0;
function addOneGuest(){
    countGuest+=1    
    guestScore.textContent=countGuest
}

function addTwoGuest(){
    countGuest+=2
    guestScore.textContent=countGuest
    
}
function addThereGuest(){
    countGuest+=3
    guestScore.textContent=countGuest
    
}