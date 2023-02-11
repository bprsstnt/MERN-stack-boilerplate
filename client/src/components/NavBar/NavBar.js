import React, {useState, useEffect} from 'react'
import { LoginOutlined, SmileOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authUser } from '../../_actions/userActions';

const inactiveUserMenu = [
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

const activeUserMenu = [
  {
    label: (<a href={`/`}>Home</a>),
    key: 'home',
  },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [current, setCurrent] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let slug = location.pathname.split('/')[1];
    if(slug === '') {
      slug = "home";
    }

    setCurrent(slug);

    dispatch(authUser())
    .payload 
    .then(res => {
      if(!res.error) {
        setIsActive(true);
      }
    })
  }, [current, location.pathname, dispatch])
  
  const onClick = (e) => {
    setCurrent(e.key);
  }

  return (
    <>
      {!isActive && (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={inactiveUserMenu} />
      )}
      {isActive && (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={activeUserMenu} />
      )}
    </>
  )
}

export default NavBar