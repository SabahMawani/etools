import React, { useLayoutEffect, useRef } from 'react';
import MImg from './../../assets/main.jpg';
import './mainpage.css';
import {gsap} from "gsap";

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: true,
   variableWidth: true,
   swipeToSlide: true,
   edgeFriction: 0.15,
};

function Mainpage(){
    
    const content = useRef();
    setTimeout(() => {}, 2000);
    
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".header-heading",  {
                y: 120,
                duration: 1.5,
                opacity: 1 
            });
        }, content);
        setTimeout(() => {}, 1000);

        ctx = gsap.context(() => {
            gsap.to(".header-text",  {
                y: -90,
                duration: 1.5,
                opacity: 1 
            });
        }, content);


        return () => ctx.revert();
    });
          
    
    return(
        <div className='container-main'>
            <div className="content-wrapper">
                <img className='bg-img' src={MImg} alt="background" />
                <div className="img-shadow"></div>
                <div className="content" ref={content}>
                    <div className='header-text-container'>
                        <h1 className='header-heading'>
                            E-Tools
                        </h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <em>
                    <h4><b>Why E-tools?</b></h4>
                    <p>We have a number of tools on our website that might help you write better. You can quickly rewrite and summarise your writing to increase its effectiveness by using our paraphrasing and summarising tools. Having trouble coming up with the right phrase? You're covered with our thesaurus choice. You can refresh your memory of English grammar principles by using our grammar notes and quiz. Also, if you want to increase your typing speed, our typing speed checker is the ideal tool for you. Our website provides everything you need to improve as a writer, whether you're a student or a working person. Discover our tools by doing so right now!</p>
                </em>
            </div>
        </div>
    )
}

export default Mainpage;