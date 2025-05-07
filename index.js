// Required dependencies and variable setup
const axios = require("axios");
const token = ""; // get token from link on next line
const baseURL = "http://api.coinlayer.com/api/live";

// Configurable variables
let crypto = "XMR";
let currency = "CAD";

let fetchURL = `${baseURL}?access_key=${token}&target=${currency}&symbols=${crypto}`;

async function fetchData() {
    // Fetch API data
    let res = await axios.get(fetchURL);
    // Modify to only go to 2 decimal places
    let value = Math.round(res.data.rates.XMR * 100) / 100;
    // Print to console
    console.clear()
    console.log(value);
}

fetchData();
setInterval(fetchData, 1000 * 60 * 60 * 24);
