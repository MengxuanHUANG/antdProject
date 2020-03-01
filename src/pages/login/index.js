import { PureComponent } from 'react';
import { Input, Typography, Button, Divider } from 'antd';
import router from 'umi/router';
import bgImage from '../../images/login/login.jpg';

const { Title, Text } = Typography;

const backgroundStyle = {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    minHeight: '770px',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
};
const coverStyle = {
    display: 'inline-block',
    margin: '10% 0% 0% 50%',
    textAlign: 'center',
    width: '35%',
    height: '60%',
    backgroundColor: '#ffe7ba8c',
    borderRadius: '3px',
};
const inputStyle = {
    margin: '10px 0px 10px 0px',
    width: '85%',
    height: '30px',
};
class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    onSignin = () => {
        router.push('/home');
    }
    onSignup = () => {

    }
    handleUsrInput = (e) => {
        //console.log(e.target.value);
        this.setState({
            username: e.target.value,
        });
    }
    handlePasswdInput = (e) => {
        this.setState({
            password: e.target.value,
        });
    }
    handleForgetPasswd = () => {

    }
    render() {
        const { onSignin, handleUsrInput, handlePasswdInput, handleForgetPasswd, onSignup } = this;
        return (
            <div style={backgroundStyle}>
                <div style={coverStyle}>
                    <Title style={{ marginTop: '20px', fontSize: '30px' }}>Start Order Now!</Title>
                    <div style={{ display: 'inline-block', marginTop: '10px', width: '70%' }}>
                        <Input style={inputStyle} placeholder="username" onChange={handleUsrInput} />
                        <Input.Password style={inputStyle} placeholder="password" onChange={handlePasswdInput} />
                        <Button
                            style={{ width: '85%', height: '50px', fontSize: '20px', margin: '10px 0px 10px 0px' }}
                            type='primary'
                            onClick={onSignin}>
                            Sign in
                        </Button>
                        <div style={{ dispaly: 'inline-block', margin: '10px 0px 10px 0px', width: '100%' }}>
                            <Text onClick={handleForgetPasswd} style={{ fontSize: '18px' }} underline>Forget Password?</Text>
                        </div>
                    </div>
                    <div style={{ display: 'inline-block', margin: '10px 0px 10px 0px', width: '90%' }}>
                        <Divider style={{ backgroundColor: '#777070' }} />
                    </div>
                    <div style={{ display: 'inline-block', width: '70%', margin: '10px 0px 20px 0px' }}>
                        <div style={{ display: 'inline-block', width: '100%' }}>
                            <Title level={3} style={{ color: '##85a5ff' }}>New User?</Title>
                        </div>
                        <Button
                            style={{ 
                                width: '80%', 
                                height: '40px', 
                                backgroundColor: '#5cdbd3', 
                                border: 'none', 
                                color: 'white' 
                            }}
                            onClick={onSignup}>
                                Quick Sign up
                            </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;