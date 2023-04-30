import createHttpError from "http-errors";
import Chapter from "../../models/Chapter.js";

let create = async(req,res,next) => {
    try {
        
        let one = await new Chapter(req.body)
        await one.save()
        return res.status(201).json({
            title: one.title,
            success: true,
            timestamps: one.createdAt
        })

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default create