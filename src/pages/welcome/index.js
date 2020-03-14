import {PureComponent} from 'react';
import {Button, Typography} from 'antd';
import ContentWrapper from '../../components/contentWrapper';

const {Title, Text} = Typography;

class Welcome extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ContentWrapper>
                <Title level={3}>Welcome</Title>
            </ContentWrapper>
        );
    }
}

export default Welcome;