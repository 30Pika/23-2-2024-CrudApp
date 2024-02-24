import express from "express";
import StoredataCon from "../Controller/StoredataCon.js";
import FetchdataCon from "../Controller/FetchdataCon.js";
import UpdataCon from "../Controller/UpdateCon.js";
import DeletedataCon from "../Controller/DeletdataCon.js";
import SearchdataCon from "../Controller/SearchdataCon.js";

const router = express.Router();

//Data Store in Database Api
router.post("/StoreData",StoredataCon);

//Data get From Database Api
router.get("/FetchData",FetchdataCon);

//Data Updata From Database Api
router.put("/UpdataData/:id",UpdataCon);

// Data Delete from Database Api
router.delete("/DeleteData/:id",DeletedataCon);

//Data Search From Database Api 
router.get("/SearchData/:key",SearchdataCon);

export default router;