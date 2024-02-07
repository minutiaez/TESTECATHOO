import prismaClient from "../prisma";

class GetAllCandidatesServices{
    async execute(){

        const candidates = await prismaClient.candidate.findMany()

        return candidates;
    }
}

export { GetAllCandidatesServices };