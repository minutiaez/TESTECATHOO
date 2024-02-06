import prismaClient from "../prisma";

interface CandidateRegisterProps{
    name: string
    skills: string[];
}
class CandidateRegisterService{
    async execute({name, skills}: CandidateRegisterProps){
        if(!name || !skills){
            throw new Error("Preencha os campos 'Nome' e 'Skills'!!")
        }
        const candidate = await prismaClient.candidate.create({
            data:{
                name,
                skills
            }
        })
        return candidate
    }
}

export {CandidateRegisterService}