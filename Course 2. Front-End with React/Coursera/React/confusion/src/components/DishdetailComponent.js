import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.dish === null) {
      return <div />;
    } else {
      return (
          <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dish)}
            </div>
        </div>
      );
    }
  }
  renderDish(dish)  {
    if(dish!=null){
        return (
             <Card>
                 <CardImg
                    top
                    src={this.props.dish.image}
                    alt={this.props.dish.name}
                />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }else{
        console.log("Dish component render is invoked but no dish");
        return(
            <div></div>
        );
    }
}

  renderComments(dish) {
    const commentary = dish.comments.map(item => {
      return (
        <ul className="list-unstyled" key={item.id}>
          <li>
            <h4>{item.comment}</h4>
          </li>
          <li>
            -- {item.author}, {item.date}
          </li>
        </ul>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        {commentary}
      </div>
    );
  }
}

export default Dishdetail;