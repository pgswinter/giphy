import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';

const Header = (props) => {
  const { favourite } = props;
  return (
    <div className="hedaerWrapper">
      <h1> <span className='left'>Galler<strong>easy</strong></span> | <label>Search</label> <span className='right'>Favourite</span>{favourite}</h1>
    </div>
  )
};

Header.propTypes = {
  favourite: PropTypes.number,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
