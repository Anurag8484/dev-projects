import { Router, Request, Response } from "express";
import { contentModel, tagModel } from "../db";
import { userMiddleware, AuthRequest } from "../middleware/user";

const contentRouter: Router = Router();


contentRouter.post('/add',userMiddleware, async (req:AuthRequest,res:Response)=>{
    const { link, type, title, tags} = req.body;

    if (!link || !type || !title || !tags){
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
            userId: req.userId
        });
        res.status(200).json({
            message:'Content created.'
        })
    } catch (error) {
        return res.status(500).json({
            message: `Internal Server Error, ${error}`
        })
    }

});


contentRouter.get('/view',userMiddleware,async (req:AuthRequest,res:Response)=>{
    try {
        const contents = await contentModel.find({userId:req.userId})
        return res.status(200).json({
            contents: contents
        })
    } catch (error) {
        return res.status(500).json({
            message: `Internal Server Error, ${error}`
        })
    } 
});

contentRouter.delete('/delete/:id',userMiddleware,async (req:AuthRequest,res:Response)=>{
    const contentId = req.params.id;
    console.log(contentId);
    console.log(req.userId);
    
    
    try {
        console.log("1");
        
        const deleteRes = await contentModel.deleteOne({
            _id:contentId,
            userId: req.userId
        });
        if(deleteRes.deletedCount === 0){
            return res.status(403).json({
                message: 'Content not found'
            });
        };
        console.log("2");
        return res.status(200).json({
            message: 'Content deleted'
        })
    } catch (error) {
        console.log("3");
        return res.status(500).json({
            message: `${error}`
        })
    }
})

export{
    contentRouter
}