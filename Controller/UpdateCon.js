import DataSche from "../Module/DataSche.js";

const UpdataCon = async (req, res) => {
    try {
        const result = await DataSche.updateOne(
            { _id: req.params.id },
            {
                $set: req.body,
            }
        );
        if (result) {
            res.send("Data Updeted...");
        }
    } catch (error) {
        console.log(`Error From Updata Controller : ${error}`);
    }
}

export default UpdataCon;