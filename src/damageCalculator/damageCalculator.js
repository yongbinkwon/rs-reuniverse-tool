import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {SkillList, MainstatInputField} from "./damageCalculatorForm";
import {Skills} from "./data/skills";

function DamageCalculator() {
    const skillClassToMainstatMap = {
        "axe": ["Str"],
        "bow": ["Dex"],
        "club": ["Str"],
        "dark": ["Int"],
        "earth": ["Int"],
        "fire": ["Int"],
        "greatsword": ["Str"],
        "gun": ["Dex"],
        "light": ["Int"],
        "martial arts": ["Agi", "Str"],
        "shortsword": ["Dex"],
        "spear": ["Str"],
        "sword": ["Str"],
        "water": ["Int"],
        "wind": ["Int"]
    };

    const mainstatArrayToMap = (mainstatArray) => {
        const reducer = (map, mainstatName) => {
            map[mainstatName] = null;
            return map;
        };

        return mainstatArray.reduce(reducer, {});
    };

    const [currentSkillPower, setCurrentSkillPower] = useState(Skills.skills[0].power);
    const [currentSkillDmgClass, setCurrentSkillClassType] = useState(Skills.skills[0].classType);
    const [currentSkillMainstat, setMainstats] =
        useState(mainstatArrayToMap(skillClassToMainstatMap[Skills.skills[0].classType.toLowerCase()]));

    const handleSelectSkillEvent = (selectSkillEvent) => {
        const skillPowerAndClass = selectSkillEvent.target.value.split(",");
        const skillPower = skillPowerAndClass[0];
        const skillClass = skillPowerAndClass[1];
        const mainStats = skillClassToMainstatMap[skillClass.toLowerCase()];
        setCurrentSkillPower(skillPower);
        setCurrentSkillClassType(skillClass);
        setMainstats(mainstatArrayToMap(mainStats));
    };

    const handleMainstatInputEvent = (inputMainstatEvent) => {
        const mainstats = new Map(currentSkillMainstat);
        const index = mainstats.findIndex(inputMainstatEvent.target.name);
        mainstats[index][inputMainstatEvent.target.name] = inputMainstatEvent.target.value;
        setMainstats(mainstats)
    };

    return(
        <React.Fragment>
            <Form>
                <SkillList
                    onChange={(skillSelectEvent) => handleSelectSkillEvent(skillSelectEvent)}
                />
                <MainstatInputField
                    onChange={(mainStatInputEvent) => handleMainstatInputEvent(mainStatInputEvent)}
                    mainstat={currentSkillMainstat.keys()}
                />
            </Form>
            <h1>{currentSkillMainstat.keys()}</h1>
        </React.Fragment>
    );
}

export default DamageCalculator;