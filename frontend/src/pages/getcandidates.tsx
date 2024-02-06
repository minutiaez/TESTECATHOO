import {FiPlus} from 'react-icons/fi'
import React from 'react';
import Link from 'next/link';

export default function CadastroPage() {
    return (
      <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '200px'}}>
        <h1 style={{color: 'white',  marginLeft: '100px'}}><b>Buscar Candidato Ideal</b></h1>

        <form style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
         

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email" style={{color: 'white'}}>Skills:</label>
            <input type="skills" id="skills" placeholder="Habilidades" style={{ marginLeft: '18px' , width:'250px'}} />
            <button><FiPlus size={25} color="#FFF"/></button>
          </div>
         
          <button type="submit"className=' rounded' style={{ backgroundColor: '#215E21', color: 'white', padding: '10px', cursor: 'pointer' }}>Buscar</button>
          <Link href="/register" style={{color:'#33CCFF', textAlign:'center'}}>Cadastrar Candidatos</Link>
        </form>

        <section className="flex flex-col">
            <article className='bg-white rounded p-2'>
                <p><span><b>Nome:</b></span>fulano</p>
                <p><span><b>Skills:</b></span>teste</p>
            </article>
        </section>
      </div>
    );
  }
  