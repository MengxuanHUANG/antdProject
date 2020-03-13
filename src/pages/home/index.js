import { Component } from 'react';
import { connect } from 'dva';
import { FoodCard } from '../../components/foodCard';
import image1 from '../../images/barbecue/image_1.jpg';

const namespace = 'food';
const mapStateToProps = (state) => {
    const { foodList } = state[namespace];
    return {
        foodList,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetch: (data) => {
            dispatch({
                type: `${namespace}/fetch`,
                payload: data,
            });
        },
    };
};
@connect(mapStateToProps, mapDispatchToProps)
class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            foodList:[]
        }
    }
    handleAdd = (id, price) => {
        console.log("id: " + id + '\n' + "price: " + price);
    }
    handleReduce = (id, price) => {
        console.log("id: " + id + '\n' + "price: " + price);
    }
    generateCards = (foodList) => {
        const { handleAdd, handleReduce } = this;
        return foodList.map((value, index) => {
            return (
                <FoodCard
                    key={index}
                    id={value.id}
                    images={image1}
                    name={value.name}
                    price={value.price}
                    handleAdd={handleAdd}
                    handleReduce={handleReduce}
                />
            );
        });
    }
    componentDidMount(){
        const data = {
            key: this.props.location.query.key
        }
        this.props.fetch(data);
    }
    componentDidUpdate(prevProps, prevState){
        const key = this.state.key;
        if(prevState.key != this.state.key) this.props.fetch({key: key});
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.key == nextState.key && this.state.foodList == nextState.foodList) return false;
        else {
            return true;
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const key = nextProps.location.query.key;
        const foodList = nextProps.foodList;
        if(key === prevState.key && foodList ===prevState.foodList) return null;
        else{
            return { 
                key: key,
                foodList: foodList
            };
        } 
    }
    render() {
        const { foodList } = this.state;
        console.log(foodList);
        return (
            <div>
                {this.generateCards(foodList)}
            </div>
        );
    }
}

export default Food;