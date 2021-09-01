import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.route.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());

router(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
