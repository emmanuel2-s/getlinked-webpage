import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT = "https://backend.getlinked.ai";

const responseBody = res => res.body;

const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
    patch: (url, body) =>
        superagent.patch(`${API_ROOT}${url}`, body).then(responseBody)
};


const Hackathon = {
    register: (user) =>
        requests.post('hackathon/registration', user),
    getCatergoryList: () =>
        requests.get('hackathon/categories-list'),
    saveContact: (user) =>
        requests.post('hackathon/contact-form', user),
}

const api = {
    Hackathon,
}
export default api;