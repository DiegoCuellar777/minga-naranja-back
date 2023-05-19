import Chapter from "../../models/Chapter.js";

const update = async(req, res, next) => {
    const {_id} = req.params
    const chapterData = req.body

        try {
            let update = await Chapter.findByIdAndUpdate(
                _id,
                chapterData,
                { new: true }
            )
            return res.status(200).json({
                success: true,
                message: "updated",
                update
            })
        } catch (error) {
            next(error)
        }

}

export default update