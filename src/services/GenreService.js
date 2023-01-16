import HttpService from "./HttpService";

class GenreService extends HttpService {
    getAll = async () => {
        const { data } = await this.client.get('/genres');
        return data;
    }
}


export const genreService = new GenreService();