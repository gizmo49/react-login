import React from 'react';
import { PASSWORD_STRENGTH } from '../../hooks/constants';

const Progress = ({ value = 0 }) => {
    return (
        <div className="progress" style={{ height: 5 }}>
            <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${value}%` }}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
    )
}

const PasswordStrengthMap = ({ currentLevel }) => {
    const levelIndex = PASSWORD_STRENGTH.findIndex((x) => x === currentLevel)
    return (
        <div className="row" style={{ paddingLeft: `1rem` }}>
            <div className="col-md-6">
                <div className="row mb-2">
                    {
                        PASSWORD_STRENGTH.map((_, index) => {
                            return (
                                <div className="col-4 p-0">
                                    <Progress key={index} value={levelIndex >= index ? 100 : 0} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default PasswordStrengthMap;