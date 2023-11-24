const jsonUrl = '../json/recept.json';
const recipeTemplate = document.querySelector('[data-user-template]');
const favoriteRecipes = document.querySelector('[favoriteRecipes]');
const tikTokRecipes = document.querySelector('[tikTokRecipes]');
const soupRecipes = document.querySelector('[soupRecipes]');
const pastaRecipes = document.querySelector('[pastaRecipes]');
const pizzaRecipes = document.querySelector('[pizzaRecipes]');
const asiatisktRecipes = document.querySelector('[asiatisktRecipes]');
const vegRecipes = document.querySelector('[vegRecipes]');
const searchFilteredRecipes = document.querySelector('[searchFilteredRecipes]');
const searchInput = document.querySelector('[data-search]');
const allChips = document.querySelectorAll('.chip');


//IMG CARD

//const articleNew = document.createElement('article');
//articleNew.classList.add('card');

//const h4New = document.createElement('h4');
//h4New.textContent = 'hej på dig';

//articleNew.append(h4New);
//container.append(articleNew);

//window.addEventListener('resize', updateText);
  //updateText();
  //function updateText(){
    //const data = document.querySelector('#data');
    //data.textContent = `Width: ${window.innerWidth}, Ratio: ${window.devicePixelRatio}`;
  //}
//

let recipes = [];
const filters = {
    chips: [],
    search: ""
}

function shareOnLink() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'Check out this page:',
            url: window.location.href
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for browsers that do not support Web Share API
        const sharePrompt = `Check out this page: ${window.location.href}`;
        prompt('Share this link:', sharePrompt);
    }
}
  

const generateRecipeCard = (recipe) => {
    const card = recipeTemplate.content.cloneNode(true).children[0];
    const header = card.querySelector('[data-header]');
    const img = card.querySelector('[data-image]');
    const cat = card.querySelector('[data-cat]');
    const link = card.querySelector('[data-link]');
    link.setAttribute('href', recipe.html);
    header.textContent = recipe.name;
    cat.textContent = recipe.category;
    img.setAttribute('src', recipe.imageURL);
    console.log(recipe.img400);
    img.setAttribute('srcset', `${recipe.img400} 400w, ${recipe.img800} 800w,  ${recipe.imageURL} 1200w`);
    img.setAttribute('sizes', '(min-width: 400px) 400px');
    img.setAttribute('alt', recipe.altText);
    return card;
}

loadData = () => {
    fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        return data.map(d => {
            const card = generateRecipeCard(d);
            return(
                {
                    ...d,
                    element:card
                }
            );
        });
    })
    .then(r => {
        recipes = r;
        r.forEach(recipe => {
            if(recipe.isAsiatiskt) {
                asiatisktRecipes.append(recipe.element.cloneNode(true));
            }
            if(recipe.isTikTok) {
                tikTokRecipes.append(recipe.element.cloneNode(true));
            }
            if(recipe.isSoup) {
                soupRecipes.append(recipe.element.cloneNode(true));
            }
            if(recipe.isPasta) {
                pastaRecipes.append(recipe.element.cloneNode(true));
            }
            if(recipe.isPizza) {
               pizzaRecipes.append(recipe.element.cloneNode(true));
            }
            if(recipe.isVeg) {
                vegRecipes.append(recipe.element.cloneNode(true));
            }
          
        })
    })
.catch(errorMsg => console.log(errorMsg));
}

loadData();

if(allChips){
    allChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            const chipValue = e.target.nextSibling.nextSibling.innerHTML.toLowerCase();
            const isActive = filters.chips.includes(chipValue);
            if (isActive) {
                filters.chips = filters.chips.filter(activeChip => activeChip !== chipValue);
            } else {
                filters.chips.push(chipValue);
            }
            filterRecipes();
        });
    });
}

if(searchInput){
    searchInput.addEventListener('focus', () => {
        searchInput.classList.toggle('focus-border');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.classList.toggle('focus-border');
    });

    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value.toLowerCase();
        filterRecipes();
    });
};

const showFilteredRecipes = () => {
    asiatisktRecipes.parentNode.classList.add("hidden");
    tikTokRecipes.parentNode.classList.add("hidden");
    soupRecipes.parentNode.classList.add("hidden");
    pastaRecipes.parentNode.classList.add("hidden");
    vegRecipes.parentNode.classList.add("hidden");
  
    searchFilteredRecipes.parentNode.classList.remove("hidden");
}

const hideFilteredRecipes = () => {
    asiatisktRecipes.parentNode.classList.remove("hidden");
    tikTokRecipes.parentNode.classList.remove("hidden");
    soupRecipes.parentNode.classList.remove("hidden");
    pastaRecipes.parentNode.classList.remove("hidden");
    vegRecipes.parentNode.classList.remove("hidden");

    searchFilteredRecipes.parentNode.classList.add("hidden");
}

const filterRecipes = () => {
    if(filters.search.length > 0 || filters.chips.length > 0){
        showFilteredRecipes();
    }else{
        hideFilteredRecipes();
    }
    searchFilteredRecipes.innerHTML = '';

    let filteredRecipes = recipes.filter(r => filters.chips.length == 0 || 
        r.category.some(c1 => filters.chips.some(c2 => c1.toLowerCase() === c2.toLowerCase())));

    filteredRecipes = filteredRecipes.filter(r => r.name.toLowerCase().includes(filters.search) ||
        r.category.some(c => c.toLowerCase().includes(filters.search)));

    filteredRecipes.forEach(recipe =>{
        searchFilteredRecipes.append(recipe.element.cloneNode(true));
    });
}

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
 
})




// //fetchData innehåller data från fetch om ni vill göra något med denna
// //let fetchedData = [];
// console.log(fetchedData);
// function getCard (){
//     recipes = fetchedData.map( recipe => {
//         const card = dataUserTemplate.content.cloneNode(true).children[0];
//         const header = card.querySelector('[data-header]');
//         const img = card.querySelector('[data-image]');
//         const cat = card.querySelector('[data-cat]');
//         const link = card.querySelector('[data-link]');
//         link.setAttribute('href', recipe.html);
//         header.textContent = recipe.name;
//         cat.textContent = recipe.category;
//         img.setAttribute('src', recipe.imageURL);
//         if(recipe.isFavorite) {
//             dataUserFavorite.append(card);
//         }
//         if(recipe.isTikTok) {
//             dataUserTikTok.append(card.cloneNode(true));
//         }
//         return{name: recipe.name,category: recipe.category, element:card}
//     });
// }
// fetch(jsonUrl)
// .then(response => response.json())
// .then(data => {
//     data.forEach(d => {
//         fetchedData.push(d);
//     });
//     if(dataUserCards){
//         getCard();
//     }
//     const maxCardsToShow = 3; // Antal kort att visa
//     if(dataUserPopuar){
//         //Detta kan göras snyggare
//         dataUserPopuar.forEach(section => {
//             recipes = data.slice(0, maxCardsToShow).map(recipe => { // Använd slice() för att begränsa antalet kort
//                 const card = dataUserTemplate.content.cloneNode(true).children[0];
//                 const header = card.querySelector('[data-header]');
//                 const img = card.querySelector('[data-image]');
//                 const cat = card.querySelector('[data-cat]');
//                 const link = card.querySelector('[data-link]');
//                 link.setAttribute('href', recipe.html);
//                 header.textContent = recipe.name;
//                 cat.textContent = recipe.category;
//                 img.setAttribute('src', recipe.imageURL);
//                 section.append(card);
//                 return{name: recipe.name,category: recipe.category, element:card}
//             });
//         }); 
//     }  
// })
// .catch(errorMsg => console.log(errorMsg));

// const allChips = document.querySelectorAll('.chip');
// let activeChips = []; // Array för att lagra de aktiva chippen
// if(allChips){
//     allChips.forEach(chip => {
//         chip.addEventListener('click', (e) => {
            
//           const chipValue = e.target.nextSibling.nextSibling.innerHTML.toLowerCase();
//           // Kontrollera om chipet redan är aktivt
//           const isActive = activeChips.includes(chipValue);
//           if (isActive) {
//             // Ta bort chipet från den aktiva listan
//             activeChips = activeChips.filter(activeChip => activeChip !== chipValue);
//           } else {
//             // Lägg till chipet i den aktiva listan
//             activeChips.push(chipValue);
//           }
//           // Iterera över recepten och visa/dölj baserat på de aktiva chippen
//           recipes.forEach(recipe => {
//             //Kollar om något av villkoren stämmer och return en boolean (true/false)
//             const isVisible = activeChips.length === 0 || activeChips.includes(recipe.category.toLowerCase());
//             //Gömmer de kort som inte har kategorin 
//             recipe.element.classList.toggle('hide', !isVisible);
//           });
//         });
//       });
// }
