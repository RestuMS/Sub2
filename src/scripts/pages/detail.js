import listdataRestaurants from "../data/restorandbsource";
import UrlParser from "../routes/url-parsel";
import CONFIG from "../globals/config";

const detailData = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const { restaurant } = await listdataRestaurants.detailRestaurant(url.id);
  return restaurant;
};

class detailRestaurant extends HTMLElement {
  async connectedCallback() {
    this.restaurants = await detailData();
    this.render();
    console.log(this.restaurants);
  }

  render() {
    this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <div class="post1">
            <img src="${CONFIG.BASE_IMAGE_URL}/${
      this.restaurants.pictureId
    }" alt="${this.restaurants.name}" class="post-image1"/>
            <div class="inner1">
              <p class="post-city1">Kota ${this.restaurants.city}</p>
              <h1 class="post-title1">${this.restaurants.name}</h1>
              <p class="post-address">Address : ${this.restaurants.address}</p>
              <h2 class="post-rating1">Rating : ${
                this.restaurants.rating
              } ⭐️</h2>
              <p class="post-description1">${this.restaurants.description}</p>
              <p class="post-categpries">${this.restaurants.categories
                .map((category) => category.name)
                .join(" | ")}</p>
              <p class="post-foods">Foods : ${this.restaurants.menus.foods
                .map((food) => food.name)
                .join(", ")}</p> 
              <p class="post-drinks">Drinks : ${this.restaurants.menus.drinks
                .map((drink) => drink.name)
                .join(", ")}</p>
                              <p class="post-review">Customer Reviews : ${this.restaurants.customerReviews
                                .map(
                                  (customerReviews) => `
                                    <p>${customerReviews.name}</p>
                                    <p>${customerReviews.review}</p>
                                    <p>${customerReviews.date}</p>
                                  `).join(" ")}
                                  </p>
            </div>
          </div>
        `;
  }
}
customElements.define("detail-restaurant", detailRestaurant);
