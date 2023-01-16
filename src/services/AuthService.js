import HttpService from "./HttpService";

class AuthService extends HttpService {
    register = async (userData) => {
        try {
            const { data } = await this.client.post("/register", userData);
            return data;
        } catch (error) { }
    };

    login = async (userData) => {
        try {
            const { data } = await this.client.post("/login", userData);
            localStorage.setItem("token", data.token);
            return data;
        } catch (error) { }
    };

    getActiveUser = async () => {
        const { data } = await this.client.get('/me');
        return data
    }

    logout = async () => {
        try {
            const { data } = await this.client.post("/logout");
            localStorage.removeItem("token", data.token);
            return data;
        } catch (error) { }
    };
}

export const authService = new AuthService();
