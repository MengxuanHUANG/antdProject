import { PureComponent } from 'react';
import { Icon, Button, Avatar, Badge, Typography } from 'antd';

const { Title, Text } = Typography;

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
        this.state = {};
    }
    render() {
        const { } = this.props;
        return (
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
                <div style={{ display: 'inline-block'}}>
                    <div style={{ display: 'inline-block', height: '50px', marginTop: '11px' }}>
                        <Button
                            icon="shopping-cart"
                            style={{ height: '50px', width: '50px', fontSize: '30px' }}
                        />
                    </div>
                    <div style={{ display: 'inline-block', height: '100%', marginLeft: '18px' }}>
                        <Title level={4}>{`Totle: $${18}`}</Title>
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
        );
    }
}

export default PageHeader;