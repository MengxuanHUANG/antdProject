import {PureComponent} from 'react';
import {Typography} from 'antd';

const {Title, Text} = Typography;

class UserManagement extends PureComponent{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div>
                <Title level={3}>This is userManagement Page</Title>
            </div>
        );
    }
}

export default UserManagement;