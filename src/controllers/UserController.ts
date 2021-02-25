import {  Request, response, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController{

    async create( req: Request, res: Response){
        const {name, email} = req.body;

        const usersRepository = getRepository(User);
        
        //SELECT * FROM USERS WHERE EMAIL = "EMAIL"
        // let users = await usersRepository.find();
        // console.log(users)
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        console.log(userAlreadyExists);

        if(userAlreadyExists ){
            return res.status(400).json({
                error: "User already exists"
            })
        }

        const user = usersRepository.create(
            {
                name, email
            }
        );

        await usersRepository.save(user);

        return res.json(user);
    }

}

export{UserController}