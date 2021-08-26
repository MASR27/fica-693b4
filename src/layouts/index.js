import advanced from './advanced';
import category from './category';
import home from './home';
import product from './product';
import store from './store';

function initNetlifyIdentity() {
    console.log("initNetlifyIdentity called.");
    const script = document.createElement("script");

    script.src = "https://us5.list-manage.com/contact-form?u=f7a241f98ff6af92f82778ec5&form_id=0b5570499c8ed7ccdfdda4ff5d76c90c"
    script.async = true;

    document.dody.appendChild(script);

<form name="simpleContactForm" method="POST" data-netlify="true" id="simple-contact-form" class="contact-form">    <p class="form-row">
        <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
        <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
        <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
        <textarea
            name="message"
            id="contact-form-message"
            aria-labelledby="contact-form-message-label"
            class="form-textarea"
            rows="7"
        ></textarea>
    </p>
    <p class="form-row form-submit">
        <button type="submit" class="button">Send Message</button>
    </p>
</form>

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
