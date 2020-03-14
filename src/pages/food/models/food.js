import { POST } from '../../../services/POST';

import { message } from 'antd';

export default {
    namespace: 'food',
    state: {
        foodList:[]
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            const url = '/api/servlet/fetchFoodList';
            console.log(payload);
            const response= {
                result:'success'
            };
            yield put({ type: 'setFoodList', payload: response });
        }
    },
    reducers: {
        setFoodList(state, { payload: response }) {
            const foodList = [
                {
                    id:'0001',
                    name:'叉烧饭',
                    price: 20,
                },
                {
                    id:'0002',
                    name:'烧鹅饭',
                    price: 30,
                },
                {
                    id:'0003',
                    name:'焗猪扒饭',
                    price: 23,
                },
                {
                    id:'0004',
                    name:'桂林米粉',
                    price: 40,
                },
                {
                    id:'0005',
                    name: '红烧牛肉面',
                    price: 42,
                }
            ];
            if (response.result == 'success') {
                return {
                    foodList: foodList
                }
            }
            else {
                message.error(
                    response.msg,
                    0.5,
                );
            }
        }
    }
}