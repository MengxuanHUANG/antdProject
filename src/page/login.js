import React from 'react';
import {Card} from 'antd';


const cardStyle={
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
};
class Login extends React.PureComponent{
    render(){
        return(
            <div>
                <Card style={cardStyle} actions={[<a>confirm</a>, <a>cancle</a>]}>

                </Card>
            </div>
        );
    }
}

export default Login;