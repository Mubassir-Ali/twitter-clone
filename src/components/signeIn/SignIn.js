import React from 'react'
import './SignIn.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, IconButton } from '@material-ui/core';
import {auth,provider} from '../../firebase'

function SignIn() {

    const loginWithGoogle=()=>{

        auth.signInWithPopup(provider).catch((error)=>alert(error.message))



    }
    return (
        <div className='signIn'>
        <IconButton><TwitterIcon className='twitter_icon'/></IconButton>
        <Button onClick={loginWithGoogle} variant='outlined' className='login_button'>Login with Google</Button>

            
        </div>
    )
}

export default SignIn
