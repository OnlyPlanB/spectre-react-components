import Button from './Button';
import factory from 'nean/factory';
import {every} from 'utils';
import {bool} from 'propTypes';

/**
 *
 * @type {*}
 */
const Group = factory({
    type: 'div',
    style: ({children, block}) => ({
        block,
        'btn-group': every(children, Button),
    }),
});

Group.propTypes = {
    block: bool,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:25
 */
export default Group;