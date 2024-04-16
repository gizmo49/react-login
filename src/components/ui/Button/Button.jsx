
export const Button = ({
    text,
    type,
    classType,
    otherClass,
    disabled,
    onClick,
    loading,
    children,
    as = "button",
}) => {
    const As = as;
    return (
        <As
            type={type}
            className={`btn ${classType ? `btn-${classType}` : ''} ${otherClass || ""} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled || loading}>
            {text}
            {children}
        </As>
    );
};
