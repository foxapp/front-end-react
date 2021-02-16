import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Label, Row, Col
} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { required, maxLength, minLength } from "../helpers/validators";

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false
        }

        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleSubmitCommentModal = this.handleSubmitCommentModal.bind(this)
        //this.isEnabled = this.isEnabled.bind(this)
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
export default CommentForm;