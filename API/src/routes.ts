import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify'
import { CandidateRegisterController } from './controllers/CandidateRegisterController'
import { GetCandidateController } from './controllers/GetCandidateController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request:FastifyRequest, reply:FastifyReply) =>{
        return{ok:true}
    })

    fastify.post("/candidate", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new CandidateRegisterController().handle(request, reply)
    })

    fastify.get("/candidate", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new GetCandidateController().handle(request, reply)
    })
}