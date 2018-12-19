import React, { Component } from "react"
import { connect } from "react-redux"

import fetchProducts from "../actions/productsActions"
import fetchTemplates from "../actions/templatesActions"

import Buttons from "../components/Buttons"
import Loader from "../components/Loader"
import ProductList from "../components/ProductList"

class App extends Component {

  clickHandler = event => {
    let btnId = +event.target.dataset.id;
    this.props.getFetchProducts(btnId);
  };

  render() {
    const {
      templates,
      products,
      productTemplate,
      loading,
      error,
    } = this.props;

    return (
      <div className="container app-container">
        <h1> Home for sale </h1>
        <Buttons buttons={templates}
                 handleClick={this.clickHandler}/>
        {
          error ? <div>Error!</div> : null
        }
        {
          loading ? <Loader/> : null
        }
        <ProductList products={products}
                     productTemplate={productTemplate}/>
      </div>
    );
  }
}

const mapStateToProps = state => ( {
  templates: state.templatesReducer.templates,
  products: state.productsReducer.products,
  productTemplate: state.productsReducer.template,
  loading: state.productsReducer.loading,
  error: state.productsReducer.error,
} );

const mapDispatchToProps = dispatch => ( {
  componentDidMount: dispatch(fetchTemplates()),
  getFetchProducts: tempId => dispatch(fetchProducts(tempId)),
} );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
