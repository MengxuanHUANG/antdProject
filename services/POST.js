import request from '../src/utils/request';

export function POST({data, url}) {
    return request(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: data,
    });
}