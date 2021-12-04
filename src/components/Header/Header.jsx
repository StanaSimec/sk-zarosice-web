import classNames from 'classnames';
import { useState } from 'react';
import logo from '../../logo.png';
import Link from '../Link/Link';
import Text from '../Text/Text';

import './Header.scss';

const Links = () => {
  return (
    <div className='links'>
      <Link href='/' text='A-tým' />
      <Link href='/' text='Dorost' />
      <Link href='/' text='Žáci' />
    </div>
  );
};

const Logo = () => {
  return <img className='logo' src={logo} alt='logo klubu' />;
};

const Name = () => {
  return (
    <div className='name'>
      <Link text='SK Žarošice' textIsHeader={true} href='/' />
      <Text text='Webové stránky fotbalového klubu' />
    </div>
  );
};

const Burger = ({ isOpen, onClick }) => {
  return (
    <div className={classNames({ burger: true, burger__open: isOpen })} onClick={onClick}>
      <span class='bar'></span>
      <span class='bar'></span>
      <span class='bar'></span>
    </div>
  );
};

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <div className='header'>
      <div className='description'>
        <Logo />
        <Name />
      </div>
      <Links />
      <Burger
        isOpen={isBurgerOpen}
        onClick={() => setIsBurgerOpen((isOpen) => !isOpen)}
      />
    </div>
  );
};

export default Header;
