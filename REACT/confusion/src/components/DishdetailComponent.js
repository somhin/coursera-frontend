import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    render() {
        const {dish} = this.props;
        return(
            <div className="row">
                {this.renderDish(dish)}
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
                        <li>-- {comment.author}, {this.formatDate(comment.date)}</li>
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

    formatDate(date) {
    const option = {year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;
}

}

export default DishDetail;