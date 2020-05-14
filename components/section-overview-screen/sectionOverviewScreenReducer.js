const initialState = {
    zone: null
};

export const sectionOverviewScreenReducer = (state = initialState, action) => {
    switch(action.type) {
        case("SET_ZONE"):
            return {
                ...state,
                zone: action.payload.zone
            }
        default:
            return state;
    }
}