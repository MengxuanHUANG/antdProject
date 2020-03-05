import {PureComponent} from 'react';
import {SampleCard} from '../../components/sampleCard.js';
import {Typography} from 'antd';
import {formatMessage} from 'umi-plugin-react/locale';
const {Title, Text} = Typography;

class HomePage extends PureComponent{
    render(){
        return(
            <div>
                <Title level={1}>{formatMessage({id:'home.helloworld'})}</Title>
                <SampleCard/>
            </div>
        );
    }
}

export default HomePage;