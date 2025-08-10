// import Url from "../models/Url.js";
// import { nanoid } from "nanoid";

// export const shortenUrl = async (req, res) => {
//     try {
//         const { original_url } = req.body;
//         if (!original_url) return res.status(400).json({ error: "URL required" });

//         const short_code = nanoid(6);
//         const newUrl = await Url.create({ original_url, short_code });

//         res.json({ short_url: `http://localhost:5000/${short_code}` });
//     } catch (error) {
//         res.status(500).json({ error: "Server error" });
//     }
// };

// export const redirectUrl = async (req, res) => {
//     try {
//         const { shortcode } = req.params;
//         const urlData = await Url.findOne({ short_code: shortcode });

//         if (!urlData) return res.status(404).json({ error: "URL not found" });

//         urlData.visit_count++;
//         await urlData.save();

//         res.redirect(urlData.original_url);
//     } catch (error) {
//         res.status(500).json({ error: "Server error" });
//     }
// };
import Url from "../models/Url.js";
import { nanoid } from "nanoid";

// POST /api/shorten - Create short URL
export const shortenUrl = async (req, res) => {
    try {
        const { original_url } = req.body;
        if (!original_url) return res.status(400).json({ error: "URL is required" });

        const short_code = nanoid(6);

        const newUrl = await Url.create({ original_url, short_code });
        res.json({ short_url: `http://localhost:5000/${short_code}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /:shortcode - Redirect to original URL
export const redirectUrl = async (req, res) => {
    try {
        const { shortcode } = req.params;
        const urlData = await Url.findOne({ short_code: shortcode });

        if (!urlData) return res.status(404).json({ error: "URL not found" });

        urlData.visit_count += 1;
        await urlData.save();

        res.redirect(urlData.original_url);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/admin/urls - Admin page list
export const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find().sort({ createdAt: -1 });
        res.json(urls);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
