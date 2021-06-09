function createAbout() {
    const content = document.getElementById('content');
    const aboutUs = document.createElement('div');
    aboutUs.setAttribute('id', 'about');
    
    content.appendChild(aboutUs);
    
    const title = document.createElement('h2');
    title.textContent = 'About Us';
    aboutUs.appendChild(title);
    
    const blurb = document.createElement('p');
    blurb.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
    
    aboutUs.appendChild(blurb);
}

export default createAbout;