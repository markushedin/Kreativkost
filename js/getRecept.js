const recipeGenerator = () => {
    const recipe = document.querySelector('.recept');
    //Detta script hämtar och spottar ut data till ett enkillt recept
    fetch('../json/recept.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if(item.id == recipe.id){
                console.log(item);
                const figure = figureGenerator(item);
                const steps = stepsGenerator(item);
                const ingredients = ingredientsGenerator(item);
                const header = headerGenerator(item);
                recipe.append(figure,header,ingredients,steps); 
            }
        });
    });
}
//return figure
const figureGenerator = (item) => {
    let figure = document.createElement('figure');
    figure.setAttribute('class','img-container');
    
    let img = document.createElement('img');
    //fetches the img from json
    img.setAttribute('src',item.imageURL);
    img.setAttribute('srcset', `${item.img400} 400w, ${item.img800} 800w,  ${item.imageURL} 1200w`);
    // img.setAttribute('sizes', '(min-width: 400px) 400px');
    //fetches the alt text from json
    img.setAttribute('alt', item.altText);
    
    figure.append(img);
    return figure;
}
//returns steps section
const stepsGenerator = (item) => {
    let section = document.createElement('section');
    section.classList.add('steps-container');

    let title = document.createElement('h2');
    title.textContent = 'Gör så här';

    let steps = document.createElement('ol');
    steps.classList.add('steps-list');
    item.steps.forEach(step => {
        let li = document.createElement('li');
        li.classList.add('paragraph-text');
        li.textContent = step;
        steps.append(li);
    });
    section.append(title,steps);
    return section;
}
//returns ingredients section
const ingredientsGenerator = (item) => {
    let section = document.createElement('section');
    section.classList.add('steps-container');

    let title = document.createElement('h2');
    title.textContent = 'Ingredienser';

    let ingredients = document.createElement('ul');
    ingredients.classList.add('steps-list');
    item.ingredients.forEach(ingredient => {
        let li = document.createElement('li');
        li.classList.add('paragraph-text');
        li.textContent = `${ingredient.quantity}  ${ingredient.name}`;
        ingredients.append(li);
    });
    section.append(title,ingredients);
    return section;
}
//return header
const headerGenerator = (item) => {
    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.textContent = item.name;

    //create a div for flexbox to work
    let infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    //first child
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");

    //second child
    let iconContainer2 = document.createElement("div");
    iconContainer2.classList.add("iconContainer2");

    //the timer text
    let time = document.createElement('p');
    time.classList.add("paragrap-text");
    time.textContent = item.time;

    //the portion text
    let portions = document.createElement('p');
    portions.classList.add("paragrap-text");
    portions.textContent = item.portions;

    //timer icon img
    let iconBox = document.createElement('span');
    iconBox.classList.add("icon");

    //portion icon img
    let iconBox2 = document.createElement('span');
    iconBox2.classList.add("icon2");

    //first icon container
    iconContainer.append(iconBox,time);
    //second icon container
    iconContainer2.append(iconBox2,portions);
    //the whole container 
    infoContainer.append(iconContainer, iconContainer2)
    //append the whole header section
    header.append(h1, infoContainer);
    return header;
}
recipeGenerator();


//---------------
/* const getID = document.querySelector('.recept');

//Detta script hämtar och spottar ut data till ett enkillt recept

fetch('../json/recept.json')
    .then(response => response.json())
    .then(data => {
    data.forEach(item => {
        if(item.id == getID.id){
            console.log(item);
            let figure = document.createElement('figure');
            let img = document.createElement('img');
            let ol = document.createElement('ol');
            let ul = document.createElement('ul');
            let header = document.createElement('header');
            let h1 = document.createElement('h1');
            let p = document.createElement('p');
            let h2G = document.createElement('h2');
            let h2I = document.createElement('h2');
            let section1 = document.createElement('section');
            let section2 = document.createElement('section');
            let time = document.createElement('span');
            h1.textContent = item.name;
            p.textContent = item.description;
            time.textContent = item.time;
            img.setAttribute('src',item.imageURL);
            figure.setAttribute('class','recept-img');
            section1.classList.add('steps-container');
            section2.classList.add('steps-container');
            h2G.textContent = 'Gör så här';
            h2I.textContent = 'Ingredienser';
            ul.classList.add('steps-list');
            ol.classList.add('steps-list');
            //För att skapa nya LI för varje step i json
            item.steps.forEach(step => {
                let li = document.createElement('li');
                li.textContent = step;
                ol.append(li);
            });
            item.ingredients.forEach(ingrident => {
                let li = document.createElement('li');
                console.log(ingrident);
                li.textContent = `${ingrident.quantity}  ${ingrident.name}`;
                ul.append(li);
            });
            //Lägger till det nya elementen i DOM
            section1.append(h2G,ol);
            section2.append(h2I,ul);
            figure.append(img);
            header.append(time,h1,p);
            getID.append(figure,header,section1,section2); 
        }
    });
}) */