import { POST } from '../../../../services/POST';

export default {
    namespace: 'login',
    state: {
        succcess: false,
    },
    effects: {
        *login({ payload }, { call, put }) {
            const url = '/servlet/Login';
            //console.log(login);
            const response = yield call(POST, { data: payload, url });
            console.log(response);
            yield put({ type: 'loginResult', payload: response });
        }
    },
    reducers: {
        loginResult(state, { payload: data }) {
            return {
                success: data.result === 'success' ? true : false,
            };
        }
    }
}