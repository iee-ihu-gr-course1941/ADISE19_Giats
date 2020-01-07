const chatReducer = (state=[],action) => {
    if(action.type ==='fireToMe'){
        let chat=[...state];
        let j;
        if(Number(action.payload.id.charAt(2))===0){
            j="A";
        }else if(Number(action.payload.id.charAt(2))===1){
            j="B";
        }else if(Number(action.payload.id.charAt(2))===2){
            j="C";
        }else if(Number(action.payload.id.charAt(2))===3){
            j="D";
        }else if(Number(action.payload.id.charAt(2))===4){
            j="E";
        }else if(Number(action.payload.id.charAt(2))===5){
            j="F";
        }else if(Number(action.payload.id.charAt(2))===6){
            j="G";
        }else if(Number(action.payload.id.charAt(2))===7){
            j="H";
        }else if(Number(action.payload.id.charAt(2))===8){
            j="I";
        }else{
            j="J";
        }
        let x=(Number(action.payload.id.charAt(0)))+1;
        chat.push({player:"opp",message:"Opponent Fired To: "+x+"-"+j})
        return chat;
    }else if(action.type ==='fireToOpp'){
        let chat=[...state];
        let j;
        if(Number(action.payload.id.charAt(2))===0){
            j="A";
        }else if(Number(action.payload.id.charAt(2))===1){
            j="B";
        }else if(Number(action.payload.id.charAt(2))===2){
            j="C";
        }else if(Number(action.payload.id.charAt(2))===3){
            j="D";
        }else if(Number(action.payload.id.charAt(2))===4){
            j="E";
        }else if(Number(action.payload.id.charAt(2))===5){
            j="F";
        }else if(Number(action.payload.id.charAt(2))===6){
            j="G";
        }else if(Number(action.payload.id.charAt(2))===7){
            j="H";
        }else if(Number(action.payload.id.charAt(2))===8){
            j="I";
        }else{
            j="J";
        }
        let x=(Number(action.payload.id.charAt(0)))+1;
        chat.push({player:"me",message:"You Fired To: "+x+"-"+j})
        return chat;
    }else if(action.type ==='newGame'){
        return [];
    }else{
        return [...state];
    }
}

export default chatReducer;