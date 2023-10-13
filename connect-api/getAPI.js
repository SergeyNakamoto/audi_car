// import axios from 'axios';

function fetchCarData() {
    const audiUrl = 'http://localhost:3000/audi_cars';
    const prodDetailUrl = 'http://localhost:3000/product-detail';
    const bmwUrl = 'http://localhost:3000/bmw_cars';

    return axios.all([axios.get(audiUrl), axios.get(bmwUrl),axios.get(prodDetailUrl)])
        .then(axios.spread((audiResponse, bmwResponse, prodDetailResponse) => {
            return {
                audiCars: audiResponse.data,
                bmwCars: bmwResponse.data,
                product_detail: prodDetailResponse.data
            };
        }))
        .catch(error => {
            console.error('Error fetching car data:', error.message);
            throw error;
        });
}

export default fetchCarData;
