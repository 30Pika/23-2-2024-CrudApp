import DataSche from "../Module/DataSche.js";

const SearchdataCon = async (req, res) => {
    const data = await DataSche.find(
        { name: { $regex: req.params.key } }
    );
    if (data) {
        res.send(data);
    } else {
        res.send("data Not found");
    }

}

export default SearchdataCon;