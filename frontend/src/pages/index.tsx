
import React, { useEffect, useState, useRef, FormEvent } from 'react';
import Link from 'next/link';



export default function CadastroPage() {
  

  return (
    <div className="flex flex-col"style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '50px', width: '400px' }}><b>Bem vindo! clique no link abaixo para ver o teste.</b></h1>

        <Link href="/register" style={{ color: '#33CCFF', textAlign: 'center', marginLeft:'35px' }}>Cadastrar Candidatos</Link>
    </div>
  );
}
