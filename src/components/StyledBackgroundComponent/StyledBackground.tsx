import colors from '../../constants/Themes/colors';
import useStyles from './StyledBackground.styles';

interface StyledBackgroundInterface{
    children: any,
    backgroundImage: any,
    backgroundColor?:""
}

export default function StyledBackground({children}: StyledBackgroundInterface) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}
