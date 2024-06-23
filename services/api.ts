import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.kuky.com',
})

export interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    recaptchaToken: string;
}

export const createUser = (userData: { firstName: string; lastName: string; email: string }) => {
    return api.post('/users', userData)
}

export default api