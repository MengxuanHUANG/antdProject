import { Component } from 'react';
import { connect } from 'dva';
import ContentWrapper from './components/contentWrapper';

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
            foodList: [],
        }
    }

    componentDidMount() {
        const data = {
            key: this.props.location.query.key
        }
        this.props.fetch(data);
    }
    componentDidUpdate(prevProps, prevState) {
        const key = this.state.key;
        if (prevState.key != this.state.key) this.props.fetch({ key: key });
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.key == nextState.key && this.state.foodList == nextState.foodList) return false;
        else {
            return true;
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const key = nextProps.location.query.key;
        const foodList = nextProps.foodList;
        if (key === prevState.key && foodList === prevState.foodList) return null;
        else {
            return {
                key: key,
                foodList: foodList
            };
        }
    }
    render() {
        return (
            <div>
                <ContentWrapper
                    foodList={this.state.foodList}
                />
            </div>
        );
    }
}

export default Food;