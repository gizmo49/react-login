import React from 'react';
import { ReactComponent as SettingIcon } from "./icons/settings.svg";
import { ReactComponent as CloseIcon } from "./icons/close.svg";

const Toggle = ({ status, disabled, onClick }) => {
    return (
        <div onClick={onClick} className={`toggle ${disabled ? 'disabled' : ''}`}>
            {
                status ? <SettingIcon /> : <CloseIcon />
            }
        </div>
    );
};

export default Toggle;