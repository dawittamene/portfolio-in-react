import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Jon</span><br />Web Designer</span>
            <p className="intropara">Reference site about Lorem Ipsum, giving information on its origins,<br /> as well as a random Lipsum generator</p>
            <Link><button className="btn">
                <img src={btnImg} alt="" className='btnImg'/> Hire Me</button></Link>
        </div>
        <img src={bg} alt="backgroundimg" className='bg' />

    </section>

  )
}

export default Intro