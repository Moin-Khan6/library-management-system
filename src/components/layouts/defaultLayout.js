import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HomeOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import '../../assets/css/layout.css'
  import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { signOutValidUser } from '../../store/authSlice';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArticleIcon from '@mui/icons-material/Article';


  const { Header, Sider, Content } = Layout;

  const DefaultLayout = ({children}) => {
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

   
    const handleLogoutClick = () => {
      // Handle logout click
      dispatch(signOutValidUser())
      console.log('Logout clicked');
    };

    useEffect(() => {
     
      const handleResize = () => {
        if (window.innerWidth < 768) { 
          setCollapsed(true);
        } else {
          setCollapsed(false);
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      setIsLoaded(true);
    }, []);

    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout className={`default-layout ${isLoaded ? 'loaded' : ''}`}>
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
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/dash-board'>Dashboard </Link>,
              },
              {
                key: '2',
                icon: <LibraryBooksIcon  />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='books' >  Books </Link>,
              },
              {
                key: '3',
                icon: <FiberNewIcon  />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='news-paper' >  News Paper </Link>,
              },
              {
                key: '4',
                icon: <ArticleIcon />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='docuementories' >  docuementories </Link>,
              },
              {
                key: '5',
                icon: <LogoutIcon />,
                label: <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ='/'   onClick={handleLogoutClick} >  Logout </Link>,
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
              
              <div className="logo w-100 d-flex justify-content-around align-items-center ">
           
            <h3 className='ms-2 my-3'>Library Management App</h3>
       
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