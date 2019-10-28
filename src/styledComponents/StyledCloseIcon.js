import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const StyledCloseIcon = withStyles({
    root:{
        color: 'white',
    },
})(CloseIcon);

export default StyledCloseIcon;