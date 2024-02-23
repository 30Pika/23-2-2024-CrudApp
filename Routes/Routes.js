import express from "express";
import StoredataCon from "../Controller/StoredataCon.js";
import FetchdataCon from "../Controller/FetchdataCon.js";

const router = express.Router();

//Data Store in Database Api
router.post("/StoreData",StoredataCon);

//Data get From Database Api
router.get("/FetchData",FetchdataCon);

export default router;