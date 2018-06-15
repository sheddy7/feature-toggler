import React from 'react';

import BitstampDataViewer from '../components/BitstampDataViewer';

import getJsonRestClient from './../lib/getJsonRestClient';

class FeatureToggleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: null };
  };

  componentDidMount() {

    const url = '/api/features';

    getJsonRestClient(url)
    .then(resp => {

      this.setState({
        data: resp
      });
    })
    .catch(err => {

      this.setState({
        data: null,
        error: err
      });
    });
  };

  render() {

    const data = this.state.data,
      error =  this.state.error;

    return (
      <div>
        {!data && !error && <p>Loading</p>}
        {data && <BitstampDataViewer
          data={data}
        />}
        {error && <p>Failed to retrieve data. Please select another ticker to retry</p>}
      </div>
    );
  };
};

export default FeatureToggleContainer;
