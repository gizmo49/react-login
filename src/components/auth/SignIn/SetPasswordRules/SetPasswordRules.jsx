import React, { useContext } from 'react';
import { PasswordRulesContext } from '../hooks/PasswordRules';

const SetPasswordRules = () => {
    const { passwordRules, setPasswordRules } = useContext(PasswordRulesContext);

    const handleCheckBox = (event, index) => {
        const checked = event.target.checked;
        setPasswordRules({ index, checked })
    }

    return (
        <div>
            <h5 className='mb-3'>Set Password rules</h5>
            <div className="checkbox__group">
                {
                    passwordRules?.map((item, i) =>
                        <div key={i} className='checkbox__group--item'>
                            <input type="checkbox" onChange={(e) => handleCheckBox(e, i)} checked={item.checked} />
                            <span>{item.name}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )

};

export default SetPasswordRules;