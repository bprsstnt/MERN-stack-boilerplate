import React, {useState, useEffect} from 'react'
import { LoginOutlined, SmileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom'

const items = [
  {
    label: (<a href={`/`}>Home</a>),
    key: 'home',
  },
  {
    label: (<a href={`/login`}>Login</a>),
    key: 'login',
    icon: <LoginOutlined />,
  },
  {
    label: (<a href={`/register`}>Sign Up</a>),
    key: 'register',
    icon: <SmileOutlined />,
  }
];

const NavBar = () => {
  const location = useLocation();
  const [current, setCurrent] = useState('');

  useEffect(() => {
    let slug = location.pathname.split('/')[1];
    if(slug === '') {
      slug = "home";
    }

    setCurrent(slug);
  }, [current, location.pathname])
  
  const onClick = (e) => {
    setCurrent(e.key);
  }

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  )
}

export default NavBar