import React from 'react';
import Useage from '../Useage/Useage';

export default function BadgeUseage() {

    return (
        <Useage>
            <pre>{'import Badge from "./components/Badge/Badge"'}</pre>
            <pre>{'<Badge color="green" variant="square/pill">Badge Text</Badge>'}</pre>
        </Useage>
    );

};
