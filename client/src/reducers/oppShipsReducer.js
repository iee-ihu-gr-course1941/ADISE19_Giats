const oppShipsReducer = (state=[],action) => {
    if(action.type ==='newGame'){
        let restartBoard=[];
        for(let i=0; i<10; i++){
            restartBoard.push([0,0,0,0,0,0,0,0,0,0]);
        }
        return restartBoard;
    }else if(action.type ==='toBattle'){
        let flag;
        let myShips=[];
        let i;
        for( i=0; i<10; i++){
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
    }else if(action.type ==='setOppShips'){
        return action.payload.ships;
    }else{
        return state;
    }
}

export default oppShipsReducer;