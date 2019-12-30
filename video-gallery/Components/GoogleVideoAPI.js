import axios from 'axios';

const KEY = 'AIzaSyCeo2LI1Gbty6kvRh65HBjnyMcr_ut5oa0';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});