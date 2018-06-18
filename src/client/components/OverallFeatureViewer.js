import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

class OverallFeatureViewer extends React.Component {
  state = {
    gilad: true,
    jason: false,
    antoine: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {

    const { data } = this.props;
console.log(data);

    const switches = data.map(feature => (
      <span>
        <p>{feature.name}</p>
        <FormControlLabel
          key={feature.id}
          control={
            <Switch
              checked={feature.enabled}
              onChange={this.handleChange('gilad')}
              value={feature.id}
            />
          }
          label={feature.description}
        />
      </span>
    ));

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Overall feature status</FormLabel>
        <FormGroup>
          {switches}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    );
  }
};

export default OverallFeatureViewer;