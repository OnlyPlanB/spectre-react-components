import React, {Fragment} from 'react';
import {Accordion, Avatar, Menu, hooks} from '../../src';
import {Presence} from '../../src/components/Avatar';
import {boolean, select, text} from '../addons';


export default {
    title: 'Components',
};
export const accordion = () => (
    <Fragment>
        <Accordion>
            <Accordion.Header caret>
                Header
            </Accordion.Header>
            <Accordion.Body>
                <Menu>
                    <Menu.Item>
                        Item
                    </Menu.Item>
                </Menu>
            </Accordion.Body>
        </Accordion>
    </Fragment>
);

export const avatar = () => (
    <Avatar
        size={select('size', Avatar.Size)}
        initials={text('initials', 'OK')}
    >
        <Avatar.Presence
            presence={select('presence', Presence.Presence)}
        />
    </Avatar>
);

export const menu = () => (
    <Menu>
        <Menu.Divider>
            Divider
        </Menu.Divider>
    </Menu>
);