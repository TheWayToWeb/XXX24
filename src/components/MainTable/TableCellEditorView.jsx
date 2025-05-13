import React from 'react';
import PropTypes from 'prop-types';
import './InputEditerStyles.css';

const TableCellEditorView = React.memo(
    ({ value, onChange, onBlur, autoFocus }) => {
        return (
            <input
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                autoFocus={autoFocus}
                className="form-control InputEditer InputEditer_Transparent InputEditer_Prominent"
            />
        );
    }
);

TableCellEditorView.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
};

export default TableCellEditorView;