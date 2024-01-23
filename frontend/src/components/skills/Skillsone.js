import React from 'react'
import '../../static/skillsone.scss'
import styled from 'styled-components';

const Ability = styled.div`
width: ${props => props.ability}%;
`;
function Skillsone() {

    const mainSkills = [
        { lang: 'HTML5', ability: 80 },
        { lang: 'CSS3', ability: 80 },
        { lang: 'JavaScript', ability: 70 },
        { lang: 'jQuery', ability: 50 },
        // { lang: 'Vue.js',  ability: 20 },
        { lang: 'React',  ability: 70 },
        { lang: 'TypeScript',  ability: 30 },
        { lang: 'Next.js',  ability: 30 },
        { lang: 'SCSS', ability: 60 },
        // { lang: 'Bootstrap',  ability: 70 },
        // { lang: 'Semantic UI',  ability: 70 },
        // { lang: 'Figma', ability: 70 },
        { lang: 'MySQL', ability: 30 },
        { lang: 'Github', ability: 40 },
    ];
  return (
    <div className='skills-container'>
        <h2>Main Skills</h2>
        <ul>
                {
                    mainSkills.map((ele) => {
                        return (
                            <li key={`${ele.lang}-${ele.ability}`}>
                                <div className="skill-name">{ele.lang}</div>
                                <div className="ability-bar">
                                    <Ability ability={ele.ability}>
                                        <div className="ability-percent">
                                            <span className="percent">{ele.ability} %</span>
                                        </div>
                                    </Ability>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta fugiat nam maxime sit laudantium aspernatur expedita sunt saepe, nobis labore doloribus similique quae! Quas doloribus molestiae rem repellendus reiciendis!</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
      
    </div>
  )
}

export default Skillsone
