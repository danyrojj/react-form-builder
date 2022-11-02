import React from 'react';

export const Label: React.FC<{ label: string }> = ({ label }) => {
    return (
        <label style={{ fontWeight: 'bold', width: 50, marginRight: 16 }} className="form-label">
            {label}
        </label>
    );
};
