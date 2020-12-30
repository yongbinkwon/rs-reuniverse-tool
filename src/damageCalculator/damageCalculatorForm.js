import Form from "react-bootstrap/Form";
import React from "react";
import {Skills} from "./data/skills";
import "./damageCalculatorForm.css"

function SkillList(props) {
    return(
        <Form.Group controlId="skillList" className="skillList">
            <Form.Label>Skill List</Form.Label>
            <Form.Control as="select" name="currentSkillPower" onChange={props.onChange}>
                {Skills.skills.map((skill) => {
                    return (
                        <option key={skill.name} value={[skill.power, skill.classType]}>
                            {skill.name}
                        </option>
                    );
                })}
            </Form.Control>
        </Form.Group>
    );
}

function MainstatInputField(props) {
    return(
        <Form.Group controlId="mainstatInputField" className="mainstatInputField">
            {props.mainstat.map((mainstat) => {
                return (
                    <React.Fragment>
                        <Form.Label>Input {mainstat}</Form.Label>
                        <Form.Control
                            as="input"
                            type="number"
                            name={mainstat}
                            onChange={props.onChange}
                        />
                    </React.Fragment>
                );
            })}
        </Form.Group>
    );
}

export {
    SkillList,
    MainstatInputField
}