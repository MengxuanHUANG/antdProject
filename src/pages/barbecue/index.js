import {PureComponent} from 'react';

import {FoodCard} from '../../components/foodCard';
import image1 from '../../images/barbecue/image_1.jpg';


class Barbecue extends PureComponent{
    constructor(props){
        super(props);
        this.state={
        }
    }
    handleAdd = (id, price)=>{
        console.log("id: "+ id+'\n'+"price: "+ price);
    }
    handleReduce = (id, price)=>{
        console.log("id: "+ id+'\n'+"price: "+ price);
    }
    generateCards = ()=>{
        let cards = [];
        for(let i=0;i<8;++i){
            cards = cards.concat(
            <FoodCard 
                key= {i}
                id={i} 
                images={image1} 
                name="叉烧饭" 
                price="$18" 
                handleAdd={this.handleAdd}
                handleReduce = {this.handleReduce}
            />);
        }
        //console.log(cards);
        return cards;
    }
    render(){
        return(
            <div>
                {this.generateCards()}
            </div>
        );
    }
}

export default Barbecue;