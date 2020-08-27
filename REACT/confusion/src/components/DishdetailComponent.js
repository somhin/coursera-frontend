import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    render() {
        const {dish} = this.props;
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                </div>
            </div>
        )
    }

    renderDish(dish) {
        if (dish != null) {
          return (
              <React.Fragment>
                  <div className="col-md-5 col-12 m-1">
                      <Card>
                          <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                          <CardBody>
                              <CardTitle>{dish.name}</CardTitle>
                              <CardText>{dish.description}</CardText>
                          </CardBody>
                      </Card>
                  </div>
                  <div className="col-md-5 col-12 m-1">
                      <h4>Comments</h4>
                      {this.renderComments(dish.comments)}
                  </div>
              </React.Fragment>
          )
        } else {
            return <div></div>
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map(comment => {
                return (
                    <ul className="list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                    )
            })
        
        return(
            <ul className="list-unstyled">
                {comment}
            </ul>
        )

        } else {
            return <div></div>
        }
    }

}

export default DishDetail;