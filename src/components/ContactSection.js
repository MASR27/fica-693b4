import React from 'react';
import _ from 'lodash';

import {withPrefix, Link} from '../utils';

export default class ContactSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width contact__section" data-id={_.get(section, 'section_id', null)}>
              <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f7a241f98ff6af92f82778ec5/843f6c80d53aee7407dc4ca60.js");</script>
            </section>
        );
    }
}
