import { Router, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { userModel } from "../db";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import z, { ZodObject } from 'zod';

const userRouter: Router = Router();
dotenv.config();

const secret = process.env.JWT_SECRET; 


userRouter.post('/signup', async (req: Request,res: Response)=>{
    console.log("Signup route hit");

    const reqBody  = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8,"Password should have atleast 8 length").max(20).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,"Password must include uppercase, lowercase, number, and special character")

    })
    const SafeData = reqBody.safeParse(req.body);
    if (!SafeData.success){
        return res.status(400).json({
            error: SafeData.error.issues[0].message
        });
    };

    const {username, password} = SafeData.data;

    const hashedPassword =  await bcrypt.hash(password,3)

    try {
        await userModel.create({
            username: username,
            password: hashedPassword,
        });
        res.status(200).json({
            message:'User Signed up!'
        })
    } catch (error) {
        res.status(500).json({
            error: `${error}`
        });
    };

});


userRouter.post('/signin', async (req:Request,res:Response)=>{

    const {username,password} = req.body;

    let user;
    let passwordMatch;

    try {
        user = await userModel.findOne({
            username:username
        });
        if(!user){
            return res.status(403).json({
                message:"Incorrect Username"
            });
        }
        passwordMatch = await bcrypt.compare(password,user.password);
        if (passwordMatch){
            const token = jwt.sign({
                token: user._id.toString()
            },secret as string, {expiresIn: '1h'});
            return res.status(200).json({
                token:token
            })
        }else{
            return res.status(403).json({
                message:"Incorrect Password"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
    


})


export{
    userRouter
}