import React, { Component } from 'react'

import '../css/Fleet.css';
import splash from "../images/paint-splash.svg"
import explosion from  "../images/explosion.svg";
import Carrier from "../images/carrier.png"
import Battleship from "../images/battleship.png"
import Destroyer from "../images/destroyer.png"
import Submarine from "../images/submarine.png"
import Patrol_Boat from "../images/patrol-boat.png"
import rotate from "../images/rotate.svg"
import Carrier_Weapon1 from "../images/carrier-weapon1.PNG"
import Carrier_Weapon2 from "../images/carrier-weapon2.PNG"
import Battleship_Weapon from "../images/battleship-weapon.png"
import Destroyer_Weapon1 from "../images/destroyer-weapon1.png"
import Destroyer_Weapon2 from "../images/destroyer-weapon2.PNG"
import Submarine_Weapon2 from "../images/submarine-weapon2.png"

import {connect} from "react-redux";
import {newGame,setShip,randomShips,toBattle,fireToOpp,oppWeapon,myWeapon,fireToMe,isOppShipDead,isMyShipDead,message} from "../actions/"
import {FaShip} from 'react-icons/fa';
class Fleet extends Component {
    constructor(props) {
        super(props)

        this.state ={
            rotate:false,
            selectedship:"Carrier",
            selectedWeapon:""
        }
    }
    componentDidMount(){
        this.props.newGame();       
    }
    rotateToggle = () =>{
        this.setState({ rotate: !this.state.rotate}); 
    }
    selectedShip(ship){
        this.setState({selectedship:ship});
    }
    selectedWeapon(weapon){
        this.setState({selectedWeapon:weapon});
    }
    isShipSet(ship){
        let flag=false;
        if(ship==='Carrier'){
            this.props.myShipsReducer.forEach(function(element){
                for(let i=0; i<10; i++){
                    if(element[i]===3){
                        flag= true;
                    }
                }
            });
        }else if(ship==='Battleship'){
            this.props.myShipsReducer.forEach(function(element){
                for(let i=0; i<10; i++){
                    if(element[i]===4){
                        flag= true;
                    }
                }
            });
        }else if(ship==='Destroyer'){
            this.props.myShipsReducer.forEach(function(element){
                for(let i=0; i<10; i++){
                    if(element[i]===5){
                        flag= true;
                    }
                }
            });
        }else if(ship==='Submarine'){
            this.props.myShipsReducer.forEach(function(element){
                for(let i=0; i<10; i++){
                    if(element[i]===6){
                        flag= true;
                    }
                }
            });
        }else{
            this.props.myShipsReducer.forEach(function(element){
                for(let i=0; i<10; i++){
                    if(element[i]===7){
                        flag= true;
                    }
                }
            });
        }
        return flag;
    }
    allShipsAreSet = () =>{
        let flag1=false;
        let flag2=false;
        let flag3=false;
        let flag4=false;
        let flag5=false;
        this.props.myShipsReducer.forEach(function(element){
        for(let i=0; i<10; i++){
                if(element[i]===3){
                    flag1= true;
                }
                if(element[i]===4){
                    flag2= true;
                }
                if(element[i]===5){
                    flag3= true;
                }
                if(element[i]===6){
                    flag4= true;
                }
                if(element[i]===7){
                    flag5= true;
                }
            }
        });
        if(flag1 && flag2 && flag3 && flag4 && flag5){
            if(!this.props.isGameStarted){
                this.props.message("Press the button to begin the Battleship");
            }
            return true;
        }else{
            return false;
        }
    }
    handleClickMT = (id) =>{
        if(!this.state.rotate){
            if(this.state.selectedship==='Carrier'){
                if(5-Number(id.charAt(2))>=0){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Battleship'){
                if(4-Number(id.charAt(2))>=-2){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Destroyer'){
                if(3-Number(id.charAt(2))>=-4){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Submarine'){
                if(3-Number(id.charAt(2))>=-4){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Patrol_Boat'){
                if(2-Number(id.charAt(2))>=-6){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }
        }else{
            if(this.state.selectedship==='Carrier'){
                if(5-Number(id.charAt(1))>=0){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Battleship'){
                if(4-Number(id.charAt(1))>=-2){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Destroyer'){
                if(3-Number(id.charAt(1))>=-4){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Submarine'){
                if(3-Number(id.charAt(1))>=-4){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }else if(this.state.selectedship==='Patrol_Boat'){
                if(2-Number(id.charAt(1))>=-6){
                    this.props.setShip(this.state.rotate,this.state.selectedship,Number(id.charAt(1)),Number(id.charAt(2)));
                    this.props.message("Place your fleet on the field");
                }else{
                    this.props.message("Select another cell");
                }
            }
        } 
        this.selectedShip("");
    }
    handleClickOT = (id) =>{
        let j=Number(id.charAt(2));
        let x=Number(id.charAt(0));
        if(this.state.selectedWeapon===""){
            if(this.props.oppBoardReducer[x][j]===0){
                if(this.props.oppShipsReducer[x][j] >2){
                    this.props.fireToOpp(id,2);
                }else{
                    this.props.fireToOpp(id,1);
                }
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Carrier-Weapon1"){
            if((x !== 0 && x!==9) && (j !== 0 && j!==9)){
                if(this.props.oppShipsReducer[x-1][j-1] >2){
                    let k=x-1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x-1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x-1][j+1] >2){
                    let k=x-1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x-1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x+1][j-1] >2){
                    let k=x+1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x+1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x+1][j+1] >2){
                    let k=x+1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x+1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x][j] >2){
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                this.props.myWeapon(0);
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Carrier-Weapon2"){
            if((x !== 0 && x!==9) && (j !== 0 && j!==9)){
                if(this.props.oppShipsReducer[x-1][j] >2){
                    let k=x-1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x-1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x][j] >2){
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x][j-1] >2){
                    let k=x;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x][j+1] >2){
                    let k=x;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                if(this.props.oppShipsReducer[x+1][j] >2){
                    let k=x+1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,2);
                }else{
                    let k=x+1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToOpp(t,1);
                }
                this.props.myWeapon(1);
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Battleship-Weapon"){
            if((x !== 0 && x!==9) && (j !== 0 && j!==9)){
                for(let i=-1; i<2; i++){
                    for(let l=-1; l<2; l++){
                        if(this.props.oppShipsReducer[x+i][j+l] >2){
                            let k=x+i;
                            let p=j+l;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,2);
                        }else{
                            let k=x+i;
                            let p=j+l;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,1);
                        }
                    }
                }
                this.props.myWeapon(2);
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Destroyer-Weapon1"){
            if(j !== 0 && j!==9){
                for(let i=-1; i<2; i++){
                    if(this.props.oppShipsReducer[x][j+i] >2){
                            let k=x;
                            let p=j+i;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,2);
                        }else{
                            let k=x;
                            let p=j+i;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,1);
                        }
                }
                this.props.myWeapon(3);
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Destroyer-Weapon2"){
            if(x !== 0 && x!==9){
                for(let i=-1; i<2; i++){
                    if(this.props.oppShipsReducer[x+i][j] >2){
                            let k=x+i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,2);
                        }else{
                            let k=x+i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,1);
                        }
                }
                this.props.myWeapon(4);
                this.botPlay();
                this.props.message("Select cell to Fire");
            }else{
               this.props.message("Select another cell");
            }
        }else if(this.state.selectedWeapon==="Submarine-Weapon1"){
            for(let i=0; i<10; i++){
                if(this.props.oppShipsReducer[x][i] >2){
                            let k=x;
                            let p=i;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,2);
                        }else{
                            let k=x;
                            let p=i;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,1);
                }
            }
            this.props.myWeapon(5);
            this.botPlay();
            this.props.message("Select cell to Fire");
        }else if(this.state.selectedWeapon==="Submarine-Weapon2"){
            for(let i=0; i<10; i++){
                if(this.props.oppShipsReducer[i][j] >2){
                            let k=i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,2);
                        }else{
                            let k=i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToOpp(t,1);
                }
            }
            this.props.myWeapon(6);
            this.botPlay();
            this.props.message("Select cell to Fire");
        }
        this.isMyShipDead();
        this.selectedWeapon("");
    }
    botPlay= () =>{
        let randomPlay=0;
        let flag=false;
        let x=0;
        let j=0;
        do{
            randomPlay= Math.floor(Math.random() * (1 - 0 +1)) + 0;
            if(randomPlay===0){
                flag=true;
            }else{
                randomPlay= Math.floor(Math.random() * (7 - 1 + 1)) + 1;
                if(!this.props.oppWeaponsReducer[randomPlay-1]){
                    flag=true
                }
            }
        }while(!flag);
        if(randomPlay===0){
            flag=false;
            do{
                x=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                j=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                if(this.props.myBoardReducer[x][j]===0){
                    if(this.props.myShipsReducer[x][j] >2){
                        let k=x;
                        let p=j;
                        let t=k+"o"+p;
                        this.props.fireToMe(t,2);
                    }else{
                        let k=x;
                        let p=j;
                        let t=k+"o"+p;
                        this.props.fireToMe(t,1);
                    }
                    flag=true
                }
            }while(!flag);
        }else if(randomPlay===1){
            flag=false;
                x=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                j=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                if(this.props.myShipsReducer[x-1][j-1] >2){
                    let k=x-1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x-1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x-1][j+1] >2){
                    let k=x-1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x-1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x+1][j-1] >2){
                    let k=x+1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x+1;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x+1][j+1] >2){
                    let k=x+1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x+1;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x][j] >2){
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                this.props.oppWeapon(0);
        }else if(randomPlay===2){
            flag=false;
                x=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                j=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                if(this.props.myShipsReducer[x-1][j] >2){
                    let k=x-1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x-1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x][j] >2){
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x][j-1] >2){
                    let k=x;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x;
                    let p=j-1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x][j+1] >2){
                    let k=x;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x;
                    let p=j+1;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                if(this.props.myShipsReducer[x+1][j] >2){
                    let k=x+1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,2);
                }else{
                    let k=x+1;
                    let p=j;
                    let t=k+"o"+p;
                    this.props.fireToMe(t,1);
                }
                this.props.oppWeapon(1);
        }else if(randomPlay===3){
            flag=false;
                x=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                j=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                for(let i=-1; i<2; i++){
                    for(let l=-1; l<2; l++){
                        if(this.props.myShipsReducer[x+i][j+l] >2){
                            let k=x+i;
                            let p=j+l;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,2);
                        }else{
                            let k=x+i;
                            let p=j+l;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,1);
                        }
                    }
                }
                this.props.oppWeapon(2);
        }else if(randomPlay===4){
                x=Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                j=Math.floor(Math.random() * (8 - 0 + 1)) + 0;
                for(let i=-1; i<2; i++){
                    if(this.props.myShipsReducer[x][j+i] >2){
                            let k=x;
                            let p=j+i;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,2);
                        }else{
                            let k=x;
                            let p=j+i;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,1);
                        }
                }
                this.props.oppWeapon(3);
        }else if(randomPlay===5){
            x=Math.floor(Math.random() * (8 - 0 + 1)) + 0;
            j=Math.floor(Math.random() * (9 - 1 + 1)) + 1;
                for(let i=-1; i<2; i++){
                    if(this.props.myShipsReducer[x+i][j] >2){
                            let k=x+i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,2);
                        }else{
                            let k=x+i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,1);
                        }
                }
                this.props.oppWeapon(4);
        }else if(randomPlay===6){
            x=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            j=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            for(let i=0; i<10; i++){
                if(this.props.myShipsReducer[x][i] >2){
                            let k=x;
                            let p=i;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,2);
                        }else{
                            let k=x;
                            let p=i;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,1);
                }
            }
            this.props.oppWeapon(5);
        }else if(randomPlay===7){
            x=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            j=Math.floor(Math.random() * (9 - 0 + 1)) + 0;
            for(let i=0; i<10; i++){
                if(this.props.myShipsReducer[i][j] >2){
                            let k=i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,2);
                        }else{
                            let k=i;
                            let p=j;
                            let t=k+"o"+p;
                            this.props.fireToMe(t,1);
                }
            }
            this.props.oppWeapon(6);
        }
        this.isOppShipDead();
    }
    isMyShipDead= () =>{
        let count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===3){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===5){
                    this.props.isMyShipDead(0)
                }
            count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===4){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===4){
                    this.props.isMyShipDead(1)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===5){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isMyShipDead(2)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===6){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isMyShipDead(3)
                }
                count=0;
                for(let i=0; i<this.props.myShipsReducer.length; i++){
                    for(let j=0; j<this.props.myShipsReducer.length; j++){
                        if(this.props.myShipsReducer[i][j]===7){
                            if(this.props.myBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===2){
                    this.props.isMyShipDead(4)
                }
    }
    isOppShipDead= () =>{
        let count=0;
     
                for(let i=0; i<this.props.oppShipsReducer.length; i++){
                    for(let j=0; j<this.props.oppShipsReducer.length; j++){
                        if(this.props.oppShipsReducer[i][j]===3){
                            if(this.props.oppBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===5){
                    this.props.isOppShipDead(0)
                }
                count=0;
                for(let i=0; i<this.props.oppShipsReducer.length; i++){
                    for(let j=0; j<this.props.oppShipsReducer.length; j++){
                        if(this.props.oppShipsReducer[i][j]===4){
                            if(this.props.oppBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===4){
                    this.props.isOppShipDead(1)
                }
                count=0;
                for(let i=0; i<this.props.oppShipsReducer.length; i++){
                    for(let j=0; j<this.props.oppShipsReducer.length; j++){
                        if(this.props.oppShipsReducer[i][j]===5){
                            if(this.props.oppBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isOppShipDead(2)
                }
                count=0;
                for(let i=0; i<this.props.oppShipsReducer.length; i++){
                    for(let j=0; j<this.props.oppShipsReducer.length; j++){
                        if(this.props.oppShipsReducer[i][j]===6){
                            if(this.props.oppBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===3){
                    this.props.isOppShipDead(3)
                }
                count=0;
                for(let i=0; i<this.props.oppShipsReducer.length; i++){
                    for(let j=0; j<this.props.oppShipsReducer.length; j++){
                        if(this.props.oppShipsReducer[i][j]===7){
                            if(this.props.oppBoardReducer[i][j]===2){
                                count++;
                            }
                        }
                    }
                }
                if(count===2){
                    this.props.isOppShipDead(4)
                }
    }
    createMyTable= () =>{
        let mytable=[];     
        if(this.props.myBoardReducer.length !==0){
            mytable.push(
                <tr key={0}>
                    <td className="fleet-opponentfleet-number"><span>0</span></td>
                    <td className="fleet-opponentfleet-number"><span>A</span></td>
                    <td className="fleet-opponentfleet-number"><span>B</span></td>
                    <td className="fleet-opponentfleet-number"><span>C</span></td>
                    <td className="fleet-opponentfleet-number"><span>D</span></td>
                    <td className="fleet-opponentfleet-number"><span>E</span></td>
                    <td className="fleet-opponentfleet-number"><span>F</span></td>
                    <td className="fleet-opponentfleet-number"><span>G</span></td>
                    <td className="fleet-opponentfleet-number"><span>H</span></td>
                    <td className="fleet-opponentfleet-number"><span>I</span></td>
                    <td className="fleet-opponentfleet-number"><span>J</span></td>
                </tr>
            )
            for(let i=0; i<10; i++){
                mytable.push(
                    <tr key={i+1}>
                        <td className="fleet-opponentfleet-number"><span>{i+1}</span></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"0") : null}><div>{this.props.myBoardReducer[i][0]!==0 ? <div><img className={this.props.myBoardReducer[i][0]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][0]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][0]>2 ? this.setImgOfShip(i,0) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"1") : null}><div>{this.props.myBoardReducer[i][1]!==0 ? <div><img className={this.props.myBoardReducer[i][1]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][1]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][1]>2 ? this.setImgOfShip(i,1) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"2") : null}><div>{this.props.myBoardReducer[i][2]!==0 ? <div><img className={this.props.myBoardReducer[i][2]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][2]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][2]>2 ? this.setImgOfShip(i,2) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"3") : null}><div>{this.props.myBoardReducer[i][3]!==0 ? <div><img className={this.props.myBoardReducer[i][3]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][3]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][3]>2 ? this.setImgOfShip(i,3) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"4") : null}><div>{this.props.myBoardReducer[i][4]!==0 ? <div><img className={this.props.myBoardReducer[i][4]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][4]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][4]>2 ? this.setImgOfShip(i,4) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"5") : null}><div>{this.props.myBoardReducer[i][5]!==0 ? <div><img className={this.props.myBoardReducer[i][5]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][5]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][5]>2 ? this.setImgOfShip(i,5) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"6") : null}><div>{this.props.myBoardReducer[i][6]!==0 ? <div><img className={this.props.myBoardReducer[i][6]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][6]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][6]>2 ? this.setImgOfShip(i,6) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"7") : null}><div>{this.props.myBoardReducer[i][7]!==0 ? <div><img className={this.props.myBoardReducer[i][7]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][7]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][7]>2 ? this.setImgOfShip(i,7) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"8") : null}><div>{this.props.myBoardReducer[i][8]!==0 ? <div><img className={this.props.myBoardReducer[i][8]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][8]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][8]>2 ? this.setImgOfShip(i,8) : null}</div></td>
                        <td onClick={!this.props.isGameStarted ? () => this.handleClickMT("m"+i+"9") : null}><div>{this.props.myBoardReducer[i][9]!==0 ? <div><img className={this.props.myBoardReducer[i][9]===1 ? "splash" : "explosion"} src={this.props.myBoardReducer[i][9]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.myShipsReducer[i][9]>2 ? this.setImgOfShip(i,9) : null}</div></td>
                    </tr>
                    )         
            }
            return mytable;
        }
    }
    createOppTable= () =>{
        let opptable=[];     
        if(this.props.myBoardReducer.length !==0){
            opptable.push(
                <tr key={0}>
                    <td className="fleet-opponentfleet-number"><span>0</span></td>
                    <td className="fleet-opponentfleet-number"><span>A</span></td>
                    <td className="fleet-opponentfleet-number"><span>B</span></td>
                    <td className="fleet-opponentfleet-number"><span>C</span></td>
                    <td className="fleet-opponentfleet-number"><span>D</span></td>
                    <td className="fleet-opponentfleet-number"><span>E</span></td>
                    <td className="fleet-opponentfleet-number"><span>F</span></td>
                    <td className="fleet-opponentfleet-number"><span>G</span></td>
                    <td className="fleet-opponentfleet-number"><span>H</span></td>
                    <td className="fleet-opponentfleet-number"><span>I</span></td>
                    <td className="fleet-opponentfleet-number"><span>J</span></td>
                </tr>
            )
            for(let i=0; i<10; i++){
                opptable.push(
                    <tr key={i+1}>
                        <td className="fleet-opponentfleet-number"><span>{i+1}</span></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o0`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][0]!==0 ? <div><img className={this.props.oppBoardReducer[i][0]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][0]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][0]>2 ? this.setOppImgOfShip(i,0) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o1`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][1]!==0 ? <div><img className={this.props.oppBoardReducer[i][1]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][1]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][1]>2 ? this.setOppImgOfShip(i,1) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o2`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][2]!==0 ? <div><img className={this.props.oppBoardReducer[i][2]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][2]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][2]>2 ? this.setOppImgOfShip(i,2) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o3`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][3]!==0 ? <div><img className={this.props.oppBoardReducer[i][3]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][3]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][3]>2 ? this.setOppImgOfShip(i,3) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o4`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][4]!==0 ? <div><img className={this.props.oppBoardReducer[i][4]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][4]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][4]>2 ? this.setOppImgOfShip(i,4) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o5`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][5]!==0 ? <div><img className={this.props.oppBoardReducer[i][5]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][5]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][5]>2 ? this.setOppImgOfShip(i,5) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o6`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][6]!==0 ? <div><img className={this.props.oppBoardReducer[i][6]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][6]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][6]>2 ? this.setOppImgOfShip(i,6) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o7`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][7]!==0 ? <div><img className={this.props.oppBoardReducer[i][7]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][7]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][7]>2 ? this.setOppImgOfShip(i,7) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o8`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][8]!==0 ? <div><img className={this.props.oppBoardReducer[i][8]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][8]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][8]>2 ? this.setOppImgOfShip(i,8) : null}</div></td>
                        <td  onClick={this.props.isGameStarted ? () => this.handleClickOT(`${i}o9`) : null}><div><span className="fleet-opponentfleet-hover"/>{this.props.oppBoardReducer[i][9]!==0 ? <div><img className={this.props.oppBoardReducer[i][9]===1 ? "splash" : "explosion"} src={this.props.oppBoardReducer[i][9]===1 ? splash : explosion} alt="splash"/></div>:null}{this.props.oppShipsReducer[i][9]>2 ? this.setOppImgOfShip(i,9) : null}</div></td>
                    </tr>
                    )         
            }
            return opptable;
        }
    }
    setImgOfShip= (i,j) =>{
        let shipI=-1;
        let shipJ=-1; 
        let ship=null;
        if(this.props.myShipsReducer[i][j]===3){
            for(let k = 0; k < this.props.myShipsReducer.length; k++){
                for(let l=0; l<this.props.myShipsReducer.length; l++){
                    if(this.props.myShipsReducer[k][l] === 3){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.myShipsReducer[shipI][shipJ+1]===3){
                    ship=<img  alt="ship"  className="carrier-orizontia" src={Carrier}/>
                }else if(this.props.myShipsReducer[shipI+1][shipJ]===3){
                    ship=<img  alt="ship"  className="carrier-katheta" src={Carrier}/>
                }
            }         
        }else if(this.props.myShipsReducer[i][j]===4){
            for(let k = 0; k < this.props.myBoardReducer.length; k++){
                for(let l=0; l<this.props.myBoardReducer.length; l++){
                    if(this.props.myShipsReducer[k][l] === 4){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.myShipsReducer[shipI][shipJ+1]===4){
                    ship=<img  alt="ship"  className="battleship-orizontia" src={Battleship}/>
                }else if(this.props.myShipsReducer[shipI+1][shipJ]===4){
                    ship=<img  alt="ship"  className="battleship-katheta" src={Battleship}/>
                }
            }        
        }else if(this.props.myShipsReducer[i][j]===5){
            for(let k = 0; k < this.props.myShipsReducer.length; k++){
                for(let l=0; l<this.props.myShipsReducer.length; l++){
                    if(this.props.myShipsReducer[k][l] === 5){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.myShipsReducer[shipI][shipJ+1]===5){
                    ship=<img  alt="ship"  className="destroyer-orizontia" src={Destroyer}/>
                }else if(this.props.myShipsReducer[shipI+1][shipJ]===5){
                    ship=<img  alt="ship"  className="destroyer-katheta" src={Destroyer}/>
                }
            }          
        }else if(this.props.myShipsReducer[i][j]===6){
            for(let k = 0; k < this.props.myShipsReducer.length; k++){
                for(let l=0; l<this.props.myShipsReducer.length; l++){
                    if(this.props.myShipsReducer[k][l] === 6){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.myShipsReducer[shipI][shipJ+1]===6){
                    ship=<img  alt="ship"  className="destroyer-orizontia" src={Submarine}/>
                }else if(this.props.myShipsReducer[shipI+1][shipJ]===6){
                    ship=<img  alt="ship"  className="destroyer-katheta" src={Submarine}/>
                }
            }            
        }else{
            for(let k = 0; k < this.props.myShipsReducer.length; k++){
                for(let l=0; l<this.props.myShipsReducer.length; l++){
                    if(this.props.myShipsReducer[k][l] === 7){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.myShipsReducer[shipI][shipJ+1]===7){
                    ship=<img  alt="ship"  className="patrol-boat-orizontia" src={Patrol_Boat}/>
                }else if(this.props.myShipsReducer[shipI+1][shipJ]===7){
                    ship=<img  alt="ship"  className="patrol-boat-katheta" src={Patrol_Boat}/>
                }
            }             
        }
        return ship;
    }
    setOppImgOfShip= (i,j) =>{
        let shipI=-1;
        let shipJ=-1; 
        let ship=null;
        if(this.props.oppShipsReducer[i][j]===3){
            for(let k = 0; k < this.props.oppShipsReducer.length; k++){
                for(let l=0; l<this.props.oppShipsReducer.length; l++){
                    if(this.props.oppShipsReducer[k][l] === 3){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.oppShipsReducer[shipI][shipJ+1]===3){
                    ship=<img alt="ship"  style={this.props.isOppShipDeadReducer[0] ? {display:"block"} : {display:"none"}} className="carrier-orizontia" src={Carrier}/>
                }else if(this.props.oppShipsReducer[shipI+1][shipJ]===3){
                    ship=<img alt="ship"  style={this.props.isOppShipDeadReducer[0] ? {display:"block"} : {display:"none"}}className="carrier-katheta" src={Carrier}/>
                }
            }         
        }else if(this.props.oppShipsReducer[i][j]===4){
            for(let k = 0; k < this.props.oppBoardReducer.length; k++){
                for(let l=0; l<this.props.oppBoardReducer.length; l++){
                    if(this.props.oppShipsReducer[k][l] === 4){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.oppShipsReducer[shipI][shipJ+1]===4){
                    ship=<img  alt="ship"  style={this.props.isOppShipDeadReducer[1] ? {display:"block"} : {display:"none"}} className="battleship-orizontia" src={Battleship}/>
                }else if(this.props.oppShipsReducer[shipI+1][shipJ]===4){
                    ship=<img  alt="ship" style={this.props.isOppShipDeadReducer[1] ? {display:"block"} : {display:"none"}} className="battleship-katheta" src={Battleship}/>
                }
            }        
        }else if(this.props.oppShipsReducer[i][j]===5){
            for(let k = 0; k < this.props.oppShipsReducer.length; k++){
                for(let l=0; l<this.props.oppShipsReducer.length; l++){
                    if(this.props.oppShipsReducer[k][l] === 5){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.oppShipsReducer[shipI][shipJ+1]===5){
                    ship=<img alt="ship"  style={this.props.isOppShipDeadReducer[2] ? {display:"block"} : {display:"none"}} className="destroyer-orizontia" src={Destroyer}/>
                }else if(this.props.oppShipsReducer[shipI+1][shipJ]===5){
                    ship=<img  alt="ship" style={this.props.isOppShipDeadReducer[2] ? {display:"block"} : {display:"none"}} className="destroyer-katheta" src={Destroyer}/>
                }
            }          
        }else if(this.props.oppShipsReducer[i][j]===6){
            for(let k = 0; k < this.props.oppShipsReducer.length; k++){
                for(let l=0; l<this.props.oppShipsReducer.length; l++){
                    if(this.props.oppShipsReducer[k][l] === 6){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.oppShipsReducer[shipI][shipJ+1]===6){
                    ship=<img alt="ship"  style={this.props.isOppShipDeadReducer[3] ? {display:"block"} : {display:"none"}} className="destroyer-orizontia" src={Submarine}/>
                }else if(this.props.oppShipsReducer[shipI+1][shipJ]===6){
                    ship=<img  alt="ship"  style={this.props.isOppShipDeadReducer[3] ? {display:"block"} : {display:"none"}} className="destroyer-katheta" src={Submarine}/>
                }
            }            
        }else{
            for(let k = 0; k < this.props.oppShipsReducer.length; k++){
                for(let l=0; l<this.props.oppShipsReducer.length; l++){
                    if(this.props.oppShipsReducer[k][l] === 7){
                        shipI=k;
                        shipJ=l;
                        k=10;
                        l=10;
                    }
                }
            }
            if(shipI ===i && shipJ===j){
                if(this.props.oppShipsReducer[shipI][shipJ+1]===7){
                    ship=<img alt="ship"  style={this.props.isOppShipDeadReducer[4] ? {display:"block"} : {display:"none"}} className="patrol-boat-orizontia" src={Patrol_Boat}/>
                }else if(this.props.oppShipsReducer[shipI+1][shipJ]===7){
                    ship=<img  alt="ship"  style={this.props.isOppShipDeadReducer[4] ? {display:"block"} : {display:"none"}} className="patrol-boat-katheta" src={Patrol_Boat}/>
                }
            }             
        }
        return ship;
    }
    gameIsDone=(myboard,oppboard) =>{
        let mycount=0;
        let oppcount=0;
        for(let i=0; i<myboard.length; i++){
            for(let j=0; j<myboard.length; j++){
                if(myboard[i][j]===2){
                    mycount++;
                }
                if(oppboard[i][j]===2){
                    oppcount++;
                }
            }
        }
        if(mycount===17){
            alert("You Lost!");
            this.props.newGame();  
        }else if(oppcount===17){
            alert("You Won!");
            this.props.newGame();       
        }
    }
    render() {          
        this.gameIsDone(this.props.myBoardReducer,this.props.oppBoardReducer);
        return (
            <div className="fleet">
                <div className="fleet-container">
                    <div className="fleet-myfleet">
                        <div className="fleet-myfleet-name">
                            <span>My Fleet</span>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    {this.createMyTable()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="fleet-fleets">
                        <div className="fleet-myfleet-name">
                            <span>Ships</span>
                        </div>
                        <div className="fleet-fleets-container">
                            <div className="fleet-fleets-container-center">
                                {!this.allShipsAreSet() ?
                                    <div  className="fleet-fleets-container-center-random">
                                        <button onClick={this.props.randomShips}>Random Arrangement</button>
                                    </div>
                                :
                                    !this.props.isGameStarted ?
                                        <div  className="fleet-fleets-container-center-start">
                                            <button onClick={this.props.toBattle}>
                                                <span><FaShip/><br/>To Battle</span>
                                            </button>
                                        </div>
                                    :
                                    <div style={{paddingBottom:"17%"}}/>

                                }
                                {!this.allShipsAreSet() ? 
                                    <div onClick={this.rotateToggle} className="fleet-fleets-container-center-rotate">
                                        <img  alt="rotate"  src={rotate}/>
                                    </div>
                                :
                                    null
                                }
                                {!this.props.isGameStarted ?
                                    <div className="fleet-fleets-container-center-row">
                                        <div>
                                            {!this.isShipSet("Carrier") ?
                                                <div style={this.state.selectedship==="Carrier" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedShip("Carrier")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Carrier</span>
                                                        </div>
                                                        <div className="fleet-fleets-Carrier">
                                                            <img  alt="ship"  style={this.state.rotate ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} src={Carrier}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                            {!this.isShipSet("Battleship") ?
                                                <div style={this.state.selectedship==="Battleship" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedShip("Battleship")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Battleship</span>
                                                        </div>
                                                        <div className="fleet-fleets-Battleship">
                                                            <img  alt="ship"  style={this.state.rotate ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} src={Battleship}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                null
                                            }
                                        </div>
                                        <div>
                                            {!this.isShipSet("Destroyer") ?
                                                <div style={this.state.selectedship==="Destroyer" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedShip("Destroyer")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Destroyer</span>
                                                        </div>
                                                        <div className="fleet-fleets-Destroyer">
                                                            <img  alt="ship" style={this.state.rotate ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} src={Destroyer}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                null
                                            
                                            }
                                            {!this.isShipSet("Submarine") ?
                                                <div style={this.state.selectedship==="Submarine" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedShip("Submarine")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Submarine</span>
                                                        </div>
                                                        <div className="fleet-fleets-Submarine">
                                                            <img  alt="ship" style={this.state.rotate ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} src={Submarine}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                null
                                            }
                                        </div>
                                        <div>
                                            {!this.isShipSet("Patrol_Boat") ?
                                                <div style={this.state.selectedship==="Patrol_Boat" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedShip("Patrol_Boat")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Patrol Boat</span>
                                                        </div>
                                                        <div className="fleet-fleets-Patrol_Boat">
                                                            <img  alt="ship" style={this.state.rotate ? {transform: "rotate(0deg)"} : {transform: "rotate(90deg)"}} src={Patrol_Boat}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            :
                                                null
                                            }
                                        </div>
                                    </div>
                                :
                                    <div className="fleet-fleets-container-center-row">
                                        <div>
                                            {!this.props.myWeaponsReducer[0] ?
                                                <div style={this.state.selectedWeapon==="Carrier-Weapon1" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Carrier-Weapon1")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Carrier-Weapon1</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon">
                                                            <img  alt="weapon" src={Carrier_Weapon1}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }
                                            {!this.props.myWeaponsReducer[1] ?
                                                <div style={this.state.selectedWeapon==="Carrier-Weapon2" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Carrier-Weapon2")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Carrier-Weapon2</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon">
                                                            <img alt="weapon" src={Carrier_Weapon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }      
                                        </div>
                                        <div>
                                            {!this.props.myWeaponsReducer[2] ?
                                                <div style={this.state.selectedWeapon==="Battleship-Weapon" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Battleship-Weapon")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Battleship-Weapon</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon">
                                                            <img alt="weapon" src={Battleship_Weapon}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                        </div>
                                        <div>
                                            {!this.props.myWeaponsReducer[3] ?
                                                <div style={this.state.selectedWeapon==="Destroyer-Weapon1" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Destroyer-Weapon1")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Destroyer-Weapon1</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon">
                                                            <img alt="weapon" src={Destroyer_Weapon1}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                            {!this.props.myWeaponsReducer[4] ?
                                                <div style={this.state.selectedWeapon==="Destroyer-Weapon2" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Destroyer-Weapon2")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Destroyer-Weapon2</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon">
                                                            <img  alt="weapon" src={Destroyer_Weapon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                        </div>
                                        <div>
                                            {!this.props.myWeaponsReducer[5] ?
                                                <div style={this.state.selectedWeapon==="Submarine-Weapon1" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Submarine-Weapon1")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Submarine-Weapon1</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon2">
                                                            <img alt="weapon" style={{transform:"rotate(90deg)"}} src={Submarine_Weapon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                        {!this.props.myWeaponsReducer[6] ?
                                                <div style={this.state.selectedWeapon==="Submarine-Weapon2" ? {border: "2px solid #76c47c"} : {border: "2px solid #505c6a"}} onClick={() =>  this.selectedWeapon("Submarine-Weapon2")}>
                                                    <div>
                                                        <div className="fleet-fleets-label">
                                                            <span>Submarine-Weapon2</span>
                                                        </div>
                                                        <div className="fleet-fleets-weapon2">
                                                            <img alt="weapon" src={Submarine_Weapon2}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                                null
                                            }   
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="fleet-opponentfleet">
                        <div className="fleet-opponentfleet-name">
                            <span>Opponent's Fleet</span>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    {this.createOppTable(this.props.oppBoardReducer)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        myBoardReducer :state.myBoardReducer,
        myShipsReducer :state.myShipsReducer,
        oppBoardReducer:state.oppBoardReducer,
        oppShipsReducer:state.oppShipsReducer,
        myWeaponsReducer:state.myWeaponsReducer,
        oppWeaponsReducer:state.oppWeaponsReducer,
        isGameStarted:state.isGameStarted,
        isOppShipDeadReducer:state.isOppShipDeadReducer
    }
}

const mapDispatchToProps = () =>{
    return {
        newGame,
        setShip,
        randomShips,
        toBattle,
        fireToOpp,
        oppWeapon,
        myWeapon,
        fireToMe,
        isMyShipDead,
        isOppShipDead,
        message
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(Fleet);