import { PureComponent } from 'react';
import { Card, Icon, Typography, Badge } from 'antd';

const { Title, Text } = Typography;
const cardStyle = {
    margin: '0px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
};

const divStyle = {
    display: 'inline-block',
    width: '270px',
    margin: '20px'
}

function FoodCard(props) {
    const {
        id,
        images,
        name,
        price,
        count,
        handleAdd,
        handleReduce
    } = props;
    return (
        <div style={divStyle}>
            <Badge count={count ? count:0}>
                <Card
                    style={cardStyle}
                    headStyle={{ padding: '0px', margin: '0px' }}
                    bodyStyle={{ padding: '0px' }}
                    actions={[
                        <Icon
                            type="minus-square"
                            theme="filled"
                            style={{ fontSize: '36px' }}
                            onClick={() => handleReduce(id, name, price)}
                        />,
                        <Icon
                            type="plus-square"
                            theme="filled"
                            style={{ fontSize: '36px' }}
                            onClick={() => handleAdd(id, name, price)}
                        />
                    ]}
                    cover={<img alt="path error" width="298px" height="200px" src={images} />}
                >
                    <Card.Meta
                        style={{ textAlign: 'center', margin: '10px' }}
                        title={
                            <div style={{ fontSize: '20px', fontWeight: 'border' }}>
                                <Text>{name}</Text>
                                <Text style={{ marginLeft: "20px" }}>{`${price}HKD`}</Text>
                            </div>}
                    />
                </Card>
            </Badge>
        </div>
    );
}

export default FoodCard;