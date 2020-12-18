import React from "react";
import SkillList from "./skillList"

class DamageCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSkill: null
        }
    }

    handleSkillSelect(selectedSkill) {
        this.setState({
            currentSkill: selectedSkill.target.value
        });
    }

    render() {
        return(
            <div className="damagecalc">
                <div className="skillList">
                    <SkillList onChange={(skill) => this.handleSkillSelect(skill)}/>
                </div>
            </div>
        );
    }
}

export default DamageCalculator;