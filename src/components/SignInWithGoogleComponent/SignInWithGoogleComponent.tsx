import { ClassNames } from '@emotion/react'
import { Button } from '@mui/material'
import useStyles from './SignInWithGoogleComponent.styles'

interface SignInWithGoogleInterface {
    title: string
}

export default function SignInWithGoogleComponent({ title }: SignInWithGoogleInterface) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button size="small" fullWidth>{title} with Google</Button>
        </div>
    )
}
