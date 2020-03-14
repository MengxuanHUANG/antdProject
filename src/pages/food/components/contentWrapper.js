import { PureComponent, Component } from 'react';
import { Layout } from 'antd';
import FoodCard from '../../../components/food/foodCard';
const { Content } = Layout;

import PageHeader from './pageHeader';

import image1 from '../../../images/barbecue/image_1.jpg';

const imgArr = [
    'image_1',
    'image_2',
    'image_3',
    'image_4',
    'image_5'
];
const images = imgArr.map((value, index) => require(`../../../images/barbecue/${value}.jpg`));

const headerStyle = {
    height: '100%',
    background: '#fff',
    textAlign: 'center',
    padding: 0,
};

class ContentWrapper extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            orderedFood: {},
            totalPrice: 0,
        }
    }
    generateCards = (foodList) => {
        const { handleAdd, handleReduce } = this;
        const { orderLists, orderedFood } = this.state;
        return foodList.map((value, index) => {
            return (
                <FoodCard
                    key={index}
                    id={value.id}
                    images={images[index]}
                    name={value.name}
                    price={value.price}
                    count={orderedFood[value.id]}
                    handleAdd={handleAdd}
                    handleReduce={handleReduce}
                />
            );
        });
    }
    handleAdd = (id, name, price) => {
        //console.log("id: " + id + '\n' + "price: " + price);
        const { orderList, totalPrice, orderedFood } = this.state;
        const orderLists = orderList.splice(0);
        let orderedFoods = orderedFood;
        let item;
        if (!orderedFoods[id]) {
            orderedFoods[id] = 1;
            item = {
                id: id,
                name: name,
                price: price,
            };
        }
        else {
            orderedFoods[id] += 1;
        }
        this.setState({
            orderList: item ? orderLists.concat([item]) : orderLists,
            totalPrice: totalPrice + price,
            orderedFood: orderedFoods
        });
    }
    handleReduce = (id, name, price) => {
        //console.log("id: " + id + '\n' + "price: " + price);
        const { orderList, totalPrice, orderedFood } = this.state;
        let orderedFoods = orderedFood;
        if (!orderedFoods[id]) return;
        orderedFoods[id] -= 1;

        const orderLists = orderedFoods[id] === 0 ?
            orderList.filter((item) => (item.id !== id)) :
            orderList.splice(0);
        this.setState({
            orderList: orderLists,
            totalPrice: totalPrice - price,
            orderedFood: orderedFoods
        });
    }
    render() {
        const { foodList } = this.props;
        const { handleAdd, handleReduce } = this;
        const { orderList, totalPrice, orderedFood } = this.state;
        return (
            <div>
                <PageHeader
                    headerStyle={headerStyle}
                    orderList={orderList}
                    totalPrice={totalPrice}
                    orderedFood={orderedFood}
                />
                <Content style={{ margin: '24px 8px 0' }}>
                    {this.generateCards(foodList)}
                </Content>
            </div>
        );
    }
}

export default ContentWrapper;