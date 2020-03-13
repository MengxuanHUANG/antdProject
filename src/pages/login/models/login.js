import { POST } from '../../../services/POST';
import router from 'umi/router';
import { message } from 'antd';

export default {
    namespace: 'login',
    state: {},
    effects: {
        *login({ payload }, { call, put }) {
            const url = '/api/user/login';
            const response = yield call(POST, { data: payload, url });
            yield put({ type: 'loginResult', payload: response });
        }
    },
    reducers: {
        loginResult(state, { payload: response }) {
            if (response.result === 'success') {
                //console.log(response.token);
                const token = response.token;
                if(token)
                {
                    window.localStorage.setItem('cookies', token.substring(0,90));
                    window.localStorage.setItem('chocolate', token.substring(90,180));
                }
                message.success(
                    response.msg,
                    1.5,
                    () => { router.push('./home/food'); }
                )
            }
            else {
                message.error(response.msg, 2)
            }
            return {};
        }
    }
}