import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const StyledAppBar = withStyles({
    root: {
        backgroundColor: '#419EF3',
    },
})(AppBar);

export default StyledAppBar;