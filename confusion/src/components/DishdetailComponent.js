import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal,
    ModalHeader, ModalBody, Row, Label, Col
} from "reactstrap";
import { Link } from 'react-router-dom';
import Menu from "./MenuComponent";
import {Control, Errors, LocalForm} from "react-redux-form";
import {maxLength, minLength, required} from "../helpers/validators";


class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false
        }

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleSubmitCommentModal = this.handleSubmitCommentModal.bind(this)
    }

    toggleCommentModal(){
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }

    handleSubmitCommentModal(values){
        this.toggleCommentModal();
        console.log('Current State is:'+JSON.stringify(values));
        alert('Current State is:'+JSON.stringify(values));
    }

    render(){

        return(
            <>
                <Button border color="secondary" outline onClick={this.toggleCommentModal}><i className="fa fa-pencil"></i> Submit Comment</Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitCommentModal(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        className="form-control"
                                        model=".rating"
                                        id="rating"
                                        name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="yourname" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text
                                        className="form-control"
                                        model=".yourname"
                                        id="yourname"
                                        name="yourname"
                                        placeholder="Your Name"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. ',
                                            maxLength: 'Must be 15 characters or less. ',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea
                                        className="form-control"
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        rows={7}
                                        placeholder="Your Comment"
                                        validators={{
                                            required, minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters. '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

function RenderComments({comments}){
    const list = comments.map((comment) => {
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
        <div className="col-12 col-md-6">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {list}
            </ul>
            <CommentForm/>
        </div>
    )
}
function RenderDish({dish}){
    if(dish!=null){
        return (
            <div className="col-12 col-md-6">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
const DishDetail = (props) => {
    const dish = props.dish;
    if(dish!=null){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }else{
        return (
            <div></div>
        );
    }
}

export default DishDetail;