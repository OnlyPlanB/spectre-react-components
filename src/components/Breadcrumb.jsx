import factory from 'factory';

/**
 *
 * @type {*}
 */
const Breadcrumb = factory({
    type: 'ul',
    className: 'breadcrumb',
});

/**
 *
 * @type {*}
 */
const Item = factory({
    type: 'li',
    className: 'breadcrumb-item',
});

Breadcrumb.Item = Item;

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 20.08.2019
 * Time: 10:02
 */
export default Breadcrumb;
