import prismaClient from "../prisma";



class GetCandidateService {
  async execute(skills: string[]): Promise<any> {
    if (!skills || skills.length === 0) {
      throw new Error("Skills parameter is required");
    }

    const candidates = await prismaClient.candidate.findMany();

    if (!candidates || candidates.length === 0) {
        const error: any = new Error("No matching candidate found");
        error.statusCode = 404; // Código de status para "Not Found"
        throw error;
      
    }

    let bestCandidate = null;
    let bestSkillsMatch = 0;

    for (const candidate of candidates) {
      const candidateSkills = candidate.skills || [];

      const matchingSkills = candidateSkills.filter((skill) =>
        skills.includes(skill)
      );

      if (matchingSkills.length > bestSkillsMatch) {
        bestSkillsMatch = matchingSkills.length;
        bestCandidate = candidate;
      }
    }

    if (!bestCandidate) {
      const error: any = new Error("No matching candidate found");
      error.statusCode = 404; // Código de status para "Not Found"
      
      throw error;
    }

    return bestCandidate;
  }
}

export { GetCandidateService };