import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid brown',
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: 'orange',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
  focused: {},
}));

export { useStyles };
