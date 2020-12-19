import Form from "react-bootstrap/Form";
import React from "react";
import {Skills} from "./data/skills";


function MainstatInputField(props) {
    return(
        <Form.Group controlId="mainstatInputField">
            <Form.Label>Mainstat value</Form.Label>
            <Form.Control
                as="input"
                type="number"
                name="currentMainstatValue"
                onChange={props.onChange}
            />
        </Form.Group>
    );
}

function SkillList(props) {
    return(
        <Form.Group controlId="skillList">
            <Form.Label>Skill List</Form.Label>
            <Form.Control as="select" name="currentSkillPower" onChange={props.onChange}>
                {Skills.skills.map((skill) => {
                    return (
                        <option key={skill.name} value={skill.power}>
                            {skill.name}
                        </option>
                    );
                })}
            </Form.Control>
        </Form.Group>
    );
}

function DamageCalculatorForm(props) {
    return(
        <Form>
            <SkillList onChange={props.onChange}/>
            <MainstatInputField onChange={props.onChange}/>
        </Form>
    )
}

export default DamageCalculatorForm