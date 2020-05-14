import artPieceScreenService from "./artPieceScreenService";

export const getAllArtPieces = () => async dispatch => {
    const response = await artPieceScreenService.getArtPieceInfo(null);
    if(response.status === 'success') {
        dispatch({
            type: 'GET_ALL_ART_OBJECTS',
            payload: []
        });
    } else {
        dispatch({
            type: "GET_ALL_ART_OBJECTS_FAIL"
        })
    }
}

export const setArtPiece = (title, id) => dispatch =>{
    var artPieceObject = {}
    artPieceObject['title'] = title;
    artPieceObject['id'] = id;
    dispatch({
        type: "SET_ART_PIECE",
        payload: artPieceObject
    })
};

export const setArtPieceDescriptions = (basic, spatial, thematic) => dispatch =>{
    var descriptionObject = {}
    descriptionObject['descriptionBasic'] = basic;
    descriptionObject['descriptionSpatial'] = spatial;
    descriptionObject['descriptionThematic'] = thematic;
    dispatch({
        type: 'SET_ART_PIECE_DESCRIPTIONS',
        payload: descriptionObject
    })
};

export const resetArtPiece = () => dispatch => {
    dispatch({
        type: "RESET_ART_PIECE"
    })
};


//response.body