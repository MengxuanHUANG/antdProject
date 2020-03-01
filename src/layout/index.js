import { PureComponent } from 'react';
import { Layout, Icon, Typography, Menu } from 'antd';
import Link from 'umi/link';

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
    constructor(props) {
        super(props);
        this.state={
            menuItems:[],
        }
    }
    componentDidMount = () => {
        const menuList=['Home','page1', 'page2', 'page3'];
        const menuItems=new Array(menuList.length);
        menuList.forEach((value,index)=>{
            menuItems.push(
                <MenuItem key={`${index}`}>
                    <Link to={`/${value}`}></Link>
                    <Icon type="fire" theme="filled" style={{ fontSize: '20px' }} />
                    <Text style={{ color: 'white' }}>{value}</Text>
                </MenuItem>
            );
        });
        this.setState({
            menuItems:menuItems,
        })
    }
    render() {
        const {menuItems}=this.state;
        const {children} =this.props;
        return (
            <Layout>
                <Sider style={siderStyle}>
                    <div style={{ margin: '10px' }}>
                        <Icon type="ant-design" style={{ fontSize: '40px' }} />
                        <Title level={3} style={{ color: "white", display: 'inline-block', margin: '10px 0px 10px 30px' }}>Menu</Title>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                        {menuItems}
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <Title level={1}>
                            This is page header
                        </Title>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Powered by antd-design</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;