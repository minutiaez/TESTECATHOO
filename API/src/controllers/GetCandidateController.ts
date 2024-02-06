// GetCandidateController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { GetCandidateService } from "../services/GetCandidateService";

class GetCandidateController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    
      const {skills} = request.query as {skills: string[]};

      if (!skills ) {
        throw new Error("Invalid or missing skills parameter");
      }

      const getCandidateService = new GetCandidateService();
      const bestCandidate = await getCandidateService.execute(skills);

      reply.code(200).header("Content-Type", "application/json").send(bestCandidate);
    
    }
  }


export { GetCandidateController };
