import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
    SnippetsOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  import '../../assets/css/layout.css'
  import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


  
  const { Header, Sider, Content } = Layout;

  const DefaultLayout = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h3 >LMS</h3>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon:  <HomeOutlined />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/'> Dashboard </Link>,
              },
              {
                key: '2',
                icon: <LibraryBooksIcon />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/books' >  Books </Link>,
              },
              {
                key: '3',
                icon: <SnippetsOutlined />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/news-paper' >  News Paper </Link>,
              },
      
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              width:'98%',
              margin:"auto",
              // marginLeft:15,
              background: colorBgContainer,
            }}
          >
            
           <div className='d-flex justify-content-between'>
                <div>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                      className: 'trigger',
                      onClick: () => setCollapsed(!collapsed),
                    })}
              </div>
              <div className="logo w-100 d-flex justify-content-center align-items-center ">
            <h3  >Library Management System</h3>
          </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default DefaultLayout;