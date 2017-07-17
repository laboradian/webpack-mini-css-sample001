/* global */
//import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import 'babel-polyfill'

//import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
//import PropTypes from 'prop-types'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

//-----------------------------------
// Action creators (Actionを返す)
//-----------------------------------

// 現段階では Action creators は使わないのでコメントアウトしておく
//const anAction = () => {
//  return {
//    type: ''
//  }
//}

//-----------------------------------
// Reducer
//-----------------------------------

const appReducer = (state = null/*, action*/) => {
  return state
}

//-----------------------------------
// Component
//-----------------------------------

const AppComponent = () => {
  return (
    <div>
      ここにHTMLを書きます。
    </div>
  );
};

AppComponent.propTypes = {};

//-----------------------------------
// Container
//-----------------------------------

const AppContainer = (() => {

  const mapStateToProps = (/*state, ownProps*/) => {
    return {};
  }

  const mapDispatchToProps = (/*dispatch*/) => {
    return {}
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppComponent);

})();

//-----------------------------------
// Store
//-----------------------------------

const store = createStore(appReducer)

//-----------------------------------
// 画面に表示する
//-----------------------------------

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

