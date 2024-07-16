import axios from "axios";

const IP = '192.168.100.11'

export const login = async (email, password) => {
    try {
        const response = await axios.post(`http://${IP}:5000/api/login`, {
            email,
            password,
        }, {
            withCredentials: true // Asegura que las credenciales se envíen con la solicitud si es necesario
        });

        if (response.data) {
            return response.data
        } else {
            console.error("Login error: Unexpected status", response.status);
            return false;
        }
    } catch (error) {
        console.error("Login error:", error);
        return false; // Asegúrate de devolver false en caso de error
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`http://${IP}:5000/api/logout`, {}, {
            withCredentials: true // Asegura que las credenciales se envíen con la solicitud si es necesario
        });

        if (response.status === 200) {
            return true;
        } else {
            console.error("Logout error: Unexpected status", response.status);
            return false;
        }
    } catch (error) {
        console.error("Logout error:", error);
        return false; // Asegúrate de devolver false en caso de error
    }
};

export const register = async (username, email, password) => {
    try {
        const response = await axios.post(`http://${IP}:5000/api/register`, {
            username,
            email,
            password,
        });

        if (response.data) {
            return true;
        } else {
            console.error("Register error: Unexpected status", response.status);
            return false;
        }
    } catch (error) {
        console.error("Register error:", error);
        return false; // Asegúrate de devolver false en caso de error
    }
};