import axios from "axios";

export default async function sendRequest(url, method='GET', payload=null){
    
    let data;

    const options = { method };

    const res = await axios(url, options)
        return res.data;
}

export async function sendRequestAPI(url, method='GET', payload=null){
    
    let data;

    const options = { method };

    const res = await axios(url, options)
        return res.data;
}