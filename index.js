const express = require("express");
const { getLocationFromIp } = require("./service");
require("dotenv").config();

const { IPSTACK_KEY } = process.env;
const app = express();
var locationData;
let count = 0;
const getData = async ({ ip }) => {
    if (!locationData) {
        console.log(++count);
        try {
            const { data } = await getLocationFromIp(ip, IPSTACK_KEY);
            locationData = data;
        } catch (err) {
            console.error(`ERROR: Could not get location data! – ${err}`);
        }
    }
};

const generatePage = ({ content, title }) => `
<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <style>
            .body{
                height: 100vh;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;

            }
            .links {
                flex: 1;
                display: flex;
                justify-content: space-around;
            }
        </style>
    </head>
    <body class=body>
            ${content}
    </body>
</html>
`;

const generateContent = content => `<h1>You are ${content}</h1>`;

app.enable("trust proxy");

app.get("/", (req, res) => {
    getData({ ip: req.ip });
    const title = "Where you at?";
    const content = `
        <div style="display: flex; flex:1; flex-direction: column; justify-content: center; align-items: space-around;">
            <h1>Where you are:</h1>
            <div class="links" >
                <a href='continent'>Continent</a>
                <a href='country'>Country</a>
                <a href='region'>Region</a>
                <a href='city'>City</a>
                <a href='coordinates'>Coordinates</a>
            </div>
        </div>
    `;

    res.send(generatePage({ title, content }));
});

app.get("/country", (req, res) => {
    getData({ ip: req.ip });
    const {
        country_name,
        location: { country_flag_emoji }
    } = locationData;
    const title = `Country – ${country_name}`;
    const content = generateContent(
        `in ${country_name === "United States" ? "The" : ""} ${country_name} ${country_flag_emoji}`
    );

    res.send(generatePage({ title, content }));
});

app.get("/continent", (req, res) => {
    getData({ ip: req.ip });
    const { continent_name } = locationData;
    const title = `Continent – ${continent_name}`;
    const content = generateContent(`in ${continent_name}`);

    res.send(generatePage({ title, content }));
});

app.get("/region", (req, res) => {
    getData({ ip: req.ip });
    const { region_name } = locationData;
    const title = `Region – ${region_name}`;
    const content = generateContent(`in ${region_name}`);

    res.send(generatePage({ title, content }));
});

app.get("/city", (req, res) => {
    getData({ ip: req.ip });
    const { city } = locationData;
    const title = `City – ${city}`;
    const content = generateContent(`in ${city}`);

    res.send(generatePage({ title, content }));
});

app.get("/coordinates", (req, res) => {
    getData({ ip: req.ip });
    const { latitude, longitude } = locationData;
    const coordinates = `at Longitude: ${longitude}, Latitude: ${latitude}`;
    const title = `Coordinates – ${coordinates}`;
    const content = generateContent(`at ${coordinates}`);

    res.send(generatePage({ title, content }));
});

app.listen(3000, () => console.log(`App listening on port ${3000}`));
