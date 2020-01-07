const isGameStarted = (state=[],action) => {
    if(action.type ==='newGame'){
        return false;
    }else if(action.type ==="toBattle"){
        return true;
    }else{
        return state;
    }
}

export default isGameStarted;