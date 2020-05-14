const initialState = {
    artPieces: [],
    title: '',
    id: null,
    descriptionBasic: '',
    descriptionSpatial: '',
    descriptionThematic: ''
};

export const artPieceScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case('GET_ALL_ART_OBJECTS'):
            return {
                ...state,
                artPieces: action.payload
            }
        case('GET_ALL_ART_OBJECTS_FAIL'):
            return {
                ...state,
                artPieces: []
            }
        case('SET_ART_PIECE'):
            return {
                ...state,
                title: action.payload.title,
                id: action.payload.id
            }
        case('SET_ART_PIECE_DESCRIPTIONS'):
            return {
                ...state,
                descriptionBasic: action.payload.descriptionBasic,
                descriptionSpatial:  action.payload.descriptionSpatial,
                descriptionThematic: action.payload.descriptionThematic
            }
        case("RESET_ART_PIECE"):
            return initialState;
        default:
            return state;
    }
}