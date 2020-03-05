import request from '../utils/request';

export function POST({data, url}) {

    const token = window.localStorage.getItem('cookies') + window.localStorage.getItem('chocolate');
    return request(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token==null ? null: token,
        },
        body: data,
    });
}