import React, {Fragment} from 'react';
import {factory, intercept, useClassName} from 'nean';
import Group from './Group';
import {oneOfOption} from '../propTypes';
import {Side} from '../hooks/useIcon';

import switched from './utilities/switched';
import Wrapper from './utilities/wrapper';

const {Switch, Case} = switched();

/**
 *
 * @type {any}
 */
const WithIcon = factory({
    render: ({children, icon, use}) => {
        const left = icon(Side.LEFT, {
            className: 'form-icon',
        });

        const right = icon(Side.RIGHT, {
            className: 'form-icon',
        });

        const className = useClassName('', {
            'has-icon-left': (!!left),
            'has-icon-right': (!!right),
        });

        return (
            <div className={className}>
                {left}
                {children}
                {right}
            </div>
        );
    },
});

/**
 *
 * @type {any}
 */
export const Addon = factory({
    type: 'span',
    className: 'input-group-addon',
    style: ({size}) => ({
        ['input-' + size]: (size),
    }),
});

/**
 *
 * @type {*}
 */
const Input = factory({
    render: ({children, className, use, size, ..._rest}) => {
        const icon = intercept(use)('icon');
        const addon = intercept(use)('addon');

        className = useClassName('form-input', {
            [`input-${size}`]: (size),
        });

        return (
            <Group>
                {(children) && (
                    <label className="form-label">
                        {children}
                    </label>
                )}

                {addon(Side.LEFT)}

                <Wrapper
                    condition={icon('display')}
                    component={WithIcon}
                    props={{icon, use}}
                >
                    <input
                        {..._rest}
                        className={className}
                    />
                </Wrapper>

                {addon(Side.RIGHT)}
            </Group>
        );
    },
});

Input.Size = {
    SMALL: 'sm',
    LARGE: 'lg',
};

Input.propTypes = {
    size: oneOfOption(Input.Size),
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 28.10.2019
 * Time: 20:52
 */
export default Input;