import { put, call, take,fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga/effects'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    // 延迟 1s 在执行 + 1操作
    yield call(delay, 1000);
    yield put({ type: 'INCREMENT' });
}

/*
function* changeCheckedList() {
    yield put({ type: 'CHECKED_LIST' });
}
*/


export default function* rootSaga() {
    // while(true){
    //   yield take('INCREMENT_ASYNC');
    //   yield fork(incrementAsync);
    // }

    // 下面的写法与上面的写法上等效
    yield takeEvery("INCREMENT", incrementAsync)
}