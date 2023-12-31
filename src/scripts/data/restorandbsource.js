import API_ENDPOINT from '../globals/api';

class RestaurantDBSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.RESTAURANTS);
        const responseJson = await response.json();
        return responseJson;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default RestaurantDBSource;
