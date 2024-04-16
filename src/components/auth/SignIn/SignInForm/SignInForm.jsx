import React, { useContext } from 'react';
import Input from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';
import { InfoContext } from '../hooks/InfoContext';
import { PasswordRulesContext } from '../hooks/PasswordRules';
import { PATTERNS } from '../hooks/constants';
import PasswordStrengthMap from './PasswordStrengthMap/PasswordStrengthMap';

const { UPPER_CASE, LOWER_CASE, NUMBER_CASE, SPECIAL_CHAR_CASE, TEN_CHAR_LENGTH } = PATTERNS;


const SignInForm = () => {
    const { passwordRules } = useContext(PasswordRulesContext);
    const { info, setInfo } = useContext(InfoContext);

    const handleChange = e => {
        const { name, value } = e.target;
        setInfo({ [name]: value });
    };

    const level1PasswordRemark = new RegExp(UPPER_CASE + LOWER_CASE + NUMBER_CASE + SPECIAL_CHAR_CASE + TEN_CHAR_LENGTH).test(info.password);
    const passwordRemark = info?.password?.length === 0 ? "" : level1PasswordRemark ? "HARD" : new RegExp(`${UPPER_CASE}${LOWER_CASE}`).test(info?.password) ? "MEDIUM" : "EASY"

    const selectedPasswordRules = passwordRules.filter((x) => x.checked);
    const isValid = selectedPasswordRules?.map((item, i) => {
        const pattern = new RegExp(item.pattern);
        return pattern.test(info?.password);
    }).every(Boolean);

    return (
        <form>
            <Input
                label={`Email`}
                name="email"
                type="email"
                placeholder={`name@domain.com`}
                value={info?.email}
                onChange={handleChange}
            />
            <Input
                label={`Password`}
                name="password"
                type="password"
                placeholder={""}
                grpClass="mb-2"
                value={info?.password}
                onChange={handleChange}
                remark={passwordRemark}
            />
            {passwordRemark !== "" && <PasswordStrengthMap currentLevel={passwordRemark} />}

            <ul className='pattern__list'>
                {
                    selectedPasswordRules?.map((item, i) => {
                        const pattern = new RegExp(item.pattern);
                        const passed = pattern.test(info?.password);
                        return (
                            <li key={i}>
                                <span style={{ textDecoration: passed ? 'line-through' : 'none' }}>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <Button text={`Sign In`} disabled={!isValid} classType={'primary'} />

        </form>
    );
};

export default SignInForm;