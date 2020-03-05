import { PureComponent } from 'react';
import { Layout, Icon, Typography, Menu } from 'antd';
import { connect } from 'dva';
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

const namespace = 'home';
const mapStateToProps = (state) => {
    const { menuList } = state[namespace];
    return {
        menuList,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMenu: (data) => {
            dispatch({
                type: `${namespace}/fetchMenu`,
                payload: data,
            });
        },
    };
};
@connect(mapStateToProps, mapDispatchToProps)
class BasicLayout extends PureComponent {
    constructor(props) {
        super(props);
        const data = {};
        this.state = {}
    }
    componentDidMount() {
        //check login

        //request menu
        const data = {};
        this.props.fetchMenu(data);
    }
    render() {
        const { children, menuList } = this.props;
        let menuItems = [];
        if (menuList) {
            menuItems = menuList.map((value, index) => {
                return (
                    <MenuItem key={`${index}`}>
                        <Link to={value.link}></Link>
                        <Icon type="fire" theme="filled" style={{ fontSize: '20px' }} />
                        <Text style={{ color: 'white' }}>{value.name}</Text>
                    </MenuItem>
                );
            });
        }
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