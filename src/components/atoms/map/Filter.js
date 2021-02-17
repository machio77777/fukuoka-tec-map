import React, { Component } from 'react'
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { CATEGORY_ALL, CATEGORY_SIER, CATEGORY_JISHA_SERVICE, CATEGORY_CONSULTING, CATEGORY_ETC } from '../json/company';
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
            <FormControlLabel value={CATEGORY_ALL} control={<Radio
              checked={this.state.selectedValue === CATEGORY_ALL}
              onChange={this.handleChange}
            />} label="ALL" />
            <FormControlLabel value={CATEGORY_JISHA_SERVICE} control={<Radio
              checked={this.state.selectedValue === CATEGORY_JISHA_SERVICE}
              onChange={this.handleChange}
            />} label="自社サービス" />
            <FormControlLabel value={CATEGORY_SIER} control={<Radio
              checked={this.state.selectedValue === CATEGORY_SIER}
              onChange={this.handleChange}
            />} label="SIer" />
            <FormControlLabel value={CATEGORY_CONSULTING} control={<Radio
              checked={this.state.selectedValue === CATEGORY_CONSULTING}
              onChange={this.handleChange}
            />} label="コンサル" />
            <FormControlLabel value={CATEGORY_ETC} control={<Radio
              checked={this.state.selectedValue === CATEGORY_ETC}
              onChange={this.handleChange}
            />} label="その他" />
          </RadioGroup>
        </FormControl>
      </div>
    )
  }
}

export default connect((state) => state)(Filter);