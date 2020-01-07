import myBoardReducer from './myBoardReducer';
import myShipsReducer from './myShipsReducer';
import oppBoardReducer from './oppBoardReducer';
import oppShipsReducer from './oppShipsReducer';
import myWeaponsReducer from './myWeaponsReducer';
import oppWeaponsReducer from './oppWeaponsReducer';
import isGameStarted from './isGameStarted';
import isMyShipDeadReducer from './isMyShipDeadReducer';
import isOppShipDeadReducer from './isOppShipDeadReducer';
import messageReducer from "./messageReducer"
import chatReducer from "./chatReducer"
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    myBoardReducer:myBoardReducer,
    myShipsReducer:myShipsReducer,
    oppBoardReducer:oppBoardReducer,
    oppShipsReducer:oppShipsReducer,
    myWeaponsReducer:myWeaponsReducer,
    oppWeaponsReducer:oppWeaponsReducer,
    isGameStarted:isGameStarted,
    isMyShipDeadReducer:isMyShipDeadReducer,
    isOppShipDeadReducer:isOppShipDeadReducer,
    messageReducer:messageReducer,
    chatReducer:chatReducer
});

export default allReducers;