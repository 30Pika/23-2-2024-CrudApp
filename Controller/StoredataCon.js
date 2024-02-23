import DataSche from "../Module/DataSche.js";

const StoredataCon = async (req, res) => {
    try {
        const data = new DataSche(req.body);
        if( await data.save()){
            res.send("Data Store Successfully...!");
        }else{
            res.send("Data Not Store");
        }
    } catch (error) {
        console.log(`Error From Store Data Controller : ${error}`);
    }
}

export default StoredataCon;