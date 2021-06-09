import createAbout from './about.js';
import createMenu from './menu.js';
import createContact from './contact.js';

console.log('If you see me, everything is A O K');

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    content.appendChild(header);

    const restaurant = document.createElement('h1')
    restaurant.textContent = 'Bistro Bus';
    header.appendChild(restaurant);

    const byline = document.createElement('p');
    byline.textContent = 'A world of food in motion'
    header.appendChild(byline);

    const nav = document.createElement('nav');
    header.appendChild(nav);

    const navList = document.createElement('ul');
    nav.appendChild(navList);

    const aboutBtn = document.createElement('li')
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', () => {
        removeChildNodes(content);
        createAbout();
    });

    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        removeChildNodes(content);
        createMenu();
    });

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
        contactBtn.addEventListener('click', () => {
        removeChildNodes(content);
        createContact();
    });

    navList.appendChild(aboutBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(contactBtn);
};

function removeChildNodes(parent) {
    while (parent.children[1]) {
        parent.removeChild(parent.children[1]);
    }
};

export default createHeader;
