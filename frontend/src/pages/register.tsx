
import {FiPlus} from 'react-icons/fi'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';


export default function CadastroPage() {

    
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '200px'}}>
        <h1 style={{color: 'white',  marginLeft: '100px'}}><b>Cadastrar Candidato</b></h1>

        <form style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="nome"style={{color: 'white'}}>Nome:</label>
            <input type="text" id="nome"placeholder="Nome" style={{ marginLeft: '10px' , width:'250px'}} />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{color: 'white'}}>Skills:</label>
            <input type="skills" id="skills" placeholder="Habilidades" style={{ marginLeft: '18px' , width:'250px'}} />
            <button><FiPlus size={25} color="#FFF"/></button>
          </div>
         
          <button type="submit" className=' rounded' style={{ backgroundColor: '#215E21', color: 'white', padding: '10px', cursor: 'pointer' }}>Cadastrar</button>
          <Link href="/getcandidates" style={{color:'#33CCFF', textAlign:'center'}}>Buscar Candidatos</Link>
        </form>
      </div>
    );
  }
  