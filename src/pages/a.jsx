import React from 'react';
import map from 'lodash/map';

export default function () {
    return (
        <div>
            <div>这里是A</div>
            {map([1, 2, 3], (item) => {
                return (
                    <div key={item}>
                        {item}
                    </div>
                );
            })}
        </div>
    );
}
