import {FastifyRequest, FastifyReply}  from "fastify"
import { CandidateRegisterService } from "../services/CandidateRegisterService"

class CandidateRegisterController{
    async handle(request : FastifyRequest, reply: FastifyReply){
        const {name, skills}= request.body as {name: string, skills: string[]};
  


        const candidateService = new CandidateRegisterService();
        const candidate =  await candidateService.execute({name, skills});

        reply.send(candidate)
    }
}

export{CandidateRegisterController}