import React, {Component} from "react";
import "./donation.styles.css";
import {PaddingComponent} from "../../components/layout/padding/padding.component";
import {properties} from "../../properties";
import {AmountSelectorComponent} from "../../components/input/amount-selector/amount-selector.component";
import {ButtonThrComponent} from "../../components/input/buttons/button-thr/button-thr.component";
import {DonationListComponent} from "../../components/donation-list/donation-list.component";
import {NumBox} from "../../components/input/num-box/num-box.component";
import {ButtonMainComponent} from "../../components/input/buttons/button-main/button-main.component";
import {handlePayment} from "../../services/payment.service";

class DonationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customAmount: null,
            popupVisible: false
        }
    }

    handleSetVisibility = (value) =>{
        this.setState({popupVisible: value});
    }

    handleCustomAmountChanged = (event) =>{
        this.setState({customAmount: event.target.value})
    }

    render() {
        return (
            <div id="page-container">
                <div className="container-horizontal">
                    <PaddingComponent/>
                    <div className="container-vertical">
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">
                            {properties.donationTextMain}
                        </div>
                        <PaddingComponent/>
                        <PaddingComponent/>
                        <div className="text-body">
                            {properties.donationTextSec}
                        </div>
                        <PaddingComponent/>
                        <AmountSelectorComponent
                            amounts={properties.donationAmounts}
                            handleChoice={handlePayment}/>
                            <PaddingComponent/>
                            <ButtonThrComponent
                                handleOnClick={() => this.handleSetVisibility(true)}
                                content={properties.donationTextCustom}
                                />
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <DonationListComponent donations={this.props.donations}/>
                                <PaddingComponent/>
                    </div>
                    <PaddingComponent/>
                </div>
                {(this.state.popupVisible)?
                    <div className="popup">
                        {/*Popup content*/}
                        <div className="popup-content-container container-horizontal">
                            <PaddingComponent/>
                            <div className="popup-content container-vertical">
                                <PaddingComponent/>
                                <PaddingComponent/>
                                <NumBox
                                    min={0}
                                    max={Number.MAX_SAFE_INTEGER}
                                    placeholder="Custom amount..."
                                    handleInputChange={this.handleCustomAmountChanged}/>

                                <PaddingComponent basis="10px"/>
                                <ButtonMainComponent
                                    content="Confirm"
                                    handleOnClick={() => handlePayment(this.state.customAmount)}
                                />
                                <PaddingComponent/>
                                <PaddingComponent/>
                            </div>
                            <PaddingComponent/>
                        </div>

                        {/*Background to close popup*/}
                        <div className="popup-background"
                        onClick={() => this.handleSetVisibility(false)}/>
                    </div>:
                    ""
                }
            </div>
        )
    }

}

export default DonationPage;