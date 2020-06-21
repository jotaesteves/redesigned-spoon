import HttpService from './httpService';

export default class UnknownService {

    static async getRandomList(page) {
        return HttpService.get('unknown', page)
    }

    static async getRandomResource(id) {
        return HttpService.get(`unknown/${id}`)
    }
}