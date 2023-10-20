import listdataRestaurants from '../data/restorandbsource';
import '../component/itemrestaurant';

class listRestaurant extends HTMLElement{
    async connectedCallback() {
        this.restaurants = await listdataRestaurants.listRestaurants();
        this.render();
    }


render() {
    this.innerHTML = `<h2 class="title-explore">Explore Restaurant</h2>`;
    this.restaurants.restaurants.forEach(restaurant => {
        const itemRestaurant = document.createElement('item-restaurant');
        itemRestaurant.restoran = restaurant;
        this.appendChild(itemRestaurant);
    });
    this.classList.add('container-post');
    }
}
customElements.define('list-restaurant', listRestaurant);