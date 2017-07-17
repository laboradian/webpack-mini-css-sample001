/* global */
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
      <h2>このページでは、mini.cssを使っています。</h2>

      <section>
        <h3>Card</h3>
        <div className="row">
          <div className="card">
            <div className="section">
              <h3>Card Title</h3>
              <p>Card content...</p>
            </div>
          </div>
          <div className="card">
            <div className="section">
              <h3>Card Title</h3>
              <p>Card content...</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Table</h3>
        <table>
          <caption>People</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">Chad</td>
              <td data-label="Surname">Wilberts</td>
              <td data-label="Alias">MrOne</td>
            </tr>
            <tr>
              <td data-label="Name">Adam</td>
              <td data-label="Surname">Smith</td>
              <td data-label="Alias">TheSmith</td>
            </tr>
            <tr>
              <td data-label="Name">Sophia</td>
              <td data-label="Surname">Canderson</td>
              <td data-label="Alias">Candee</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Tab 1</h3>
        <div className="tabs stacked" style={{marginTop:'20px'}}>
          <input type="radio" name="accordion" id="a1" aria-hidden="true" />
          <label htmlFor="a1" aria-hidden="true">Accordion section 1</label>
          <div>
            <h3>Section 1</h3>
            <p>This is the first accordion section&apos;s content.</p>
          </div>
          <input type="radio" name="accordion" id="a2"aria-hidden="true" />
          <label htmlFor="a2" aria-hidden="true">Accordion section 2</label>
          <div>
            <h3>Section 2</h3>
            <p>This is the second accordion section&apos;s content.</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Tab 2</h3>
        <div className="tabs stacked" style={{marginTop:'20px'}}>
          <input type="checkbox" id="c1" aria-hidden="true" />
          <label htmlFor="c1" aria-hidden="true">Collapse section 1</label>
          <div>
            <p>This is the first collapse section&apos;s content.</p>
          </div>
          <input type="checkbox" id="c2" aria-hidden="true" />
          <label htmlFor="c2" aria-hidden="true">Collapse section 2</label>
          <div>
            <p>This is the second collapse section&apos;s content.</p>
          </div>
        </div>
      </section>

      <section style={{marginTop:'20px'}}>
        <h3>Contextual</h3>
        <mark style={{marginRight:'10px'}}>primary</mark>
        <mark className="secondary" style={{marginRight:'10px'}}>secondary</mark>
        <mark className="tertiary" style={{marginRight:'10px'}}>tertiary</mark>
        <mark className="inline-block" style={{marginRight:'10px'}}>long highlight text...</mark>
        <mark className="tag" style={{marginRight:'10px'}}>tag</mark>
      </section>

      {/*<div style={{marginTop:'20px'}}>
        <span className="toast">This is a normal toast message!</span>
        <span className="toast small">This is a large toast message!</span>
        <span className="toast large">This is a small toast message!</span>
      </div>*/}

      <section>
        <h3>Tooltips</h3>
        <span className="tooltip" aria-label="This is a tooltip">Hover over this text to see a tooltip!</span>
        <span className="tooltip bottom" aria-label="This is a tooltip">Hover over this text to see a reverse tooltip!</span>
      </section>

      <section>
        <h3>Modals</h3>
        <label htmlFor="modal-toggle">Show modal</label>
        <input id="modal-toggle" type="checkbox"/>
        <div className="modal">
          <div className="card">
            <label htmlFor="modal-toggle" className="close"></label>
            <h3 className="section">Modal</h3>
            <p className="section">This is a modal window!</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Progress</h3>
        <progress value="0" max="1000"></progress>
        <progress value="450" max="1000"></progress>
        <progress value="1000" max="1000"></progress>
      </section>

      <section>
        <h3>Utility</h3>
        <span className="close"></span>
      </section>

      <section>
        <h2>Font Awesome も使えます。(mini.css とは関係ありません)</h2>
        <i className="fa fa-bolt fa-4x" aria-hidden="true"></i><br/>
        <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
      </section>

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

