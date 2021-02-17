import React, { Component } from 'react'
import { connect } from 'react-redux';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import { find } from '../../Store';

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedValue : 'all'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.state.selectedValue = e.target.value;
    let action = find(e.target.value);
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">カテゴリで絞り込む</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel value="all" control={<Radio
              checked={this.state.selectedValue === 'all'}
              onChange={this.handleChange}
            />} label="ALL" />
            <FormControlLabel value="jisha_service" control={<Radio
              checked={this.state.selectedValue === 'jisha_service'}
              onChange={this.handleChange}
            />} label="自社サービス" />
            <FormControlLabel value="sier" control={<Radio
              checked={this.state.selectedValue === 'sier'}
              onChange={this.handleChange}
            />} label="SIer" />
            <FormControlLabel value="consulting" control={<Radio
              checked={this.state.selectedValue === 'consulting'}
              onChange={this.handleChange}
            />} label="コンサル" />
            <FormControlLabel value="etc" control={<Radio
              checked={this.state.selectedValue === 'etc'}
              onChange={this.handleChange}
            />} label="その他" />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

export default connect((state) => state)(Filter);