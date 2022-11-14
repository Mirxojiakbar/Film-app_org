"use strict"
movies.splice(100)

// {
//     "title": "Patton Oswalt: Annihilation",
//     "year": 2017,
//     "categories": [
//       "Uncategorized"
//     ],
//     "imdbId": "tt7026230",
//     "imdbRating": 7.4,
//     "runtime": 66,
//     "language": "English",
//     "youtubeId": "4hZi5QaMBFc",
//     "summary": "Patton Oswald, despite a personal tragedy, produces his best standup yet. Focusing on the tribulations of the Trump era and life after the loss of a loved one, Patton Oswald continues his journey to contribute joy to the world.",
//     "smallThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg",
//     "bigThumbnail": "http://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg"
//   },




// !!!!!!!!!!!!!!!!!!!!!!Normalizing!!!!!!!!!!!!!!!!!!!!!!
const Moovies = movies.map((movies) => {
    return {
        title: movies.title,
        year: movies.year,
        language: movies.language,
        category: movies.categories,
        id: movies.imdbId,
        time: `  Soat:${Math.floor(movies.runtime / 60)}, daqiqa:${movies.runtime % 60}`,
        summary: movies.summary,
        link: `https://www.youtube.com/embed/${movies.youtubeId}`,
        maxImg: movies.bigThumbnail,
        minImg: movies.smallThumbnail,
        rating: movies.imdbRating
    }
})
console.log(Moovies);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!!!!!!!!!!!!!!!!!!!!!!Rendering!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function renderMoovies() {
    Moovies.forEach((el) => {
        const card = createElement('div', 'card shadow-lg', `
        
        <div class="card">
        <img src="${el.minImg}" alt="img">
        <div class="card-body">
        <h4 class="card-title">
            ${el.title}
        </h4>
        <ul class="list-unstyled"> 
            <li>
                <strong>Year:${el.year}</strong>
            </li>
            <li>
                <strong>Language:${el.language}</strong>
            </li>
            <li>
                <strong>Rating:${el.rating}</strong>
            </li>
            <li>
                <strong>Category:${el.category}</strong>
            </li>
            <li>
                <strong>Runtime:${el.time}</strong>
            </li>
        </ul>

        <div class="social d-flex">
            <button class="btn btn-danger m-2">Trailers</button>
            <button class="btn btn-danger m-2">Read more . . .</button>

            <button class="btn btn-danger m-2">Add Bookmark</button>
        </div>
        </div>
    </div>

`);
    $('.wrapper').appendChild(card)
})
}
renderMoovies()


////////////////////////////////2-dars///////////////////////////////



////!!!!!!!!!!!!!!!!!!!!!!Finging!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!(func)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
res
const findFilm=(regexp, rating)=>{

    return Moovies.filter((film)=>{
        return film.title.match(regexp) && film.rating >=rating;
    })

}
//!!!!!!!!!!!!!!!!!!!!!!!!(func)!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!(By name)!!!!!!!!!!!!!!!!!!!!!!!!!!
// let setting = 'skfjdfop odjoadso  dsksdlkjfksdj  kdkjfkajkasd dsldjo'
// console.log(setting.match(/s/gi));    

$('.search').addEventListener('click', ()=>{

    $('.wrapper').innerHTML=`<span class="loader"></span>`;

    const searchValue = $('#filmName').value;
    const filmRating =$('#filmRating').value;

    const regexp = new RegExp(searchValue,"gi")
    const searchResult = findFilm(regexp, filmRating)

    
    if(searchResult.length>0){
        setTimeout(()=>{
            searchResultsRender(searchResult)
            $('.res').textContent=searchResult.length
        },1000)
    }
    else{
        $('.wrapper').innerHTML='<h1 class="text-white">Malumot topilmadi!</h1>'
        $('.res').textContent=searchResult.length
    }
    
})  




function searchResultsRender(data=[]){
    $('.wrapper').innerHTML="";
    data.forEach((el) => {
        const card = createElement('div', 'card shadow-lg', `
        
        <div class="card">
        <img src="${el.minImg}" alt="img">
        <div class="card-body">
        <h4 class="card-title">
            ${el.title}
        </h4>
        <ul class="list-unstyled"> 
            <li>
                <strong>Year:${el.year}</strong>
            </li>
            <li>
                <strong>Language:${el.language}</strong>
            </li>
            <li>
                <strong>Rating:${el.rating}</strong>
            </li>
            <li>
                <strong>Category:${el.category}</strong>
            </li>
            <li>
                <strong>Runtime:${el.time}</strong>
            </li>
        </ul>

        <div class="social d-flex">
            <button class="btn btn-danger m-2">Trailers</button>
            <button class="btn btn-danger m-2">Read more . . .</button>

            <button class="btn btn-danger m-2">Add Bookmark</button>
        </div>
        </div>
    </div>

`);
    $('.wrapper').appendChild(card)
})

    
}       
//!!!!!!!!!!!!!!!!!!!!!!!!(By name)!!!!!!!!!!!!!!!!!!!!!!!!!!

////////////////////////////////2-dars///////////////////////////////