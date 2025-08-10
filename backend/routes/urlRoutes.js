// import express from "express";
// import { shortenUrl, redirectUrl } from "../controllers/urlController.js";

// const router = express.Router();

// router.post("/api/shorten", shortenUrl);
// router.get("/:shortcode", redirectUrl);

// export default router;
import express from "express";
import { shortenUrl, redirectUrl, getAllUrls } from "../controllers/urlController.js";

const router = express.Router();

router.post("/api/shorten", shortenUrl);
router.get("/api/admin/urls", getAllUrls);
router.get("/:shortcode", redirectUrl);

export default router;
