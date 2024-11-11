const BASE_URL = "http://108.60.212.46:8041/api";

const apiController = {
    async fetchData(endpoint, options = {}) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
};

export default apiController;
