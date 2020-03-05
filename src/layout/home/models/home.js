import { POST } from '../../../services/POST';
import router from 'umi/router';
import { message } from 'antd';

const callback = (errorCode) => {
    router.push('/');
}

export default {
    namespace: 'home',
    state: {
        menuList: [],
    },
    effects: {
        *fetchMenu({ payload }, { call, put }) {
            const url = '/api/servlet/fetchMenuList';

            //temp data
            var response = yield call(POST, { data: payload, url });
            yield put({ type: 'setMenuList', payload: response });
        }
    },
    reducers: {
        setMenuList(state, { payload: response }) {
            const menulist = [
                {
                    id: '1',
                    name: 'Home',
                    link: 'home',
                },
                {
                    id: '2',
                    name: 'page2',
                    link: 'page2',
                },
                {
                    id: '3',
                    name: 'page3',
                    link: 'page3',
                },
                {
                    id: '4',
                    name: 'page4',
                    link: 'page4',
                },
            ]
            if (response.result === 'success') {
                
                return {
                    menuList: menulist,
                }
            }
            else {
                message.error(
                    response.msg,
                    0.5,
                    () => callback(response.errorCode)
                );
            }
            return {};
        }
    }
}