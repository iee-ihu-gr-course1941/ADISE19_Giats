const myShipsReducer = (state=[],action) => {
    if(action.type ==='newGame'){
        let restartBoard=[];
        for(let i=0; i<10; i++){
            restartBoard.push([0,0,0,0,0,0,0,0,0,0]);
        }
        return restartBoard;
    }else if(action.type ==='setShip'){
        let myShips=[...state];;
        let flag=false;
        let i;
        if(!action.payload.rotate){
            if(action.payload.ship==='Carrier'){
                for(i=0; i<5; i++){
                    if(myShips[action.payload.locationI][action.payload.locationJ+i]===4 || myShips[action.payload.locationI][action.payload.locationJ+i]===5 || myShips[action.payload.locationI][action.payload.locationJ+i]===6 || myShips[action.payload.locationI][action.payload.locationJ+i]===7){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<5; i++){
                        myShips[action.payload.locationI][action.payload.locationJ+i]=3;
                    } 
                }
            }else if(action.payload.ship==='Battleship'){
                for(i=0; i<4; i++){
                    if(myShips[action.payload.locationI][action.payload.locationJ+i]===3 || myShips[action.payload.locationI][action.payload.locationJ+i]===5 || myShips[action.payload.locationI][action.payload.locationJ+i]===6 || myShips[action.payload.locationI][action.payload.locationJ+i]===7){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<4; i++){
                        myShips[action.payload.locationI][action.payload.locationJ+i]=4;
                    } 
                }
            }else if(action.payload.ship==='Destroyer'){
                for(i=0; i<3; i++){
                    if(myShips[action.payload.locationI][action.payload.locationJ+i]===3 || myShips[action.payload.locationI][action.payload.locationJ+i]===4 || myShips[action.payload.locationI][action.payload.locationJ+i]===6 || myShips[action.payload.locationI][action.payload.locationJ+i]===7){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<3; i++){
                        myShips[action.payload.locationI][action.payload.locationJ+i]=5;
                    } 
                }
            }else if(action.payload.ship==='Submarine'){
                for(i=0; i<3; i++){
                    if(myShips[action.payload.locationI][action.payload.locationJ+i]===3 || myShips[action.payload.locationI][action.payload.locationJ+i]===4 || myShips[action.payload.locationI][action.payload.locationJ+i]===5 || myShips[action.payload.locationI][action.payload.locationJ+i]===7){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<3; i++){
                        myShips[action.payload.locationI][action.payload.locationJ+i]=6;
                    } 
                }
            }else{
                for(i=0; i<2; i++){
                    if(myShips[action.payload.locationI][action.payload.locationJ+i]===3 || myShips[action.payload.locationI][action.payload.locationJ+i]===4 || myShips[action.payload.locationI][action.payload.locationJ+i]===5 || myShips[action.payload.locationI][action.payload.locationJ+i]===6){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<2; i++){
                        myShips[action.payload.locationI][action.payload.locationJ+i]=7;
                    } 
                }
            }
        }else{
            if(action.payload.ship==='Carrier'){
                for(i=0; i<5; i++){
                    if(myShips[action.payload.locationI+i][action.payload.locationJ]===4 || myShips[action.payload.locationI+i][action.payload.locationJ]===5 || myShips[action.payload.locationI+i][action.payload.locationJ]===6 || myShips[action.payload.locationI+i][action.payload.locationJ]===7 ){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<5; i++){
                        myShips[action.payload.locationI+i][action.payload.locationJ]=3;
                    } 
                }        
            }else if(action.payload.ship==='Battleship'){
                for(i=0; i<4; i++){
                    if(myShips[action.payload.locationI+i][action.payload.locationJ]===3 || myShips[action.payload.locationI+i][action.payload.locationJ]===5 || myShips[action.payload.locationI+i][action.payload.locationJ]===6 || myShips[action.payload.locationI+i][action.payload.locationJ]===7 ){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<4; i++){
                        myShips[action.payload.locationI+i][action.payload.locationJ]=4;
                    } 
                } 
            }else if(action.payload.ship==='Destroyer'){
                for(i=0; i<3; i++){
                    if(myShips[action.payload.locationI+i][action.payload.locationJ]===3 || myShips[action.payload.locationI+i][action.payload.locationJ]===4 || myShips[action.payload.locationI+i][action.payload.locationJ]===6 || myShips[action.payload.locationI+i][action.payload.locationJ]===7 ){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<3; i++){
                        myShips[action.payload.locationI+i][action.payload.locationJ]=5;
                    } 
                } 
            }else if(action.payload.ship==='Submarine'){
                for(i=0; i<3; i++){
                    if(myShips[action.payload.locationI+i][action.payload.locationJ]===3 || myShips[action.payload.locationI+i][action.payload.locationJ]===4|| myShips[action.payload.locationI+i][action.payload.locationJ]===5 || myShips[action.payload.locationI+i][action.payload.locationJ]===7 ){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<3; i++){
                        myShips[action.payload.locationI+i][action.payload.locationJ]=6;
                    } 
                } 
            }else{
                for(i=0; i<2; i++){
                    if(myShips[action.payload.locationI+i][action.payload.locationJ]===3 || myShips[action.payload.locationI+i][action.payload.locationJ]===4 || myShips[action.payload.locationI+i][action.payload.locationJ]===5 || myShips[action.payload.locationI+i][action.payload.locationJ]===6 ){
                        flag=true;
                    }
                } 
                if(!flag){
                    for(i=0; i<2; i++){
                        myShips[action.payload.locationI+i][action.payload.locationJ]=7;
                    } 
                } 
            } 
        }
        return myShips;
    }else if(action.type ==='randomShips'){
        let myShips=[];
        let i;
        let flag;
        for(i=0; i<10; i++){
            myShips.push([0,0,0,0,0,0,0,0,0,0]);
        }
        let locationI;
        let locationJ;
        let rotate=Math.floor(Math.random() * Math.floor(2));
        if(rotate===0){
            locationI=Math.floor(Math.random() * Math.floor(10));
            locationJ=Math.floor(Math.random() * Math.floor(6));
            for(i=0; i<5; i++){
                myShips[locationI][locationJ+i]=3;
            } 
        }else{
            locationI=Math.floor(Math.random() * Math.floor(6));
            locationJ=Math.floor(Math.random() * Math.floor(10));
            for(i=0; i<5; i++){
                myShips[locationI+i][locationJ]=3;
            } 
        }  
        rotate=Math.floor(Math.random() * Math.floor(2));
        if(rotate===0){
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(10));
                locationJ=Math.floor(Math.random() * Math.floor(7));
                for(i=0; i<4; i++){
                    if(myShips[locationI][locationJ+i]===3){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<4; i++){
                myShips[locationI][locationJ+i]=4;
            } 
        }else{
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(7));
                locationJ=Math.floor(Math.random() * Math.floor(10));
                for(i=0; i<4; i++){
                    if(myShips[locationI+i][locationJ]===3){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<4; i++){
                myShips[locationI+i][locationJ]=4;
            } 
        }
        rotate=Math.floor(Math.random() * Math.floor(2));
        if(rotate===0){
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(10));
                locationJ=Math.floor(Math.random() * Math.floor(8));
                for(i=0; i<3; i++){
                    if(myShips[locationI][locationJ+i]===3 || myShips[locationI][locationJ+i]===4){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<3; i++){
                myShips[locationI][locationJ+i]=5;
            } 
        }else{
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(8));
                locationJ=Math.floor(Math.random() * Math.floor(10));
                for(i=0; i<3; i++){
                    if(myShips[locationI+i][locationJ]===3 || myShips[locationI+i][locationJ]===4){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<3; i++){
                myShips[locationI+i][locationJ]=5;
            } 
        }
        rotate=Math.floor(Math.random() * Math.floor(2));
        if(rotate===0){
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(10));
                locationJ=Math.floor(Math.random() * Math.floor(8));
                for(i=0; i<3; i++){
                    if(myShips[locationI][locationJ+i]===3 || myShips[locationI][locationJ+i]===4 || myShips[locationI][locationJ+i]===5){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<3; i++){
                myShips[locationI][locationJ+i]=6;
            } 
        }else{
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(8));
                locationJ=Math.floor(Math.random() * Math.floor(10));
                for(i=0; i<3; i++){
                    if(myShips[locationI+i][locationJ]===3 || myShips[locationI+i][locationJ]===4 || myShips[locationI+i][locationJ]===5){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<3; i++){
                myShips[locationI+i][locationJ]=6;
            } 
        }
        rotate=Math.floor(Math.random() * Math.floor(2));
        if(rotate===0){
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(10));
                locationJ=Math.floor(Math.random() * Math.floor(9));
                for(i=0; i<2; i++){
                    if(myShips[locationI][locationJ+i]===3 || myShips[locationI][locationJ+i]===4 || myShips[locationI][locationJ+i]===5 || myShips[locationI][locationJ+i]===6){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<2; i++){
                myShips[locationI][locationJ+i]=7;
            } 
        }else{
            do{
                flag=false;
                locationI=Math.floor(Math.random() * Math.floor(9));
                locationJ=Math.floor(Math.random() * Math.floor(10));
                for(i=0; i<2; i++){
                    if(myShips[locationI+i][locationJ]===3 || myShips[locationI+i][locationJ]===4 || myShips[locationI+i][locationJ]===5 || myShips[locationI+i][locationJ]===6){
                        flag=true;
                    }
                } 
            }while(flag===true);
            for(i=0; i<2; i++){
                myShips[locationI+i][locationJ]=7;
            } 
        }
        return myShips
    }else{
        return state;
    }
}

export default myShipsReducer;