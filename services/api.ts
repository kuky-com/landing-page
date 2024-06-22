import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000', // Adjust this if your backend runs on a different port
})

export const createUser = (userData: { firstName: string; lastName: string; email: string }) => {
    return api.post('/users', userData)
}

export const verifyCaptcha = (captchaToken: string) => {
    return api.post('/verify-captcha', { captcha: captchaToken })
}

export default api