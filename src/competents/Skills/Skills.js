import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitles">What I Do </span>
        <span className="skillsDescribtion">Reference site about Lorem Ipsum, giving information on its origins,<br /> as well as a random Lipsum generator</span>
        
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Reference site about Lorem Ipsum.</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebDesign</h2>
                    <p>Reference site about Lorem Ipsum.</p>
                    
                </div>
            </div>


            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>Reference site about Lorem Ipsum.</p>

                </div>
            </div>

        </div>
   
    </section>
    
  )
}

export default Skills