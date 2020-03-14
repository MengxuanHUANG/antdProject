import { PureComponent } from 'react';
import {
    Layout,
    Anchor,
    Button,
    Avatar,
    Badge,
    Typography,
    Popover,
    List
} from 'antd';
const { Header } = Layout;
const { Title, Text } = Typography;
const ListItem = List.Item;

const divStyle = {
    display: 'inline-block',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    padding: '5px 3%'
};

class PageHeader extends PureComponent {
    constructor(props) {
        super(props);
        const { orderList, totalPrice, orderedFood } = this.props;
        this.state = {
            orderList: orderList ? orderList : [],
            totalPrice: totalPrice ? totalPrice : 0,
            orderedFood: orderedFood,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { orderList, totalPrice, orderedFood } = nextProps;
        if (totalPrice === prevState.totalPrice) return null;
        else {
            return {
                orderList: orderList,
                totalPrice: totalPrice,
                orderedFood: orderedFood
            };
        }
    }

    generateOrder = (list) => {
        const { totalPrice } = this.state;
        const { orderedFood } = this.props;
        return (
            <List
                footer={<Text level={4}>{`Total Price: ${totalPrice} HKD`}</Text>}
                dataSource={list}
                renderItem={(item) => (
                    <ListItem>
                        <Text>{item.name}</Text>
                        <Text style={{margin:'0px 5px'}}>{`x${orderedFood[item.id]}`}</Text>
                        <Text style={{margin:'0px 5px'}}>{`${item.price * orderedFood[item.id]} HKD`}</Text>
                    </ListItem>
                )}
            />);
    }

    render() {
        const { headerStyle } = this.props;
        const { orderList, totalPrice } = this.state;
        return (
            <Anchor style={{ margin: '0px', padding: '0px', width: '100%' }}>
                <Header style={headerStyle}>
                    <div style={divStyle}>
                        <div style={{ display: 'inline-block', height: '100%', float: 'right' }}>
                            <Badge count='1'>
                                <Avatar size={50} icon="user" />
                            </Badge>
                        </div>
                        <div style={{ display: 'inline-block', height: '100%', float: 'right', margin: '11px 20px 0px 0px' }}>
                            <Button
                                type="danger"
                                style={{ height: '24px', fontSize: '12px' }}
                            >
                                Log out
                            </Button>
                        </div>
                        <div style={{ display: 'inline-block' }}>
                            <div style={{ display: 'inline-block', height: '50px', marginTop: '11px' }}>
                                <Popover placement='bottomLeft' content={this.generateOrder(orderList)}>
                                    <Button
                                        icon="shopping-cart"
                                        style={{ height: '50px', width: '50px', fontSize: '30px' }}
                                    />
                                </Popover>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', marginLeft: '18px' }}>
                                <Title level={4}>{`Total: ${totalPrice} HKD`}</Title>
                            </div>
                            <div style={{ display: 'inline-block', height: '100%', margin: '11px 0px 0px 10px' }}>
                                <Button
                                    type="primary"
                                    icon="pay-circle"
                                    shape="round"
                                    style={{ height: '32px', fontSize: '18px' }}
                                >
                                    Pay
                                </Button>
                            </div>
                        </div>
                    </div>
                </Header>
            </Anchor>
        );
    }
}

export default PageHeader;