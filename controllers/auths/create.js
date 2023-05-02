import createHttpError from "http-errors";
import User from "../../models/User.js"

let create = async(req,res,next) =>{
    try {
        console.log(req.body);
        req.body.role = 0
        req.body.is_online= true
        req.body.is_verified= false
        req.body.verify_code= "codigo"

        let one = new User(req.body)
        await one.save()
        return res.status(201).json({
            user: one,
            success: true,
            timeStamps: one.createdAt
        })
    } catch (error) {
        next(error)
    }
}

export default create