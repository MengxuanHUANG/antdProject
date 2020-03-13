import { PureComponent } from 'react';
import { Layout, Icon, Button, Typography, Anchor, Menu } from 'antd';
import { MenuOutlined, HomeOutline } from '@ant-design/icons';
import { connect } from 'dva';
import Link from 'umi/link';

import PageHeader from '../header/index';

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
    height: '100%',
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
        this.state = {
            selectKey: '',
            collapsed: true,
        }
    }
    componentDidMount() {
        //check login

        //request menu
        const data = {};
        this.props.fetchMenu(data);
    }
    generateMenuItems = (menulist, sub) => {
        if (!menulist) return [];
        return menulist.map((value, index) => {
            return (
                <MenuItem key={`${sub}.${index}`}>
                    <Icon type="book" theme="filled" style={{ fontSize: '20px' }} />
                    <Text style={{ color: 'white' }}>{value.name}</Text>
                    {value.link ?
                        <Link to={`/home/${value.link}`}></Link> :
                        <Link to={`/home/food?key=${value.id}`}></Link>
                    }
                </MenuItem>
            );
        });
    }
    generateSubMenu = (menulist) => {
        if (!menulist) return [];
        return menulist.map((value, index) => {
            if (value.subMenu.length) {
                return (
                    <SubMenu key={`${index}`} title={
                        <div>
                            <Icon type="fire" theme="filled" style={{ fontSize: '20px' }} />
                            <Text style={{ color: 'white' }}>{value.name}</Text>
                        </div>}>
                        {this.generateMenuItems(value.subMenu, index)}
                    </SubMenu>
                );
            }
            else {
                return (
                    <MenuItem key={`${index}`}>
                        <Icon type="fire" theme="filled" style={{ fontSize: '20px' }} />
                        <span style={{ color: 'white' }}>{value.name}</span>
                    </MenuItem>
                );
            }
        });
    }
    handleMenuClick = (e) => {
        this.setState({
            selectKey: e.key
        });
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const { children, menuList } = this.props;
        return (
            <Layout>
                <Anchor style={{ padding: '0px' }}>
                    <Sider
                        style={siderStyle}
                        collapsed={this.state.collapsed}
                    >
                        <div
                            style={{ display: 'inline-block', textAlign: 'center', width: '100%', padding: '5px' }}
                            onClick={this.toggleCollapsed}
                        >
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ fontSize: '20px' }} />
                        </div>
                        <Menu
                            theme="dark" mode="inline"
                            defaultSelectedKeys={['1.0']}
                            onClick={(e) => this.handleMenuClick(e)}
                        >
                            {this.generateSubMenu(menuList)}
                        </Menu>
                    </Sider>
                </Anchor>
                <Layout>
                    <Anchor style={{ margin: '0px', padding: '0px', width: '100%' }}>
                        <Header style={headerStyle}>
                            <PageHeader />
                        </Header>
                    </Anchor>
                    <Content style={{ margin: '24px 16px 0' }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Powered by antd-design
                    </Footer>
                </Layout>

            </Layout>
        );
    }
}

export default BasicLayout;