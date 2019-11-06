import {
    all,
    fork
} from 'redux-saga/effects';

import giphy from './sagas/giphy';

export default function* () {
    yield all([
        fork(giphy)
    ])
}