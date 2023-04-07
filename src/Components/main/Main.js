import React, { useState, useEffect } from 'react';
import './MainStyles.css'
import video_call from 'C:/Users/shema/Desktop/my/src/assets/img/video_call.png'
import weather_forecast_website from 'C:/Users/shema/Desktop/my/src/assets/img/weather_forecast_website.png'
import movie_app_website from 'C:/Users/shema/Desktop/my/src/assets/img/movie_app_website.png'
import project3 from 'C:/Users/shema/Desktop/my/src/assets/img/project3.jpg'
import ChatGpt from 'C:/Users/shema/Desktop/my/src/assets/img/ChatGpt.jpg'
import qr_codeApp from 'C:/Users/shema/Desktop/my/src/assets/img/qr_codeApp.png'
import project5 from 'C:/Users/shema/Desktop/my/src/assets/img/project5.jpg'
import ecommerce_website from 'C:/Users/shema/Desktop/my/src/assets/img/ecommerce_website.png'
import youtube_clone from 'C:/Users/shema/Desktop/my/src/assets/img/youtube_clone.jpg'
import Gym from 'C:/Users/shema/Desktop/my/src/assets/img/Gym.webp'
import { Slide } from 'react-reveal'; 
function Main() {
   
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
        /*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click', () =>{
  const target = document.querySelector(tab.dataset.target)

  tabContents.forEach(tc =>{
      tc.classList.remove('filters__active')
  })
  target.classList.add('filters__active')

  tabs.forEach(t =>{
      t.classList.remove('filter-tab-active')
  })
  tab.classList.add('filter-tab-active')
})
})
    
  return (
    
    <main class="main">
        <section class="filters container">
        <Slide delay={900} top>
            <div class="filters__content">
                <ul class="filters__content">
                    <button class="filters__button " data-target="#projects">
                        Projects
                    </button>

                    <button class="filters__button filter-tab-active" data-target="#skills">
                        Skills
                    </button>

                    <button class="filters__button" data-target="#contact">
                        Contact
                    </button>

                </ul>
            </div>
           
        </Slide>
        <Slide delay={1000} top>
        <div class="filters__sections">
        <div class="filters__sections">
                <div class="projects__content grid " data-content id="projects">
                    <article class="projects__card">
                        <img src={video_call} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle">Web Full stack</span>
                                <h3 class="projects__title">video call room</h3>
                                <a href="https://facemate.netlify.app/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>
                    
                    <article class="projects__card">
                        <img src={weather_forecast_website} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle">Web</span>
                                <h3 class="projects__title">Weather App</h3>
                                <a href="projects/Weather-Forecast-App-main/index.html" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={movie_app_website} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle">Web Full stack</span>
                                <h3 class="projects__title">Movie Info App</h3>
                                <a href="https://moviego-app.netlify.app/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={youtube_clone} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle">Web Full stack </span>
                                <h3 class="projects__title">Youtube Clone</h3>
                                <a href="https://youtube-obsreactclone.netlify.app/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={ChatGpt} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle">Web</span>
                                <h3 class="projects__title">Chat Gpt</h3>
                                <a href="https://cody-openai-shemaolivier.vercel.app/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={Gym} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle"></span>
                                <h3 class="projects__title">Gym Exercices Website</h3>
                                <a href="https://fitzone-gym-exercises.netlify.app/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={project5} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle"></span>
                                <h3 class="projects__title">Flip a Coin Game</h3>
                                <a href="projects/Flip_a_Coin_Game/" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>

                    <article class="projects__card">
                        <img src={ecommerce_website} alt="" class="projects__img" />
                        <div class="projects__modal">
                            <div>
                                <span class="projects__subtitlle"></span>
                                <h3 class="projects__title">E-Commerce Website</h3>
                                <a href="#" class="projects__button button button__small">
                                    <i class="ri-links-fill"></i>
                                </a>
                                      
                            </div>
                        </div>
                    </article>
                    
                    
                </div>
                <div class="skills__content grid filters__active" data-content id="skills">
                    <div class="skills__area">
                        <h3 class="skills__title">
                            Frontend Developer
                        </h3>
                        <div class="skills__box">
                            <div class="skills_group">
                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">HTML</h3>
                                            <span class="skills_level">Advanced</span>
                                        
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            CSS
                                        </h3>
                                        <span class="skills_level">Advanced</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            JavaScript
                                        </h3>
                                        <span class="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div class="skills_group">
                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            bootstrap
                                        </h3>
                                        <span class="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            Git
                                        </h3>
                                        <span class="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            React
                                        </h3>
                                        <span class="skills_level">Basic</span>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div class="skills__area">
                        <h3 class="skills__title">
                            Backend Developer
                        </h3>
                        <div class="skills__box">
                            <div class="skills_group">
                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">MySQL</h3>
                                            <span class="skills_level">Advanced</span>
                                        
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            Firebase
                                        </h3>
                                        <span class="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            Python
                                        </h3>
                                        <span class="skills_level">Intermediate</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div class="skills_group">
                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            C#
                                        </h3>
                                        <span class="skills_level">Advanced</span>
                                    </div>
                                </div>
                                
                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            PostgreSQL
                                        </h3>
                                        <span class="skills_level">Advanced</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <i class="ri-checkbox-circle-line"></i>

                                    <div>
                                        <h3 class="skills__name">
                                            Android
                                        </h3>
                                        <span class="skills_level">Basic</span>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         <div class="contact_section" data-content id="contact">
            <span class="section__subtitle">Get in touch</span>
            <h2 class="section_title">Contact Me</h2>
            <div class="contact__container container grid">
                <h3 class="contact__title">Talk to me</h3>
                
                <div class="contact__info">
                    <div class="contact__card">
                        <i class="ri-mail-send-fill contact__card-icon"></i>
                        <h3 class="contact__card-title">Email</h3>
                        <span class="contact__card-data">shemaolivier20726@gmail.com</span>

                        <a href="mailto:shemaolivier20726@gmail.com" target="_blank" class="contact__button">
                            Write me <i class="ri-arrow-right-line contact__button-icon"></i>
                        </a>
                    </div>

                    <div class="contact__card">
                        <i class="ri-building-line contact__card-icon"></i>
                        <h3 class="contact__card-title">address :</h3>
                        <span class="contact__card-data">Rwanda, Kigali - kicukiro</span>
                        <a href="https://www.google.com/maps/place/Gatenga,+Kigali/@-2.0007995,30.0488727,13z/data=!3m1!4b1!4m6!3m5!1s0x19dca8a4421b2e29:0x1b2bae7af1f7dbd0!8m2!3d-1.9990169!4d30.0809664!16s%2Fg%2F11b6yxlj4j" target="_blank" class="contact__button">
                            Write me <i class="ri-arrow-right-line contact__button-icon"></i>
                        </a>
                        
                    </div>

                    <div class="contact__card">
                        <i class="ri-phone-line contact__card-icon"></i>
                        <h3 class="contact__card-title">number :</h3>
                        <span class="contact__card-data">+250 781-506-716</span>

                        <a href="tel:+250-781-506-716" target="_blank" class="contact__button">
                            Write me <i class="ri-arrow-right-line contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div> 
            
            <div class="contact__content">
                <h3 class="contact__title">Write me your project</h3>
                
                <form action="" class="contact__form">
                    <div class="contact__form-div">
                        <label for="" class="contact__form-tag">Names</label>
                        <input type="text" placeholder="Insert your name" class="contact__form-input" />
                    </div>

                    <div class="contact__form-div">
                        <label for="" class="contact__form-tag">Mail</label>
                        <input type="email" placeholder="Insert your email" class="contact__form-input" />
                    </div>

                    <div class="contact__form-div contact__form-area">
                        <label for="" class="contact__form-tag">Project</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Write your project" class="contact__form-input"></textarea>
                    </div>

                    <button class="button_contact">Send Message</button>
                </form>
            </div>
        </div>
        </div>

       

        </Slide>
    
    </section>
    </main>
  )
}


export default Main;