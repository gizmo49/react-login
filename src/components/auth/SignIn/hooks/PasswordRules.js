import React, { useReducer, useEffect } from "react";
import { PATTERNS } from "./constants";

const { UPPER_CASE, LOWER_CASE, NUMBER_CASE, SPECIAL_CHAR_CASE, EIGHT_CHAR_LENGTH } = PATTERNS;

const initialState = [
    {
        name: 'At least 1 uppercase',
        checked: false,
        pattern: UPPER_CASE
    },
    {
        name: 'At least 1 lowercase',
        checked: false,
        pattern: LOWER_CASE
    },
    {
        name: 'At least 1 figure',
        checked: false,
        pattern: NUMBER_CASE
    },
    {
        name: `At least 1 special character - !@#$%^&*()`,
        checked: false,
        pattern: SPECIAL_CHAR_CASE
    },
    {
        name: `At least 8 characters long`,
        checked: false,
        pattern: EIGHT_CHAR_LENGTH
    }
]


let reducer = (passwordRules, newPasswordRules, status) => {

    const { index, checked } = newPasswordRules || {};

    if (newPasswordRules === null) {
        localStorage.removeItem("passwordRules");
        return initialState;
    }

    return [
        ...passwordRules.slice(0, index),
        { ...passwordRules[index], checked },
        ...passwordRules.slice(index + 1),
    ]
};


const localState = JSON.parse(localStorage.getItem("passwordRules"));

const PasswordRulesContext = React.createContext([]);

function PasswordRulesProvider(props) {
    const [passwordRules, setPasswordRules] = useReducer(reducer, localState || initialState);

    useEffect(() => {
        localStorage.setItem("passwordRules", JSON.stringify(passwordRules));
    }, [passwordRules]);

    return (
        <PasswordRulesContext.Provider value={{ passwordRules, setPasswordRules }}>
            {props.children}
        </PasswordRulesContext.Provider>
    );
}

export { PasswordRulesContext, PasswordRulesProvider };
