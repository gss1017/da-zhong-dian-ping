import React from 'react';
import {Link} from 'react-router-dom';
import E from 'pages/e';

export default function () {
    return (
        <div>
            <div>
                <Link to="/b/c">to C</Link>
            </div>
            <div>
                这里是B
            </div>
            <div>
                <E/>
            </div>
        </div>
    );
}
