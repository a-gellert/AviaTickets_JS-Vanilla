import api from '../js/services/apiService';

api.countries().then(res => console.log(res));
api.cities().then(res => console.log(res));