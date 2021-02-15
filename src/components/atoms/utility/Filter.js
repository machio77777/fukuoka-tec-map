import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const Filter = () => {

  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('all');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">エリア別で絞り込む</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel value="all" control={<Radio
              checked={selectedValue === 'all'}
              onChange={handleChange}
            />} label="ALL" />
            <FormControlLabel value="tenjin" control={<Radio
              checked={selectedValue === 'tenjin'}
              onChange={handleChange}
            />} label="天神周辺" />
            <FormControlLabel value="hakata" control={<Radio
              checked={selectedValue === 'hakata'}
              onChange={handleChange}
            />} label="博多周辺" />
          </RadioGroup>
          <FormLabel component="legend">カテゴリで絞り込む</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel value="jisyaservice" control={<Radio
              checked={selectedValue === 'jisyaservice'}
              onChange={handleChange}
            />} label="自社サービス" />
            <FormControlLabel value="sier" control={<Radio
              checked={selectedValue === 'sier'}
              onChange={handleChange}
            />} label="SIer" />
            <FormControlLabel value="consultant" control={<Radio
              checked={selectedValue === 'consultant'}
              onChange={handleChange}
            />} label="コンサル" />
            <FormControlLabel value="etc" control={<Radio
              checked={selectedValue === 'etc'}
              onChange={handleChange}
            />} label="その他" />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  )
}

export default Filter