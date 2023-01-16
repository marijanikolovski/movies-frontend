import HttpService from "./HttpService";

class AuthService extends HttpService {
    register = async (userData) => {
        try {
            const { data } = await this.client.post("/register", userData);
            return data;
        } catch (error) { }
    };

    getActiveUser = async () => {
        const { data } = await this.client.get('/me');
        return data
    }
}

export const authService = new AuthService();
