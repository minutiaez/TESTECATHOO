import { FiPlus } from 'react-icons/fi';
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { api } from './api/api';

interface CandidateProps {
  id: string;
  name: string;
  skills: string[];
}

export default function GetCandidatePage() {
  const [skills, setSkills] = useState<string[]>(['']);
  const [candidate, setCandidate] = useState<CandidateProps | null>(null);

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const skillsQuery = skills.join('\n'); 
      const encodedSkills = encodeURIComponent(skillsQuery); 

      const response = await api.get<CandidateProps>(`/candidate?skills=${encodedSkills}`);
      setCandidate(response.data);
    } catch (error) {
      console.error("Não conseguimos buscar o candidato:", error);
      setCandidate(null);
    }
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value.toUpperCase();
    setSkills(newSkills);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '200px' }}>
      <h1 style={{ color: 'white', marginLeft: '100px' }}><b>Buscar Candidato Ideal</b></h1>

      <form style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }} onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <label htmlFor={`skill-${index}`} style={{ color: 'white' }}>Skills:</label>
            <input
              type="text"
              id={`skill-${index}`}
              placeholder="Habilidades"
              style={{ marginLeft: '18px', width: '250px' }}
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />

            {index === skills.length - 1 && (
              <button 
                type="button" 
                onClick={handleAddSkill}>
                <FiPlus size={25} color="#FFF" />
              </button>
            )}
          </div>
        ))}

        <button 
          type="submit" 
          className=' rounded' 
          style={{ backgroundColor: '#215E21', color: 'white', padding: '10px', cursor: 'pointer' }}>Buscar</button>
        <Link href="/register" style={{ color: '#33CCFF', textAlign: 'center' }}>Cadastrar Candidatos</Link>
      </form>

      <section className="flex flex-col">
        {candidate && (
          <article className='bg-white rounded p-2 hover:scale-105 duration-200'>
            <p><span><b>Nome:</b>{candidate.name}</span></p>
            <p><span><b>Skills:</b>{candidate.skills.join(', ')}</span></p>
          </article>
        )}

        {(!candidate || !candidate.name || candidate.skills.length === 0) && (
          <article className='bg-white rounded p-2 hover:scale-105 duration-200'>
            <p><span><b>Nenhum candidato correspondente.</b></span></p>
          </article>
        )}
      </section>
    </div>
  );
}
