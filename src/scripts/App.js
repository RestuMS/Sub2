// import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from './routes/url-parsel';
import routes from './routes/routes';

class App {
    constructor({ content }) {
        // this._button = button;
        // this._drawer = drawer;
        this._content = content;

        // this._initialAppShell();
    }

    // _initialAppShell() {
    //     DrawerInitiator.init({
    //         button: this._button,
    //         drawer: this._drawer,
    //         content: this._content,
    //     });

        // kita bisa menginisiasikan komponen lain bila ada
    // }

    async renderPage() {
        this._content.firstChild && this._content.removeChild(this._content.firstChild);
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.append(page) ;
        // await page.afterRender();

        // const skipLinkElem = document.querySelector('.skip-link');
        // skipLinkElem.addEventListener('click', (event) => {
            // event.preventDefault();
            // document.querySelector('#mainContent').focus();
        // });
    }
}

export default App;

