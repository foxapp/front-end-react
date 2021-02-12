import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import Menu from "./MenuComponent";


class DishDetail extends Component{
    constructor(props) {
        super(props);
    }

    renderComments(dish){
        const list = dish.comments.map((comment) => {
            if (comment != null){
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            }else{
                <div>No comments</div>
            }
        });
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </div>
        )
    }
    renderDish(dish){
        if(dish!=null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6">
                            {this.renderComments(dish)}
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        return(
            <div>
                {this.renderDish(dish)}
            </div>
        );

            /*
            <ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>/
             */
    }
}

export default DishDetail;