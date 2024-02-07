import {FastifyRequest, FastifyReply}  from "fastify"
import { GetAllCandidatesServices } from "../services/GetAllCandidatesServices"

class GetAllCandidatesController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getAllCandidatesService = new GetAllCandidatesServices();

        const candidates = await getAllCandidatesService.execute();

        reply.send(candidates)
    }
}

export{GetAllCandidatesController}