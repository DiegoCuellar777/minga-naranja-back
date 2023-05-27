import ReactionModel from "../../models/Reactions.js";

let get_reaction = async (req, res, next) => {

    const { id } = req.user
    const user = id
    const name = req.query.name
    const sort = req.query.sort

    try {
        let all_reaction = await ReactionModel.find({ user_id: user, name: name }).sort(sort) 
        return res.status(200).json({
            reaction: all_reaction,
            succes: true,
        })
    } catch (error) {
        console.log(req.body.data)
        console.log(error)
        next(error)
    }
}

export default get_reaction

