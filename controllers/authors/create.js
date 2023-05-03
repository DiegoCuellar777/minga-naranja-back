/* import createHttpError from "http-errors" */
import Author from "../../models/Author.js"

let create = async (req, res, next) => {
    try {
        req.body.active = true
        req.body.user_id = "64526b412a7b29e31a27c5e0"
        /* req.body.user_id = req.user._id; */
        console.log(req.body)
        let one = new Author(req.body)
        await one.save() // llama a la función save() para guardar el autor en la base de datos
        return res.status(201).json({
            author: `${one.name} ${one.last_name}`,
            success: true,
            createdAt: one.createdAt // accede a la propiedad createdAt después de llamar a la función save()
        })
    } catch (error) {
        next(error)
    }
}

export default create