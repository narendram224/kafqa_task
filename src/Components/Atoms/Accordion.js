import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Accordion.css'

import SettingsIcon from '@material-ui/icons/Settings'
import HorizontalTabs from './HorizontalTab'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        boxSizing: 'border-box',
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}))

const AccordionCom = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState('panel1')

    const handleChange = (panel) => (event, isExpanded) => {
        console.log('the palen Data', panel)

        setExpanded(isExpanded ? panel : false)
    }
    console.log('expanded Data', expanded)

    return (
        <div className={'Ticker_Wrapper'}>
            <Accordion
                expanded={expanded === 'panel1'}
                className={classes.root}
                square={true}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            style={{ color: 'var(--grey-color)' }}
                        />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <label style={{ textTransform: 'uppercase' }}>Ticker</label>
                    {expanded === 'panel1' && (
                        <SettingsIcon className="iconsStyle" />
                    )}
                </AccordionSummary>

                <AccordionDetails>
                    <HorizontalTabs />
                    <StarBorderRoundedIcon className="iconsStyle startIcon" />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default AccordionCom
