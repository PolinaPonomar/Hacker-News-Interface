export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const checkResponse = (res) => {
    if(res.ok) {
        return res.json()
    } 
    return Promise.reject(`Ошибка: ${res.status}`) 
}

export const getStorieById = (id) => {
    return fetch(`${BASE_URL}/item/${id}.json`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
    .then(checkResponse)
};

export const getNewStories = () => {
    return fetch(`${BASE_URL}/newstories.json`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        }
    })
    .then(checkResponse)
    .then((ids) => {
        return Promise.all(
            ids.slice(0, 100).map((id) => getStorieById(id))
        )
    })
};

