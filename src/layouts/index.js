import advanced from './advanced';
import category from './category';
import home from './home';
import product from './product';
import store from './store';

function initNetlifyIdentify() {
    console.log("initNetlifyIdentify called.");
    const script = document.createElement("script");

    script.src = "https://identify.netlify.com/v1/netlyfy-identify-widget.js"
    script.async = true;

    document.dody.appendChild(script);
    }
const IndexPage = () => {
    return(
        
    )


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
