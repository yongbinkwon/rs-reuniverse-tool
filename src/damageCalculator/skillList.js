import {Skills} from "./data/skills";
import React from "react";
import Form from "react-bootstrap/Form";

class SkillList extends React.Component {

    render() {
        return(
            <Form>
                <Form.Group controlId="skillList">
                    <Form.Label>Skill List</Form.Label>
                    <Form.Control as="select" onChange={this.props.onChange}>
                        {Skills.skills.map((skill) => {
                            return <option key={skill.name} value={skill.power}>{skill.name}</option>;
                        })}
                    </Form.Control>
                </Form.Group>
            </Form>
        );
    }
}

export default SkillList;