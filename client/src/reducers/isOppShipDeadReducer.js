const isOppShipDeadReducer = (state=[false,false,false,false,false],action) => {
    if(action.type ==='isOppShipDead'){
        let ships=[...state];
       
        ships[action.payload.value]=true;
        return ships;
    }else if(action.type ==='newGame'){
        let ships=[false,false,false,false,false]
        return ships;
    }else{
        return state;
    }
}

export default isOppShipDeadReducer;