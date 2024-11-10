import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'> I'm a dedicated and skilled programmer proficient in Java and full stack development with a fervent passion for continuous learning and exploration within the realm of technology. Eager to delve deeper into the technical world, with a strong desire to contribute as a programmer. Committed to honing my skills and embracing new challenges in the dynamic field of programming.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI /UX Design</h2>
                        <p>Skilled in creating intuitive, user-centered designs that enhance user experience through clear and engaging interfaces.hellooooo, this is demo</p>
                    </div>
                </div>
            </div>

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>Java</h2>
                    <p>Proficient in developing robust, object-oriented applications using Java for scalable and high-performance solutions.</p>
                    </div>
                </div>
            </div>

            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>MERN Stack</h2>
                    <p>Experienced in building full-stack web applications using MongoDB, Express.js, React, and Node.js for dynamic and responsive solutions.</p>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default skills