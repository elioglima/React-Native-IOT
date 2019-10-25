import { all, takeLatest, takeEvery } from 'redux-saga/effects'
import { loginSaga } from './loginSaga'

export default function* rootSaga() {
    yield all([
        takeEvery('LOGIN', loginSaga),
    ])
}
