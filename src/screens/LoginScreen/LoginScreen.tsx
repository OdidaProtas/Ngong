import { Grid } from '@mui/material'
import { OnboardingComponent, AuthenticationFormComponent, StyledBackground } from '../../components'


const fields = [
    { label: "+254", name: "phoneNumber" },
    { label: "Create Password", name: "password" }];

export default function LoginScreen() {
    return (
        <div>
            <Grid container>
                <Grid item xs>
                    <OnboardingComponent />
                </Grid>
                <Grid item xs>
                    <StyledBackground backgroundImage>
                        <AuthenticationFormComponent fields={fields} />
                    </StyledBackground>
                </Grid>
            </Grid>
        </div>
    )
}
