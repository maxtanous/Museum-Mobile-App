export const setZone = (zone) => dispatch =>{
    var zoneObject = {};
    zoneObject['zone'] = zone;
    dispatch({
        type: "SET_ZONE",
        payload: zoneObject
    })
}
