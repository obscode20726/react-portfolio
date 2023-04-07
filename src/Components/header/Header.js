import React, { useState, useEffect } from 'react';
import './HeaderStyles.css'
import User from 'C:/Users/shema/Desktop/my/src/assets/img/user.png'
import { Fade, Slide } from 'react-reveal';
import cv from 'C:/Users/shema/Desktop/my/src/assets/pdf/SHEMA-Olivier-cv-Profile.pdf'
function Header() {
   
        const [theme, setTheme] = useState('light');
      
        useEffect(() => {
          const selectedTheme = localStorage.getItem('selected-theme');
          setTheme(selectedTheme || 'light');
        }, []);
      
        const handleClick = () => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          localStorage.setItem('selected-theme', newTheme);
          document.body.classList.toggle('dark-theme');
        };
            
  return (
    
    <header className={`profile container ${theme === 'dark' ? 'dark-theme' : ''}`}>
    
    <i className={theme === 'light' ? 'ri-moon-line change-theme' : 'ri-sun-line change-theme'} onClick={handleClick}></i>
    
    <div class="profile__container grid">
        <div class="profile__data">
        <Slide top>
        <div class="profile__border">
            <div class="profile__border">
                <div class="profile__perfil">
                    <img src={User} alt=""></img>
                </div>

            </div>
        </div>

        </Slide>
           

        <Slide delay={450} top>
        <div class="profile__name text-2xl">
            <h2 class="profile__name text-2xl" >SHEMA Olivier</h2>
        </div>
            
        </Slide>
           

        <Slide delay={500} top>
            <div class="profile__profession">
                <h3 class="profile__profession">Full-Stack Web Developper</h3>
            </div>
            
        </Slide>
            
        <Slide delay={600} top>
        <ul class="profile__social">
            <ul class="profile__social">
                <a href="https://www.instagram.com/aka.olivierobs_21/" target="_blank" class="profile__social-link">
                    <i class="ri-instagram-fill"></i>

                </a>
                <a href="https://www.linkedin.com/in/shema-olivier-86613b264" target="_blank" class="profile__social-link">
                    <i class="ri-linkedin-box-fill"></i>
                </a>
                <a href="" target="_blank" class="profile__social-link">
                    <i class="ri-github-fill"></i>

                </a>

            </ul>
        </ul>
        </Slide>
         

        </div>

        <Slide delay={600} top>
            <div class="profile__info grid">
                <div class="profile__info grid">
                    <div class="profile__info-group">
                        <h3 class="profile__info-number">1</h3>
                        <p class="profile__info-description">
                            passionate <br />Years of <br /> work
                        </p>
                    </div>
                    <div class="profile__info-group">
                        <h3 class="profile__info-number">+25</h3>
                        <p class="profile__info-description">
                            Completed <br /> projects
                        </p>
                    </div>
                    
                </div>
            </div>
        </Slide>
       

        <Slide delay={800} top>
        <div class="profile__buttons">
           <div class="profile__buttons">
            <a download="" href={cv} class="button">
                Download my CV. <i class="ri-download-fill"></i>
            </a>
           <div class="profile__buttons-small">
            <a href="https://api.whatsapp.com/send?phone=250781506716&text=Hello, more information!" target="_blank" class="button button__small button__gray">
                <i class="ri-whatsapp-fill"></i>
            </a>
            <a href="https://m.me/olivierosbshema2" target="_blank" class="button button__small button__gray">
                <i class="ri-messenger-fill"></i>
            </a>
            </div>
        </div>    
        </div>
        </Slide>
        


    </div>
</header>
  )
}


export default Header;