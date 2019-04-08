import React, { Component } from 'react';
import { Card, CardImgOverlay, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.dish != null) {

      console.log(this.props.dish.name);

      const comments = this.props.dish.comments.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.comment}</p>
              <p> -- {item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</p>
            </div>
          );
      });

      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <h4>Comments</h4>
              <CardBody>
                {comments}
              </CardBody>
            </Card>
          </div>
      </div>
      );
    } else {
      return (<div></div>);
    }
  }
}

export default DishDetail;