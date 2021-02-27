import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveysController{
    async create(request: Request, response: Response){
        const {title, description} = request.body;

        const surveysReppository = getCustomRepository(SurveysRepository);

        const survey = surveysReppository.create({
            title,
            description
        })

        await surveysReppository.save(survey);

        return response.status(201).json(survey)

    }

    async show( request: Request, response: Response){
        const surveysReppository = getCustomRepository(SurveysRepository);

        const all = await surveysReppository.find();

        return response.json(all)
    }
}

export{SurveysController}