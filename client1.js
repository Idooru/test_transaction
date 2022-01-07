const axios = require("axios");

(async () => {
    try {
        const result = await axios.get("http://localhost:8080");
        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();
