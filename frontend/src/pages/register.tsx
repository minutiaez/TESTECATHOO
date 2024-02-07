import { FiPlus } from 'react-icons/fi';
import React, { useEffect, useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { api } from './api/api';

interface CandidateProps {
  id: string;
  name: string;
  skills: string[];
  created_at: string;
}

export default function CadastroPage() {
  const [candidates, setCandidates] = useState<CandidateProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);

 
  const [skills, setSkills] = useState<string[]>(['']);

  useEffect(() => {
    loadCandidates();
  }, []);

  async function loadCandidates() {
    const response = await api.get<CandidateProps[]>("/candidates");
    setCandidates(response.data);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!nameRef.current?.value) return;

    const response = await api.post("/candidate", {
      name: nameRef.current?.value,
      skills: skills 
    })

    setCandidates(allCandidates => [...allCandidates, response.data])
  }

 
  const handleAddSkill = () => {
    setSkills([...skills, '']); 
  };

  
  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...skills];
    newSkills[index] = value.toUpperCase();
    setSkills(newSkills);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '200px' }}>
      <h1 style={{ color: 'white', marginLeft: '100px' }}><b>Cadastrar Candidato</b></h1>

      <form style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="nome" style={{ color: 'white' }}>Nome:</label>
          <input type="text" 
            id="nome" 
            placeholder="Nome" 
            style={{ marginLeft: '10px', width: '250px' }}
            ref={nameRef} />
        </div>

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
              <button type="button" onClick={handleAddSkill}><FiPlus size={25} color="#FFF" /></button>
            )}
          </div>
        ))}

        <button type="submit" 
          className=' rounded' 
          style={{ backgroundColor: '#215E21', color: 'white', padding: '10px', cursor: 'pointer' }}>Cadastrar</button>
        <Link href="/getcandidates" style={{ color: '#33CCFF', textAlign: 'center' }}>Buscar Candidatos</Link>
      </form>

      <section className="flex flex-col gap-3">
        {candidates.map((candidate) => (
          <article 
          key={candidate.id} 
          className='bg-white rounded p-2 hover:scale-105 duration-200'>
            <p><span><b>Nome:</b>{candidate.name}</span></p>
            <p><span><b>Skills:</b></span>{candidate.skills.join(', ')}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
