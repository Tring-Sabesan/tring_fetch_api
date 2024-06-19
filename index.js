const axios = require('axios');

async function fetchUserData(num) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

module.exports = fetchUserData;
