import {fetchBreeds, fetchCatByBreed} from "./js/cat-api";


const refs = {
    selectCat: document.querySelector('.breed-select'),
    catCart: document.querySelector(".cat-info"),
    loader: document.querySelector(".loader"),
    error: document.querySelector(".error")
}



fetchBreeds().then((data) => {
    refs.selectCat.classList.remove('select-hidden');
    refs.loader.classList.add('loader-hidden');
    renderSelect(data, refs.selectCat);
    
});


function renderSelect(arr, container){
   const markupList = arr.map(
        ({id, name}) =>
            `<option value="${id}">${name}</option>`
        ).join("");
    container.innerHTML = markupList;
}


refs.selectCat.addEventListener("change", (e) => {
    refs.catCart.classList.add('cat-hidden');   
    refs.loader.classList.remove('loader-hidden');
    fetchCatByBreed(e.target.value)
    .then(({breeds, url})=>{
        rendeerCard(breeds[0].name , breeds[0].description, breeds[0].temperament, url, refs.catCart);
        refs.loader.classList.add('loader-hidden');
        refs.catCart.classList.remove('cat-hidden'); 
    }
        
    );
  });

  function rendeerCard(name, description, temperament, url, container){
    const markupCart = 
            `
            <img src="${url}" width="400" alt=${name} />
            <div class="text-cont">
            <h2>${name}</h2>
            <p>${description}</p>
            <p>${temperament}</p>
            </div>
            
            `
        ;
    container.innerHTML = markupCart;
  }


