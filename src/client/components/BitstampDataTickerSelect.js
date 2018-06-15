import React from 'react';

const options = [
  'select',
  'btcusd',
  'ethusd',
  'xrpusd',
  'ltcusd'
];

const BitstampDataTickerSelect = (props) => {

  const {
    onChange,
    tickerType
  } = props;

  return (
    <div className="form-group">
      <label htmlFor="select" >Choose your ticker:</label>
      <select value={tickerType} onChange={onChange} className="form-control">
        {options.map(option => {
          return <option value={option} key={option} >{option}</option>
        })}
      </select>
    </div>
  );

};

export default BitstampDataTickerSelect;
