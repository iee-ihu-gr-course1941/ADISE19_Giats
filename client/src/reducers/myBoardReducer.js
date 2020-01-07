const myBoardReducer = (state=[],action) => {
    if(action.type ==='newGame'){
        var restartBoard=[];
        for(var i=0; i<10; i++){
            restartBoard.push([0,0,0,0,0,0,0,0,0,0]);
        }
        return restartBoard;
    }else if(action.type ==='fireToMe'){
        var myboard=[...state];
        myboard[Number(action.payload.id.charAt(0))][Number(action.payload.id.charAt(2))]=action.payload.value;
        return myboard;
    }else if(action.type ==='setMultiplayerFire'){
        return action.payload.board;
    }else{
        return state;
    }
}

export default myBoardReducer;