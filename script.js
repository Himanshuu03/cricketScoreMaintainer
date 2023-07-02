//team cuurent name
var nameButton = document.querySelector('[data-team-button]')
nameButton.addEventListener('click',()=>{
    var nameTeam = document.querySelector('#tNameInput').value;
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
        displayAllBal.innerText = displayAllBal.innerText + e.innerText +"__";
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

// var invRun = document.querySelectorAll('[data-inv-run]');
// var invRuns  =0;

// invRun.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         if(e.innerText == '1' || e.innerText == '2' || e.innerText == '3' || e.innerText == '4' || e.innerText == '6' || e.innerText =='5'){
//             invRuns += parseInt(e.innerText);
//             document.querySelector('[data-inv]').innerText = invRuns;
//         }
//     })
// })

// var playerButton = document.querySelector('[data-player-button]')
// playerButton.addEventListener('click',()=>{
//     var player = document.querySelector('#pNameInput').value;
//     if(player.value != ""){
//         document.querySelector('.invNameCurrent').innerText = player;
//         document.querySelector('[data-inv]').innerText = 0;
//         document.querySelector('#pNameInput').value ="";
//     } 
// })

// var invRun2 = document.querySelectorAll('[data-inv-run2]');
// var invRuns2  =0;

// invRun2.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         if(e.innerText == '1' || e.innerText == '2' || e.innerText == '3' || e.innerText == '4' || e.innerText == '6' || e.innerText =='5'){
//             invRuns2 += parseInt(e.innerText);
//             document.querySelector('[data-inv2]').innerText = invRuns2;
//         }
//     })
// })

// var playerButton2 = document.querySelector('[data-player-button2]')
// playerButton2.addEventListener('click',()=>{
//     var player2 = document.querySelector('#pNameInput2').value;
//     if(player2.value != ""){
//         document.querySelector('.invNameCurrent2').innerText = player2;
//         document.querySelector('[data-inv2]').innerText = 0;
//     } 
// })

// var remov1 = document.querySelector('[data-remove-button]');
// remov1.addEventListener('click',()=>{
//     var para = document.createElement('p');
//     para.innerText = "Player ->"+ document.querySelector('.invNameCurrent').innerText +" Score ->"+document.querySelector('[data-inv]').innerText;
//     document.querySelector('[data-team-all]').appendChild(para);
//     document.querySelector('.invNameCurrent').innerText = "";
//     document.querySelector('[data-inv]').innerText = 0;
//     document.querySelector('#pNameInput').value ="";
// })

// var remov2 = document.querySelector('[data-remove-button2]');
// remov2.addEventListener('click',()=>{
//     var para2= document.createElement('p');
//     para2.innerText = "Player ->"+ document.querySelector('.invNameCurrent2').innerText +" Score ->"+document.querySelector('[data-inv2]').innerText;
//     document.querySelector('[data-team-all]').appendChild(para2);
//     document.querySelector('.invNameCurrent2').innerText = "";
//     document.querySelector('[data-inv2]').innerText = 0;
//     document.querySelector('#pNameInput2').value ="";
// })