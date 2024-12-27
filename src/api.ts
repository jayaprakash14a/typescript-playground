import {string, z} from 'zod';
import express from 'express';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1),
    email: z.string().min(10),
    age: z.number().min(18),
})

type userProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req,res)=>{
    const {success} = userProfileSchema.safeParse(req.body);
    let updateBody: userProfile = req.body;

    if(!success){
        res.status(411).json({});
        return;
    }

    res.json({message: "user updated"});

});

app.listen(3000);