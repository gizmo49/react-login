import React, { useState } from "react";
import { ReactComponent as VisibleEye } from "./icons/visible.svg";
import { ReactComponent as HiddenEye } from "./icons/hidden.svg";

const Input = ({
    name,
    id,
    label,
    labelClass,
    grpClass,
    inputClass,
    placeholder,
    isErr,
    errMssg,
    value,
    disabled,
    onChange,
    type,
    onBlur,
    hideLabel,
    hideError,
    autoFocus,
    required,
    remark
}) => {
    const [show, setShow] = useState(false);
    const [onlyReadPassword, changePasswordReadability] = useState(true);

    return (
        <div className={`form-group ${grpClass || ""}`}>
            {label && (
                <label
                    htmlFor={id}
                    className={`form-label ${labelClass || ""} ${disabled ? "text-muted" : ""
                        } ${hideLabel ? "d-none" : ""}`}>
                    {label}
                </label>
            )}
            <div className='position-relative'>
                <input
                    type={type !== "password" ? type : (show ? "text" : "password")}
                    name={name}
                    id={id}
                    className={`form-control ${isErr ? "is-invalid" : ""} ${inputClass || ""
                        }`}
                    placeholder={placeholder}
                    disabled={disabled}
                    data-type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={() => changePasswordReadability(false)}
                    readOnly={onlyReadPassword}
                    value={value}
                    autoComplete='off'
                    autoFocus={autoFocus}
                    required={required}
                />
                {!hideError && <div className='invalid-feedback'>{errMssg}</div>}
                {type === "password" && <span
                    className={`pos-abs-right-center`}
                    onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? <HiddenEye /> : <VisibleEye />}
                </span>}
            </div>
            {
                remark && <div className="remark">{remark}</div>
            }
        </div>
    );
};

export default Input;