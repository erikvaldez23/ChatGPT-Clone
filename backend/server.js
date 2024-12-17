const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );
        res.json(response.data.choices[0].message);
    } catch (error) {
        console.error("Error in /api/chat:", error.response?.data || error.message);
        res.status(500).json({ error: error.message });
    }
});


app.listen(port, () => console.log(`Server running on port ${port}`));
