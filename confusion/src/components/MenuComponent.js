import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishdetailComponent from "./DishdetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={"div-"+dish.id} className="col-12 col-md-3 mt-4 mb-4">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg className="w-100" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {
                    this.state.selectedDish!=null?(
                        <DishdetailComponent dish={this.state.selectedDish}/>
                    ):(
                        <div></div>
                    )
                }
            </div>
        );
    }
}

export default Menu;