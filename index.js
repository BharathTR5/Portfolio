let ButtonToggle = document.querySelector('.toggle_btn');
    let toggleBtnIcon = document.querySelector('.toggle_btn i');
    let dropdown_menu = document.querySelector('.dropdown_menu');

    ButtonToggle.addEventListener('click',()=>{
      dropdown_menu.classList.toggle('open');
      console.log('Toggle button clicked')
    })