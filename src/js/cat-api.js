import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_H7U1N5cgm9uvYmVTabhiqFJPMgW8iLwIs9tSOcUFn1agAedsNaWWVcfIqWIA1Gqh";


export function fetchBreeds(){
    return axios.get('https://api.thecatapi.com/v1/breeds')
  .then(function (response) {
    return response.data;
  });
}

export function fetchCatByBreed(breedId){
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
  .then(function (response) {
    // console.log(response.data[0])
    return response.data[0];
  });
}
