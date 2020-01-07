const oppBoardReducer = (state=[],action) => {
    if(action.type ==='newGame'){
        let restartBoard=[];
        for(let i=0; i<10; i++){
            restartBoard.push([0,0,0,0,0,0,0,0,0,0]);
        }
        return restartBoard;
    }else if(action.type ==='fireToOpp'){
        let oppboard=state;
        oppboard[Number(action.payload.id.charAt(0))][Number(action.payload.id.charAt(2))]=action.payload.value;
        return oppboard;
    }else{
        return state;
    }
}

export default oppBoardReducer;