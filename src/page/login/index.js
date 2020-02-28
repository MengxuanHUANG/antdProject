import { PureComponent } from 'react';
import { Input, Typography, Row, Col, Button } from 'antd';
import { hashHistory } from 'react-router';
import bgImage from '../../images/login/login_back.jpg';

const { Title, Text } = Typography;

const backgroundStyle = {
    width: '100%',
    height: '100%',
    minHeight: '750px',
    display: 'inline-block',
    textAlign: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundSize:'100% 100%',
    backgroundRepeat: 'no-repeat',
};
class Login extends PureComponent {

    onSignUp = ()=>{
        const history=this.props.history;
        history.push('/home');
    }

    render() {
        const {onSignUp} = this;
        return (
            <div style={backgroundStyle}>
                <Title level={1} style={{ marginTop: '200px', color:'white'}}>Welcome to Our Web Page</Title>
                <Title level={2} style={{ marginTop: '50px', color:'white' }}>Start Now !</Title>
                <div style={{marginTop: '40px'}}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Button 
                                size='large' 
                                type="primary" 
                                style={{ width: '150px', height: '50px' }}
                                onClick={onSignUp}
                            >
                                Log in
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                size='large'
                                style={{ width: '150px', height: '50px', background: '#36cfc9', color: 'white' }}>
                                Sign up
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Login;