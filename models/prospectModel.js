const mongoose = require("mongoose");

const ProspectSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        position: String,
        college: String,
        age: Number,
        height: String,
        weight: String
    },
    {
        collection: 'draft-prospects'
    }
)

const Prospect = mongoose.model("Prospect", ProspectSchema);

module.exports = Prospect;
