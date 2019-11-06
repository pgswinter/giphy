import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './HomePage.styles';

import Loading from '../Loading';
import ItemImage from './components/ItemImage';

import {
  reqAllFavourite,
  reqInsertFavourite,
  reqSearchGiphy,
  reqProcessLocal
} from '../../actions/giphyActions/giphyActions';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newGiphyList: [], // Giphy image includes is_favourite attr
      favouriteList: [],
      searchInput: '',
      apiInfo: {
        q: '', // keyword search
        limit: 20,
        offset: 0,
        rating: 'G',
        lang: 'en'
      }
    };
  }

  componentDidMount = () => {
    this.props.reqAllFavourite();
  }

  handleFavourite = (id) => {
    this.props.reqProcessLocal(id);

    // Save to database
    const { giphyList: { data: { favourite_item } } } = this.props;
    this.props.reqInsertFavourite(favourite_item);

    // Display at local
    const { giphyList } = this.props;
    const loading = giphyList && giphyList.loading;
    const isLoaded = giphyList && giphyList.isLoaded;
    let fetchGiphyList;
    if (!loading && isLoaded) {
      fetchGiphyList = giphyList && giphyList.data;
      fetchGiphyList.map(item => {
        if (item.id === favourite_item.id) {
          item.is_favourite = favourite_item.is_favourite // first click is_favourite attr is not exist <=> false
        }
        return item;
      })
    }
    this.setState({
      newGiphyList: fetchGiphyList
    });
  }

  handleChangeInput = (e) => {
    const searchInput = e.target.value;
    if (e.target.value.length > 0) {
      this.setState(prevState => {
        const { apiInfo } = prevState;
        apiInfo.q = searchInput;
        return {
          searchInput,
          apiInfo: {
            ...apiInfo
          },
        }

      }, () => {
        const { apiInfo } = this.state
        
        const { favouriteList } = this.props; // load from componentDidMount
        const params = {
          apiInfo,
          favouriteList
        }
        this.props.reqSearchGiphy(params);
      })
    } else {
      this.setState({
        searchInput: ''
      }, () => {
        const { apiInfo } = this.state
        const params = {
          ...apiInfo
        }
        this.props.reqSearchGiphy(params);
      })
    }
  }

  render() {
    const { searchInput, newGiphyList } = this.state;
    const { giphyList } = this.props;
    const loading = giphyList && giphyList.loading;
    const isLoaded = giphyList && giphyList.isLoaded;
    
    return (
      <div className='container'>
        <div className="searchPage">
          <input placeholder="Start searching for images!" type="text" onChange={(e) => this.handleChangeInput(e)} value={searchInput} />
          {
            (!loading && isLoaded) ?
              <ul className="img-list">
                {
                  newGiphyList.length > 0
                    ?
                    newGiphyList.map((item, i) =>
                      <ItemImage
                        handleFavourite={this.handleFavourite}
                        key={i}
                        item={item}
                      />)
                    :
                    giphyList.data &&
                    giphyList.data.length > 0 &&
                    giphyList.data.map((item, i) =>
                      <ItemImage
                        handleFavourite={this.handleFavourite}
                        key={i}
                        item={item}
                      />)
                }
              </ul> :
              (searchInput.length > 0 ? <Loading /> : '')
          }
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  // bla: PropTypes.string,
};

HomePage.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => {
  const {
    searchGiphy,
    allFavourite
  } = state
  return {
    giphyList: searchGiphy,
    favouriteList: allFavourite
  }
}

const mapDispatchToProps = dispatch => ({
  reqSearchGiphy: (params) => dispatch(reqSearchGiphy(params)),
  reqProcessLocal: (params) => dispatch(reqProcessLocal(params)),
  reqInsertFavourite: (params) => dispatch(reqInsertFavourite(params)),
  reqAllFavourite: () => dispatch(reqAllFavourite()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
