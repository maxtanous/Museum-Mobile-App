import {combineReducers} from 'redux';
import {artPieceScreenReducer} from '../components/art-piece-screen/artPieceScreenReducer';
import {sectionOverviewScreenReducer} from '../components/section-overview-screen/sectionOverviewScreenReducer'

const allReducers = combineReducers({
    artPieceData: artPieceScreenReducer,
    zoneData: sectionOverviewScreenReducer
});

export default allReducers;