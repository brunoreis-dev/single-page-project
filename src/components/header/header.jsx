import { useRef, useEffect } from 'react'
import Container from '@components/container';
import logoImage from '@public/images/logo.png';
import { useState } from 'react';
import Elevator from 'elevator.js'
import { 
  HeaderWrapper,
  Content,
  Logo,
  LogoImg,
  Nav,
  MenuLink,
  MenuButton,
  Line,
} from './header.style';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [linkActive, setLinkActive] = useState('')
  const [headerHeight, setHeaderHeight] = useState('')
  const header = useRef(null)

  function toggleMenu() {
    let body = document.querySelector('body')
    setActiveMenu(!activeMenu)
    activeMenu ? body.style.overflow = 'visible' :  body.style.overflow = 'hidden'
  }

  function activeLinkOnScroll() {
    let body = document.querySelector('body');
    const dataIndex = document.querySelectorAll('[data-index]');
    
    dataIndex.forEach((item) => {
      let topSection = '';
      let sizeSection = item.offsetHeight;
      let botSection = '';

      if(window.innerWidth > 1600) {
        topSection = item.offsetTop - headerHeight - 100
        botSection = topSection + sizeSection - 100;
      } else {
        topSection = item.offsetTop - headerHeight - 50
        botSection = topSection + sizeSection - 50;
      }
      if(window.scrollY >= topSection && window.scrollY <= botSection) {
        setLinkActive(item.id)
      }
    })
    
    setActiveMenu(false)
    body.style.overflow = 'visible'
  }

  function activeLastItem() {
    setTimeout(() => {
      setLinkActive('faq')
    }, 1001)
  }

  useEffect(() => {
    const dataIndex = document.querySelectorAll('[data-index]')
    setHeaderHeight(header.current.clientHeight)
    window.addEventListener('scroll', activeLinkOnScroll)
    dataIndex.forEach((item) => {
      new Elevator(
        {
          element: document.querySelector(`.${item.id}`),
          targetElement: document.querySelector(`#${item.id}`),
          duration: 1000,
          verticalPadding: headerHeight,
        },
      )
    })
  }, [headerHeight])

  return (
    <HeaderWrapper ref={header}>
      <Container>
        <Content>
          <Logo><LogoImg src={logoImage} alt="Entra na Roda"/></Logo>
          <Nav active={activeMenu}>
            <MenuLink
              className="what-is"
              active={linkActive === 'what-is'}
            >
              o que é
            </MenuLink>
            <MenuLink 
              className="how-it-works"
              active={linkActive === 'how-it-works'} 
            >
              como funciona
            </MenuLink>
            <MenuLink 
              className="circles"
              active={linkActive === 'circles'} 
            >
              Guns
            </MenuLink>
            <MenuLink 
              className="about"
              active={linkActive === 'about'} 
            >
              quem somos
            </MenuLink>
            <MenuLink 
              className="plans"
              active={linkActive === 'plans'} 
              >
                episódios
              </MenuLink>
            <MenuLink 
              className="depositions"
              active={linkActive === 'depositions'} 
              >
                Depoímentos
              </MenuLink>
            <MenuLink 
              className="faq"
              active={linkActive === 'faq'}
              onClick={activeLastItem}
              >
                dúvidas
              </MenuLink>
          </Nav>
          <MenuButton onClick={toggleMenu} active={activeMenu}>
            <Line />
            <Line />
            <Line />
          </MenuButton>
        </Content>
      </Container>
  </HeaderWrapper>
  )
};

export default Header;