module.exports = (req,res,next) =>{
    if(req.query.user === "Ada" || req.query.user === "Greta" || req.query.user === "Vim" || req.query.user === "Tim"){
        next()     
    } else {
        return res.send("No tienes los privilegios para ingresar")
    }
}