import React from 'react';

const DataRow = ({ category, value, max }) => {
    return (
        <tr>
            <td className='category'>{ category }</td>
            <td className="stats-number">{ value }</td>
            
            {
                max &&
                <td className="range-slide">
                    <div className="range-slide-fill" style={{ "--precentage": (value / max) * 100 + '%'}}></div>
                </td>
            }
        </tr>
    );
};

export default DataRow;