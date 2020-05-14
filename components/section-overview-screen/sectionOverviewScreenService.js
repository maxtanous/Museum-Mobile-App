import axios from "axios";

const baseUrl = 'https://cs2345-db-api.herokuapp.com';

async function getZoneArt(id) {
    const headers = {
        'Content-Type': 'application/json',
    };
    return axios({
        method: 'get',
        url: baseUrl + '/zones/' + id,
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

const sectionOverviewScreenService = {getZoneArt};

export default sectionOverviewScreenService;