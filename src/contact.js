function createContact(){
    const content = document.getElementById('content');
    const contactBox = document.createElement('div')
    contactBox.setAttribute('id', 'contact')
    content.appendChild(contactBox)
    
    const title = document.createElement('h2');
    title.textContent='Contact';
    contactBox.appendChild(title);
    
    const info = document.createElement('p')
    info.textContent = 'We\'re on wheels, so good luck finding us. You can call us at 000-000-0000.';
    contactBox.appendChild(info);
      
}

export default createContact;