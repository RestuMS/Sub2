import CONFIG from '../globals/config';

class itemRestaurant extends HTMLElement{
    set restoran(restoran){
        this._restoran = restoran;
        this.render();
}

render(){
    this.innerHTML= `
    <div class="post">
    <img src="${CONFIG.BASE_IMAGE_URL}/${this._restoran.pictureId}" alt="${this._restoran.name}" class="post-image"/>
    <div class="inner">
    <p class="post-city">Kota ${this._restoran.city}</p>
    <a href="/#/detail/${this._restoran.id}">
        <h1 class="post-title">${this._restoran.name}</h1>
    </a>
    <h2 class="post-rating">Rating : ${this._restoran.rating}</h2>
    <p class="post-description">${this._restoran.description}</p>
    </div>
    </div>
    `
 }
}
customElements.define('item-restaurant',itemRestaurant);