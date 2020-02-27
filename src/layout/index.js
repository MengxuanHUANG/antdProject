import {PureComponent} from 'react';
import {Layout} from 'antd';

const {Header, Footer, Sider, Content}=Layout;

const siderStyle={
    width: 256,
    minHeight: '100vh',
    color: '#fff'
};
const headerStyle={
    background: '#fff',
    textAlign: 'center',
    padding: 0,
};
class BasicLayout extends PureComponent{
    render(){
        return(
            <Layout>
                <Sider style={siderStyle}>Main Menu</Sider>
                <Layout>
                    <Header style={headerStyle}>Welcome to Home Page</Header>
                    <Content style={{ margin: '24px 16px 0' }}></Content>
                    <Footer style={{ textAlign: 'center' }}>Provided by IMT-HMX</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;