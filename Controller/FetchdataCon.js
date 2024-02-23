import DataSche from "../Module/DataSche.js";

const FetchdataCon = async (req, res) => {
    try {
        const data = await DataSche.find();
        if (data) {
            res.send(data);
        } else {
            res.send("Con't Data Available In Data base..")
        }

    } catch (error) {
        console.log(`Error From Fetch Data Controller : ${error}`);
    }
}

export default FetchdataCon;