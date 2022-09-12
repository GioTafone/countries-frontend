import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 250,
  },
  '&:hover': {
    pointerEvents: 'none',
  },
})

export { useStyles }
