import { PureComponent } from 'react';
import { Layout, Icon, Typography, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Text, Title } = Typography;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const siderStyle = {
    width: 256,
    minHeight: '100vh',
    color: '#fff'
};
const headerStyle = {
    background: '#fff',
    textAlign: 'center',
    padding: 0,
};
class BasicLayout extends PureComponent {
    render() {
        return (
            <Layout>
                <Sider style={siderStyle}>
                    <div style={{ margin: '10px' }}>
                        <Icon type="ant-design" style={{ fontSize: '40px' }} />
                        <Title level={3} style={{ color: "white", display: 'inline-block', margin: '10px 0px 10px 30px' }}>Menu</Title>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <MenuItem key='1'>
                            <Icon type="fire" theme="filled" style={{fontSize:'20px'}}/>
                            <Text style={{color:'white'}}>Home</Text>
                        </MenuItem>
                        <MenuItem key={['2']}>
                            <Icon type="apple" theme="filled" style={{fontSize:'20px'}}/>
                            <Text style={{color:'white'}}>Page1</Text>
                        </MenuItem>
                        <MenuItem key={['3']}>
                            <Icon type="crown" theme="twoTone" style={{fontSize:'20px'}}/>
                            <Text style={{color:'white'}}>Page2</Text>
                        </MenuItem>
                        <MenuItem key={['4']}>
                            <Icon type="dollar" theme="twoTone" style={{fontSize:'20px'}}/>
                            <Text style={{color:'white'}}>Page3</Text>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <Title level={1}>
                            Welcome to Home Page
                        </Title>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}></Content>
                    <Footer style={{ textAlign: 'center' }}>Provided by IMT-HMX</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;