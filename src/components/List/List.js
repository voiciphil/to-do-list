import React from 'react';
import './List.css';

const List = () => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-1 card-body form-check">
          <input type="checkbox" className="form-check-input checkbox" />
        </div>
        <div className="col-md-10 card-body">
          asdf
        </div>
        <div className="col-md-1 delete">
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
