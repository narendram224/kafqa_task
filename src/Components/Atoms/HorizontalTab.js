import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './HorizontalTab.css';
import InputField from './InputField';
import SelectOpt from './SelectOpt';
import EnhancedTable from './TickerHistoryTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
    boxSizing:'border-box',

  },
}));

export default function HorizontalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tab_wrapper">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Trading" {...a11yProps(0)} />
          <Tab label="Derivatives" {...a11yProps(1)} />
          <Tab label="Funding" {...a11yProps(2)} />
        </Tabs>
      {/* </AppBar> */}
      <TabPanel value={value} index={0}>
       <header className="trading_tab_header">
            <InputField type="text" />
            <SelectOpt />
       </header>
       <section className="trading_tab_main_wrapper">
    <EnhancedTable />
</section>       
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

