import '../pages/listrestaurant';
import '../pages/detail';
// import '../pages/favorite';

const Restaurant = document.createElement('list-restaurant');
const Detail = document.createElement('detail-restaurant');
// const Favorite = '';

const routes = {
    '/': Restaurant, // default page
    '/restaurants': Restaurant,
    '/detail/:id': Detail,
    // '/favorite': Favorite,
};

export default routes;
