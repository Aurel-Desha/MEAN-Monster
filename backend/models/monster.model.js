const mongoose = require("mongoose");
const schema = mongoose.Schema;

const monsterModel = new schema({
    name: {
        type: String,
        required: true, unique: true
    },
    pasword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true, enum: ['Warrior', 'Alchemist', 'Sorcerer', 'Spies', 'Enchanter']
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'Monster'
        },
        {
            Freindsice: {
                type: Date,
                default: Date.now
            }
        }
    
    ],
},
    {
        timestamps: true
    }
); 

module.exports = mongoose.model("Monster", monsterModel);
