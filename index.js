let ButtonToggle = document.querySelector('.toggle_btn');
    let toggleBtnIcon = document.querySelector('.toggle_btn i');
    let dropdown_menu = document.querySelector('.dropdown_menu');

    ButtonToggle.addEventListener('click',()=>{
      dropdown_menu.classList.toggle('open');
    })

window.addEventListener('scroll', ()=> {
  const screenPosition = window.innerHeight / 1.3;
  const aboutSection = document.querySelector('#about-container');
  console.log(aboutSection)
  const skillsSection = document.querySelector('#skill-container');
  const resumeSection = document.querySelector('#resume');

  const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
  const resumeSectionPosition = resumeSection.getBoundingClientRect().top;

  if(aboutSectionPosition < screenPosition){
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
  }

  if(skillsSectionPosition < screenPosition){
    skillsSection.style.opacity = '1';
    skillsSection.style.transform = 'translateY(0)';
  }

  if(resumeSectionPosition < screenPosition){
    resumeSection.style.opacity = '1';
    resumeSection.style.transform = 'translateY(0)';
  }

});