import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const projects = [
    {name : 'StudySync', desc: 'AI powered acadmeic calendar assistant'}
  ];
  
  return (
    <div className="App">
      <nav className='navbar'>
        <h2>Ziyue Lin</h2>
          <div>
            <a href='#home'>Home</a>
            <a href='#projects'>Projects</a>
            <a href='#contacts'>Contact</a>
          </div> 
      </nav>

      <section id='home' className='section'>
        <h1>Nice to Meet You!</h1>
        <p>CS + Economics Student @ UIUC, passionate about AI, design and innovation</p>
        <p>find me on <a href='https://github.com/AKiRiNNI' target='_blank' rel='noreferrer'>Github</a></p>
      </section>

      <section id='projects' className='section'>
        <h2>Projects</h2>
        <div className='project-grid'>
          {projects.map((p, i) => (
            <div key = {i} className='project-card'>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target='_blank' rel='noreferrer>'>View on Github</a>
            </div>
          ))}
        </div>
      </section>

      <section id='contact' className='section'>
        <h2>Contact Me</h2>
        <p>Email</p>
      </section>

      <footer className='footer'>
        <p>&copy; {new Date().getFullYear()} Ziyue Lin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
