import React from "react";
import DamageCalculatorForm from "./damageCalculatorForm";

class DamageCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSkillPower: null,
            currentMainstatValue: 3
        }
    }

    handleSkillSelect(selectSkillEvent) {
        this.setState({
            [selectSkillEvent.target.name]: selectSkillEvent.target.value
        });
    }

    render() {
        return(
            <React.Fragment>
                <DamageCalculatorForm onChange={(event) => this.handleSkillSelect(event)} />
                <h1>{this.state.currentSkillPower}</h1>
                <h1>{this.state.currentMainstatValue}</h1>
            </React.Fragment>
        );
    }
}

export default DamageCalculator;