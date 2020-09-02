import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom'

const DishDetail = (props) => {
    // const {dish} = props;
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                < RenderDish dish={props.dish} />
                <div className="col-md-5 col-12 m-1">
                    <h4>Comments</h4>
                < RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    )
}

function RenderDish({dish}) {
    if (dish != null) {
        return (
            <React.Fragment>
                <div className="col-md-6 col-12 m-1">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    } else {
        return <div></div>
    }
}

function RenderComments({comments}) {
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


export default DishDetail;