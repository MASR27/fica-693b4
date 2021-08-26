import advanced from './advanced';
import category from './category';
import home from './home';
import product from './product';
import store from './store';
import initNetlifyIdentity

export function initNetlifyIdentity() {
    console.log("initNetlifyIdentity called.");
    const script = document.createElement("script");

    script.src = "https://us5.list-manage.com/contact-form?u=f7a241f98ff6af92f82778ec5&form_id=0b5570499c8ed7ccdfdda4ff5d76c90c"
    script.async = true;

    document.dody.appendChild(script);
    
    }

export {
    advanced,
    category,
    home,
    product,
    store
};

export default {
    advanced,
    category,
    home,
    product,
    store
};
