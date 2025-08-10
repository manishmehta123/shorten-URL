// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import urlRoutes from "./routes/urlRoutes.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://manish-kumar_code:Manish%4012345@cluster0.c7nbszl.mongodb.net/urlshortener")
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch(err => console.error(err));

// app.use("/", urlRoutes);

// app.listen(5000, () => console.log("🚀 Server running on port 5000"));
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://manish-kumar_code:Manish%4012345@cluster0.c7nbszl.mongodb.net/urlshortener")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Error:", err));

app.use("/", urlRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
