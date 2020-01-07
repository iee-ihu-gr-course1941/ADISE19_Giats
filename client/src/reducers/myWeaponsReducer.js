const myWeaponsReducer = (state=[false,false,false,false,false,false,false],action) => {
    if(action.type ==='myWeapon'){
        let weapons=[...state];;
        weapons[action.payload.value]=true;
        return weapons
    }else if(action.type ==='newGame'){
        let weapons=[false,false,false,false,false,false,false]
        return weapons;
    }else{
        return state;
    }
}

export default myWeaponsReducer;