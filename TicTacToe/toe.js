const allCells = document.querySelectorAll(".cell");
let playerChecker = "X";
let state = true;
const tabIndex = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let gameWinner =false


allCells.forEach((cell)=>{
    
    cell.addEventListener('click', validateClick)
});


function validateClick(e){
    e.preventDefault()
    
    if(e.target.innerText ==""){
       if(putChecker(e)){
           alert(playerChecker)
       }
       
        
    }

}

function putChecker(e){
    if(state){
        e.target.innerText = playerChecker;
        gameWinner = checkWinner();
        if(!gameWinner){
            state = false;
            playerChecker = "O";
        }
    }
    else{
        e.target.innerText = playerChecker;
        gameWinner = checkWinner();
        if(!gameWinner){
            state = true;
            playerChecker = "X";
        }
    }

    return gameWinner;
}

function checkWinner(){
   const winner = tabIndex.some((indexList)=>{
       const win= indexList.every((i)=>{
            return allCells[i].innerText === playerChecker;
        })

        return win
    })

    return winner;
}

function checkDraw(){

}