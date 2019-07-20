import React, { Component } from "react";
import { Card} from 'semantic-ui-react';

export default class Cards extends Component {
  render() {
    console.log(this.props.data);
    return (
      <Card className="card center">
        <img
          className="card-img-top"
          src="https://cdn.pixabay.com/photo/2016/01/15/12/41/disney-1141607_1280.jpg"
          alt="Star Wars"
        />
        <card className="card-body">
          <h1 className="card-title">Name: {this.props.data.name}</h1>
          <card className="card-text">
            <h5 className="mb-0 mt-3">
              <span className="mr-1 ml-2 font-weight-bold">BirthYear :</span>
              <span className="ml-1">{this.props.data.birth_year}</span>
            </h5>
          </card>
        </card>
      </Card>
    );
  }
}