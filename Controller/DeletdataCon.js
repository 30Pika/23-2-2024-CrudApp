import DataSche from "../Module/DataSche.js";

const DeletedataCon = async (req, res) => {
    try {
        const result = await DataSche.deleteOne({ _id: req.params.id });
        if (result) {
            res.send("Data Delete SuccessFully...");
        } else {
            res.send("Data Not Deleted");
        }
    } catch (error) {
        console.log(`Error From Delete Controller : ${error}`);
    }
}

export default DeletedataCon;