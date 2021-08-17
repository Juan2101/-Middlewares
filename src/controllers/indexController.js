const path = require("path");

module.exports = {
    index : (req,res) => {
        return res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    about : (req,res) => {
        return res.send("about")
    },
    services : (req,res) =>{
        return res.send("services")
    },
    admin : (req,res) =>{
        return res.send("Hola admin: " + req.query.user)
    }
}