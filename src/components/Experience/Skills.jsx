import React from 'react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaPlusSquare 
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills">
          <div className="skills-container">
            <div className="skill-item">
              <FaHtml5 />
              <p>HTML</p>
            </div>
            <div className="skill-item">
              <FaCss3Alt />
              <p>CSS</p>
            </div>
            <div className="skill-item">
              <FaJsSquare />
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <FaReact />
              <p>React.js</p>
            </div>
            <div className="skill-item">
              <FaNodeJs />
              <p>Node.js</p>
            </div>
            <div className="skill-item">
              <FaGitAlt />
              <p>Git</p>
            </div>
            <div className="skill-item">
              <SiMongodb />
              <p>MongoDB</p>
            </div>
            <div className="skill-item">
              <GrMysql />
              <p>MySQL</p>
          </div>
          </div>
        </div>
  )
}

export default Skills