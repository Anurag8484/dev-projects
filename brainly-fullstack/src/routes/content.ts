import { Router, Request, Response } from "express";
import { contentModel, tagModel } from "../db";

const contentRouter: Router = Router();


contentRouter.post('/add', async (req:Request,res:Response)=>{
    const { link, type, title, tags, userId} = req.body;

    if (!link || !type || !title || !tags || !userId ){
            return res.status(403).json({
                message:'Please fill all the required fields.'
            });
    };

    try {

        const tagIds = [];
        for (let tagTitle of tags){
            let tag = await tagModel.findOne({
                title: tagTitle
            });
            if(!tag){
                tag = await tagModel.create({
                    title: tagTitle
                })
            };
            tagIds.push(tag._id);
        }

        await contentModel.create({
            link,
            type,
            title,
            tags: tagIds,
            userId
        });
        res.status(200).json({
            message:'Content created.'
        })
    } catch (error) {
        return res.status(500).json({
            message: `Internal Server Error, ${error}`
        })
    }

})

export{
    contentRouter
}