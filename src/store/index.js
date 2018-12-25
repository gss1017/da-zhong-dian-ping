import {createStore} from 'redux';
import rootReducers from '../reducers';

export default function configStore(initialState = {}) {
    return createStore(rootReducers, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );
}
