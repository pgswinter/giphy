import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ItemImage.styles';
import ImageLoader from 'react-imageloader';
import loading from '../../../../images/loading.gif';
import like from '../../../../images/like.png';

const preloader = () => {
  return <img src={loading} alt="loading" />;
}

const onHandleFavourite = (props) => {
  const id = props && props.item && props.item.id
  props.handleFavourite(id)
}

const ItemImage = (props) => {
  const { item } = props;
  
  const image = item && item.images && item.images.downsized_medium;

  return (
    <li className={`item__img-list${item.is_favourite ? ' active' : ''}`} onClick={() => onHandleFavourite(props)}>
      <div className="favourite">
        <img width='70' height='70' src={like} alt="_like" />
      </div>
      <ImageLoader
        src={image.url}
        wrapper={React.createFactory('div')}
        preloader={preloader}>
        Image load failed!
      </ImageLoader>
    </li>
  )
};

ItemImage.propTypes = {
  item: PropTypes.object,
};

ItemImage.defaultProps = {
  // bla: 'test',
};

export default ItemImage;
