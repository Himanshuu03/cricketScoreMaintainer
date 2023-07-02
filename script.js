//team cuurent name
var nameButton = document.querySelector('[data-team-button]')
nameButton.addEventListener('click',()=>{
    var nameTeam = document.querySelector('#tNameInput').value;
    console.log("Hello")
    if(nameTeam.value != ""){
        document.querySelector('.teamNameCurrent').innerText = nameTeam;
        document.querySelector('.teamCurrentScore').innerText = 0;
    } 
})
var teamRun = document.querySelectorAll('[data-team-run]')
var currentScore = document.querySelector('.teamCurrentScore');
var displayAllBal = document.querySelector('.displayAllBall');
var total = 0;
var count = 0;
var overCount =1;
teamRun.forEach((e)=>{
    e.addEventListener('click',()=>{
        displayAllBal.innerText = displayAllBal.innerText + e.innerText +"__"
        if(e.innerText == '1' || e.innerText == '2' || e.innerText == '3' || e.innerText == '4' || e.innerText == '6' || e.innerText =='5' || e.innerText == 'Bb' || e.innerText == 'Dotb'){
            count ++;
            if(count == 6){
                displayAllBal.innerText = displayAllBal.innerText + "OverCount is "+overCount;
                var br = document.createElement("br");
                displayAllBal.appendChild(br);
                count =0;
                overCount++;
            }
        }
        if(e.innerText == 'Nb' || e.innerText == 'Wb'){
           total += 1;
           currentScore.innerText = total;
        }
        else if(e.innerText == '1' || e.innerText == '2' || e.innerText == '3' || e.innerText == '4' || e.innerText == '6' || e.innerText =='5'){
            total += parseInt(e.innerText);
            currentScore.innerText = total;
        }
    })
})

