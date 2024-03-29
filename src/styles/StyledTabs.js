import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const StyledTabs = withStyles({
    root: {
        paddingTop: '5em',
    },
    indicator: {
        backgroundColor: '#F2F2F2',
        width: '5px',
        left: 0,
    },
})(Tabs);

export default StyledTabs;