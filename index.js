const express = require("express");
const { getLocationFromIp } = require("./service");
require("dotenv").config();

const { IPSTACK_KEY } = process.env;
const app = express();

app.enable("trust proxy");
app.get("/", async (req, res) => {
    const { data } = await getLocationFromIp(req.ip, IPSTACK_KEY);
    const {
        location: { country_flag_emoji }
    } = data;

    res.send(`You are in ${country_flag_emoji}`);
});

app.listen(3000, () => console.log(`App listening on port ${3000}`));
