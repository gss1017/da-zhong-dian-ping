import React from 'react';
import CheckboxWithLabel from './custom/CheckboxWithLabel';
import Link from './custom/Link';

export default function () {
    return (
        <div>
            <div>CheckboxWithLabel</div>
            <CheckboxWithLabel/>
            <Link page="/b">走你</Link>
        </div>
    );
}
