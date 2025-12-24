
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendCommand = async (command: string) => {
    try {
        const response = await api.post('/command', { command });
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        return {
            response: { text: "Error: Could not connect to JARVIS Core." },
            execution: { success: false }
        };
    }
};
