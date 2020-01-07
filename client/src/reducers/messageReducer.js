const messageReducer = (state="Place your fleet on the field",action) => {
    if(action.type ==='newGame'){
        let message="Place your fleet on the field";
        return message;
    }else if(action.type ==='toBattle'){
        let message="Select cell to Fire";
        return message;
    }else if(action.type ==='message'){
        let message=action.payload.value;
        return message;
    }else{
        return state;
    }
}

export default messageReducer;