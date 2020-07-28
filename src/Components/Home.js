import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImageOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { PRODUCTS } from "../data/products";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS
    };
  }

  render() {
    const Products = this.state.products.map(pro => {
      return (
        <React.Fragment key={pro.id}>
          <Card>
            <CardImg with="100%" src={pro.image} alt={pro.name} />
            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{pro.name}</CardTitle>
              <CardBody>
                {pro.category}
                {pro.price}
                {pro.sizes}
              </CardBody>
            </CardImgOverlay>
          </Card>
        </React.Fragment>
      );
    });

    return (
      <>
        <div className="container">
          <div className="row">
            {Products}
            Hello
          </div>
        </div>
      </>
    );
  }
}

export default Home;
