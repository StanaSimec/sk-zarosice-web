import classNames from 'classnames';
import { useState } from 'react';
import logo from '../../logo.png';
import Link from '../Link/Link';
import Text from '../Text/Text';

import './Header.scss';
const Links = () => {
  return (
    <>
      <Link href='/' text='A-tým' />
      <Link href='/' text='Dorost' />
      <Link href='/' text='Žáci' />
    </>
  );
};
const HeaderLinks = () => {
  return (
    <div className='links'>
      <Links />
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
      <Text text='Web sportovního klubu' />
    </div>
  );
};

const Burger = ({ isOpen, onClick }) => {
  return (
    <div
      className={classNames({ burger: true, burger__open: isOpen })}
      onClick={onClick}
    >
      <span class='bar'></span>
      <span class='bar'></span>
      <span class='bar'></span>
    </div>
  );
};

const DropDownLinks = () => {
  return (
    <div className='drop-links'>
      <Links />
    </div>
  );
};

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <div className="header">
      <div className='header-bar'>
        <div className='description'>
          <Logo />
          <Name />
        </div>
        <HeaderLinks />
        <Burger
          isOpen={isBurgerOpen}
          onClick={() => setIsBurgerOpen((isOpen) => !isOpen)}
        />
      </div>
      {isBurgerOpen && <DropDownLinks />}
    </div>
  );
};

export default Header;
