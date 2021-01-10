import React, {Component} from "react";
import "./payment-result.styles.css";
import {HeaderComponent} from "../../components/header/header.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {properties} from "../../properties";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {TextBox} from "../../components/input/text-box/text-box.component";
import {TextArea} from "../../components/input/text-area/text-area.component";

class PaymentResultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Set success of payment
            success: (this.props.match.params.result.toLowerCase() === "success"),

            //Message properties
            name: "",
            content: ""
        }
    }

    handleButtonContinueClick = () =>{
        //Check if payment was successful
        if(this.state.success &&
            //Check if message is empty or whitespace
            this.state.content !== "" &&
            !this.state.content.indexOf(' ') >= 0){

            //todo: implement post message endpoint
            const message = {
                name: this.state.name,
                content: this.state.content
            }

            console.log('Message to be send', message);
        }

        //Redirect back to menu
        this.props.history.push("/menu");
    }

    handleNameInputChange = (event) =>{
        this.setState({name: event.target.value});
    }

    handleMessageInputChange = (event) =>{
        this.setState({content: event.target.value});
    }

    render() {

        return (
            <div id="page-container">
                <div id="result-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div>
                        {(this.state.success) ?
                            //On success
                            <div className="container-vertical">
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <div className="text-body">
                                    {properties.resultTextSuccessMain}
                                </div>
                                <PaddingComponent/>
                                <div className="text-body">
                                    {properties.resultTextSuccessSec}
                                </div>
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <div className="text-body">
                                    {properties.resultTextSuccessThr}
                                </div>
                                <PaddingComponent/>
                                <TextBox
                                    placeholder="Name..."
                                    handleInputChange={this.handleNameInputChange}/>
                                    <PaddingComponent basis="10px"/>
                                    <TextArea
                                        placeholder="Message..."
                                        handleInputChange={this.handleMessageInputChange}/>
                                <PaddingComponent/>
                            </div>
                            :
                            //On failure
                            <div className="container-vertical">
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <div className="text-body">
                                    {properties.resultTextFailureMain}
                                </div>
                                <PaddingComponent/>
                                <div className="text-body">
                                    {properties.resultTextFailureSec}
                                </div>
                                <PaddingComponent/>
                            </div>}
                    </div>
                    <PaddingComponent/>
                </div>
                <ButtonMainComponent content={properties.resultTextBtnContinue}
                handleOnClick={this.handleButtonContinueClick}/>
            </div>
        );
    }
}

export default PaymentResultPage;
