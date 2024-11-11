import apiController from './apiController';

const LOGIN_ENDPOINT = "/userLogin";

export const userLogin = async (credentials) => {
    const payload = {
        email: credentials.username,  
        password: credentials.password,
    };

    return await apiController.fetchData(LOGIN_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(payload),
    });
}