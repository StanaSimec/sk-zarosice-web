import classNames from 'classnames';
import { useState } from 'react';
import logo from '../../logo.png';
import { TEAM_CATEGORIES } from '../../shared/constants';
import { LINKS } from '../../shared/links';
import Link from '../Link/Link';
import { TEXT_SIZE } from '../Text/Text';

import './Header.scss';

const CategoryLink = ({ prefix }) => {
  return <Link href={LINKS[prefix]} text={TEAM_CATEGORIES[prefix]} />;
};

const Links = () => {
  return (
    <>
      <CategoryLink prefix='A_TEAM' />
      <CategoryLink prefix='U19' />
      <CategoryLink prefix='U15' />
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
      <Link text='SK Žarošice' href='/' size={TEXT_SIZE.BIG} />
    </div>
  );
};

const Burger = ({ isOpen, onClick }) => {
  return (
    <div
      className={classNames({ burger: true, burger__open: isOpen })}
      onClick={onClick}
    >
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
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
    <div className='header'>
      <div
        className={classNames({
          'header-bar': true,
          'header-bar__bordered': !isBurgerOpen,
        })}
      >
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
