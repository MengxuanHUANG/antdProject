import { PureComponent } from 'react';
import { Card, Icon, Typography } from 'antd';

const { Title, Text } = Typography;
const cardStyle = {
    margin: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
};

const divStyle={
    display: 'inline-block',
    width: '300px',
    margin: '20px'
}

function FoodCard(props) {
    const {
        id,
        images, 
        name, 
        price, 
        number,
        handleAdd,
        handleReduce
    } = props;
    return (
        <div key = {id} style={divStyle}>
            <Card
                style={cardStyle}
                headStyle={{ padding: '0px', margin: '0px' }}
                bodyStyle={{ padding: '0px' }}
                actions={[
                    <Icon 
                        type="minus-square" 
                        theme="filled" 
                        style={{ fontSize: '36px' }} 
                        onClick = {()=>handleAdd(id, price)}
                    />,
                    <Icon 
                        type="plus-square" 
                        theme="filled" 
                        style={{ fontSize: '36px' }} 
                        onClick = {()=>handleReduce(id, price)}
                    />
                ]}
                cover={<img alt="path error" width="298px" height="200px" src={images} />}
            >
                <Card.Meta
                    style={{ textAlign: 'center', margin:'10px'}}
                    title={
                    <div style={{fontSize:'20px', fontWeight:'border'}}>
                        <Text>{name}</Text>
                        <Text style={{marginLeft:"20px"}}>{price}</Text>
                    </div>}
                />
            </Card>
        </div>
    );
}

export { FoodCard };