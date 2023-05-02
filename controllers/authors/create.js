/* import createHttpError from "http-errors" */
import Author from "../../models/Author.js"

let create = async (req, res, next) => {
    try {
        req.body.active= true,
        req.body.user_id= "6450e6a056bfbd76de7cb23b",
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