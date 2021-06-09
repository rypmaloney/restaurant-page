import createAbout from './about.js';

console.log('If you see me, everything is A O K')

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);
    
    const restaurant = document.createElement('h1')
    restaurant.textContent = 'Bistro Bus';
    header.appendChild(restaurant);
    
    const byline = document.createElement('p');
    byline.textContent= 'A world of food in motion'
    header.appendChild(byline);
    
    const nav = document.createElement('nav');
    header.appendChild(nav);
    
    const navList = document.createElement('ul');
    nav.appendChild(navList);
    
    const aboutBtn = document.createElement('li')
    aboutBtn.textContent = 'About';
    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
    
    navList.appendChild(aboutBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);
          
}

createHeader()
createAbout()
