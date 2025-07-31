import { Router, Response, Request } from "express";
import { AuthRequest, userMiddleware } from "../middleware/user";
import { contentModel, linkModel, userModel } from "../db";
const brainRouter: Router = Router();

brainRouter.post("/share", userMiddleware,async (req: AuthRequest, res: Response) => {
  const isShared: boolean = req.body.share === true;
  try {
    if (isShared) {

      const user = await userModel.findOne({
        _id: req.userId,
      });
      console.log(user);
      
      if (user) {
        const hash: string = user.username;
        await linkModel.create({
          hash,
          userId: req.userId,
        });
        return res.status(200).json({
          link: hash,
        });
      };
    }else{
        return res.json({
            message: 'Not yet Shared'
        })
    }
  } catch (error) {
    res.status(500).json({
        message:`Internal Server Errorsssssss, ${error}`
    })
  }
});

brainRouter.get('/shared/:shared_link',userMiddleware, async (req:AuthRequest, res:Response)=>{
    const sharedLink: string = req.params.shared_link;

    try {
        const sharedUser = await linkModel.findOne({
            hash:sharedLink
        });
        if (sharedUser){
            const user = await userModel.findOne({
                _id: sharedUser.userId
            });
            const contents = await contentModel.find({
                userId: sharedUser.userId
            });
            
            if (user){
                return res.status(200).json({
                    username: user.username,
                    contents: contents
                })
            }else{
                return res.status(403).json({
                    message: 'Invalid link'
                })
            }
        }else{
              return res.status(404).json({ message: "Shared link not found" });
        }
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error'
        })
    }




})


export { brainRouter };
