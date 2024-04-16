import React, { useContext, useEffect, useState } from 'react';
import SignInForm from './SignInForm/SignInForm';
import SetPasswordRules from './SetPasswordRules/SetPasswordRules';
import { PasswordRulesContext } from './hooks/PasswordRules';
import Toggle from '../../ui/Toggle/Toggle';

const SignIn = () => {
    const [showRulesModal, toggleRulesModal] = useState(false);
    const { passwordRules } = useContext(PasswordRulesContext);
    const totalCheckedRules = passwordRules.filter((x) => x.checked).length;

    const checkRulesApplied = () => {
        let status = totalCheckedRules === 0
        toggleRulesModal(status)
    }

    useEffect(() => {
        checkRulesApplied()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-4 login__card">
                    <Toggle onClick={() => toggleRulesModal(!showRulesModal)} status={showRulesModal} disabled={totalCheckedRules === 0 }></Toggle>
                    <div className="action__wrapper">
                        {showRulesModal ? <SetPasswordRules toggle={toggleRulesModal} /> : <SignInForm />}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SignIn;