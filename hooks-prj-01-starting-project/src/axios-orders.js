import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e9f51.firebaseio.com/'
});

export default instance;