export const newGame = () =>{
    return {
        type:'newGame'
    }  
}
export const setShip = (rotate,ship,locationI,locationJ) =>{
    return {
        type:'setShip',
        payload:{rotate: rotate, ship: ship, locationI: locationI, locationJ: locationJ}
    }  
}
export const randomShips = () =>{
    return {
        type:'randomShips'
    }  
}
export const myWeapon = (value) =>{
    return {
        type:'myWeapon',
        payload:{value:value}
    }  
}
export const oppWeapon = (value) =>{
    return {
        type:'oppWeapon',
        payload:{value:value}
    }  
}
export const toBattle = () =>{
    return {
        type:'toBattle'
    }  
}
export const fireToOpp = (id,value) =>{
    return {
        type:'fireToOpp',
        payload:{id:id,value:value}
    }  
}
export const fireToMe = (id,value) =>{
    return {
        type:'fireToMe',
        payload:{id:id,value:value}
    }  
}
export const isMyShipDead = (value) =>{
    return {
        type:'isMyShipDead',
        payload:{value:value}
    }  
}
export const isOppShipDead = (value) =>{
    return {
        type:'isOppShipDead',
        payload:{value:value}
    }  
}
export const message = (value) =>{
    return {
        type:'message',
        payload:{value:value}
    }  
}
export const setOppShips = (ships) =>{
    return {
        type:'setOppShips',
        payload:{ships:ships}
    }  
}
export const setMultiplayerFire = (board) =>{
    return {
        type:'setMultiplayerFire',
        payload:{board:board}
    }  
}