import React, {Component} from "react";
import "./payment-result.styles.css";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {properties} from "../../properties";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {TextBox} from "../../components/input/text-box/text-box.component";
import {TextArea} from "../../components/input/text-area/text-area.component";

/*
    Page that the user gets redirected to after handling the payment.
    The exact url the user gets redirected to is handled by the backend implementation of stripe.

    The success of the payment is displayed in the url:
        /result/failed -> canceled payment
        /result/success -> successful payment

    This page wil redirect the user back to the menu page.
 */

class PaymentResultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //Determine the success of the payment with the url param
            success: (this.props.match.params.result.toLowerCase() === "success"),

            name: "", //Name supplied by user (only shown if payment was success)
            content: "" //Content of message supplied by user (only shown if payment was success)
        }
    }

    /*
        Post the proved message and name to the backend (not yet implemented)
        Will redirect the user back to the menu page
     */
    handleButtonContinueClick = () => {
        //Check if payment was successful
        if (this.state.success &&
            //Check if message is empty or whitespace
            this.state.content !== "" &&
            !this.state.content.indexOf(' ') >= 0) {

            //todo: implement post message endpoint
            const message = {
                name: this.state.name,
                content: this.state.content
            }
        }

        //Redirect back to menu
        this.props.history.push("/menu");
    }

    //Handle the changes made in the name input field
    handleNameInputChange = (event) => {
        this.setState({name: event.target.value});
    }

    //Handle the changes made in the message input field
    handleMessageInputChange = (event) => {
        this.setState({content: event.target.value});
    }

    render() {
        return (
            <div id="page-container">
                <div id="result-container" className="container-horizontal">
                    <PaddingComponent/>
                    <div>
                        {(this.state.success) ?

                            /*
                                Content shown on successful payment
                             */
                            <div className="container-vertical">
                                <PaddingComponent/>
                                <PaddingComponent/>

                                {/*Main text*/}
                                <div className="text-body">
                                    {properties.resultTextSuccessMain}
                                </div>

                                <PaddingComponent/>

                                {/*Secondary text*/}
                                <div className="text-body">
                                    {properties.resultTextSuccessSec}
                                </div>

                                <PaddingComponent/>
                                <PaddingComponent/>

                                {/*Tertiary text*/}
                                <div className="text-body">
                                    {properties.resultTextSuccessThr}
                                </div>

                                <PaddingComponent/>

                                {/*Text field for name*/}
                                <TextBox
                                    placeholder={properties.resultTextBoxPlaceholder}
                                    handleInputChange={this.handleNameInputChange}/>

                                <PaddingComponent basis="10px"/>

                                {/*Text area for message*/}
                                <TextArea
                                    placeholder={properties.resultTextAreaPlaceholder}
                                    handleInputChange={this.handleMessageInputChange}/>

                                <PaddingComponent/>
                            </div>
                            :

                            /*
                                Content shown on failed payment
                             */
                            <div className="container-vertical">

                                <PaddingComponent/>
                                <PaddingComponent/>

                                {/*Main text*/}
                                <div className="text-body">
                                    {properties.resultTextFailureMain}
                                </div>

                                <PaddingComponent/>

                                {/*Secondary text*/}
                                <div className="text-body">
                                    {properties.resultTextFailureSec}
                                </div>

                                <PaddingComponent/>
                            </div>}
                    </div>
                    <PaddingComponent/>
                </div>

                {/*Button which posts message, if needed, and redirects user back to menu page*/}
                <ButtonMainComponent content={properties.resultTextBtnContinue}
                                     handleOnClick={this.handleButtonContinueClick}/>
            </div>
        );
    }
}

export default PaymentResultPage;
