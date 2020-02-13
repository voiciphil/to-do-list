import React from 'react';
import './InputBar.css';

const InputBar = () => {
  return (
    <div className="input-group justify-content-center">
      <input type="text" className="form-control" />
      <div className="input-group-append">
        <button type="button" className="btn btn-success">추가</button>
      </div>
    </div>
  );
};

export default InputBar;
