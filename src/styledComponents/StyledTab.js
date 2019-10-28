import {withStyles} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
require('typeface-montserrat')

const StyledTab = withStyles({
    root: {
        fontSize: '1.5em',
        padding: '1em',
        fontFamily: 'Montserrat',
        textTransform: 'capitalize',
    },
    selected: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',

    }
})(Tab);

export default StyledTab;