export const PATTERNS = Object.freeze({
    UPPER_CASE: `(?=.*[A-Z])`,
    LOWER_CASE: `(?=.*[a-z])`,
    NUMBER_CASE: `(?=.*?[0-9])`,
    SPECIAL_CHAR_CASE: `(?=.*?[#?!@$%^&*-])`,
    EIGHT_CHAR_LENGTH: `.{8,}`,
    TEN_CHAR_LENGTH: `.{10,}`
})

export const PASSWORD_STRENGTH = [
    "EASY",
    "MEDIUM",
    "HARD",
]
