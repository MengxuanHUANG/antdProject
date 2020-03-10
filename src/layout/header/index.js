import { PureComponent } from 'react';
import { Icon, Button } from 'antd';

const divStyle = {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    padding: '5px 10px'
};

class PageHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {}=this.props;
        return (
            <div style={divStyle}>
                <div style={{ display: 'inline-block', height: '50px' }}>
                    <Button
                        shape="circle"
                        icon="shopping-cart"
                        style={{height:'50px', width:'50px', fontSize:'30px'}}
                    />
                </div>
            </div>
        );
    }
}

export default PageHeader;