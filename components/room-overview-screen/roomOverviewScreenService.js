import axios from "axios";

const baseUrl = 'https://cs2345-db-api.herokuapp.com';

async function getZones() {
    const headers = {
        'Content-Type': 'application/json',
    };
    return axios({
        method: 'get',
        url: baseUrl + '/zones/all',
        headers: headers
    })
    .then((response) => {
        return {
            'status': 'success',
            'body' : response.data
        }
    })
    .catch((error) => {
        let e = error;
        if(e === null || e === undefined){
            e = "server error";
        }
        console.log(e);
        return {
            'status': 'failed',
            'body': []
        }
    })
};

const roomOverviewScreenService = {
    getZones
};

export default roomOverviewScreenService;