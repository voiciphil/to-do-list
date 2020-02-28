import React from 'react';
import './InputBar.css';

const InputBar = () => {
  return (
    <div className="InputBar">
      <div className="input-group">
        <input type="text" className="form-control" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-success">추가</button>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
