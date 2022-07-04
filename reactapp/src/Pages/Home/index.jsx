import React, { useState } from 'react';
import './styles.css';
import { Card } from '../../Componentes/Card';

export function Home() {
  const [studentName, setStudentName] = useState('Amanda');
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const novoStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
  }
  
  setStudents(prevState => [...prevState, novoStudent]);
  
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      
      <input
        type="text"
        placeholder="Insira um nome..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button id="addButton" onClick={handleAddStudent}>
        Adicionar
      </button>
      
      {
        student.map(student => <Card name={student.name} time={student.time} />)
      }
    </div>
  )
}
