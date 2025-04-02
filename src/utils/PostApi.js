import axios from "axios";

export const postApi = (path, data) => {
    if (process.env.VUE_APP_ENV==="dev"){
        return axios.post('http://localhost:8787', {
            path:  path,
            env: process.env.VUE_APP_ENV,
            data: data
        })
    }else {
        return axios.post('/public', {
            path:  path,
            env: process.env.VUE_APP_ENV,
            data: data
        })
    }
};

export const postApi2 = (path, data) => {
    if (process.env.VUE_APP_ENV==="dev"){
        return axios.post('http://localhost:8787', {
            path:  path,
            env: process.env.VUE_APP_ENV,
            data: data
        })
    }else {
        return axios.post('/public', {
            path:  path,
            env: process.env.VUE_APP_ENV,
            data: data
        })
    }
};