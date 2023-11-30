const mongoose = require("mongoose");
require('dotenv').config()

try {
    await mongoose.connect(process.env.URI, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(
        (x) => {
            console.log(`connecter a la bd: ${x.connect[0].name}`)
        }
    )
} catch (error) {
    handleError(error);
    console.log("erreur de connexion");
}

module.exports = dataConfig;