function createMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')
    content.appendChild(menu)

    makeMenuSection('Sandwiches', sandwichArray);
    makeMenuSection('Sides', sidesArray);
    makeMenuSection('Drinks', drinksArray);


}



function makeMenuSection(name, array) {
    let menuTitle = document.createElement('div')
    menuTitle.setAttribute('class', 'menu-title');
    menu.appendChild(menuTitle);

    let title = document.createElement('h2')
    title.textContent = `${name}`;
    menuTitle.appendChild(title);

    for (let i = 0; i < array.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-item');
        menu.appendChild(menuItem);

        let foodName = document.createElement('h3');
        foodName.textContent = `${array[i].name}`;
        menuItem.appendChild(foodName);
        
        let hr = document.createElement('hr');
        menuItem.appendChild(hr);

        let foodDesc = document.createElement('p');
        foodDesc.textContent = `${array[i].description}`
        menuItem.append(foodDesc);


    }
}

let sandwichArray = [{
        name: 'Just-A-Sandwich',
        description: 'Turnkey, bacon, LTO. $7.99',
    }, {
        name: 'Bus Burger',
        description: 'Our famous burger on wheels. two patties, special sauce, LTO. $10.99',
    }, {
        name: 'Speedy Cheese Philly',
        description: 'Peppers, onions, and our firesauce. $8.99'
    }, {
        name: 'Wicked Grilled Cheese',
        description: 'Meunster and avocado on brioche. $5.99'
    }
]

let sidesArray = [{
        name: 'French Fries',
        description: 'Shoestring. $2.99',
    }, {
        name: 'Sweet Potato fries',
        description: 'Local potatoes from Riddlebrook Farm. $4.99',
    }, {
        name: 'Tater Tots',
        description: 'Fresh out the fryer. $3.99'
    }, {
        name: 'Salted Cookie',
        description: 'Its bigger than you think... $1.99'
    }
]

let drinksArray = [{
        name: 'Polar Seltzer',
        description: 'Local :). $1.99',
    }, {
        name: 'IZZE',
        description: 'Grapefruit, strawberry, whatever. $2.99',
    }, {
        name: 'Slush',
        description: 'Plain, snow-flavored. $10.99'
    }, {
        name: 'Beer',
        description: 'Rotating local brews. $7.99'
    }
]



export default createMenu;
