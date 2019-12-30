import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 2a4562ca9a76d4d2946ee582db07e81e4d628d224ca7b624dce4bf991044b559'
      }
});