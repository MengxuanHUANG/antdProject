import {PureComponent, Component} from 'react';
import {Layout} from 'antd';

const {Content} = Layout;

class ContentWrapper extends PureComponent{
    constructor(props){
        super(props);
    }

    render(){
        const {children} = this.props;
        return(
                <Content>
                    {children}
                </Content>
        );
    }
}

export default ContentWrapper;