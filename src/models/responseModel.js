const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true,
    },
    response: {
        type: Object, // mongoose.Schema.Types.Mixed,
        required: true,
    },
    // married: {
    //     type: Boolean,
    //     required: true,
    // },
    // kids: {
    //     type: Number,
    //     required: true,
    // },
    // coffee_consumption: {
    //     type: Number,
    //     required: true,
    // }
}, {
    timestamps: true
})

module.exports = mongoose.model('response', responseSchema)
