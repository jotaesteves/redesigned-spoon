import HttpService from './httpService';

export default class UserService {

    static async getUsers(page) {
        return HttpService.get('users', page)
    }

    static async getUser(id) {
        return HttpService.get(`users/${id}`)
    }
}