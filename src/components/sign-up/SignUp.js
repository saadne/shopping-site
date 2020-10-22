import React, { Component } from 'react'

import FormInput from '../form-input/FormInput'
import { auth , createUserProfileDocument} from '../../firebase'
import Button from '../button/Button'

import './signUp.styles.scss'

export class SignUp extends Component {

    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleSubmit = async event =>{
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert("Password don't match" )
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            console.error(error)
        }

    }

    handleChange = event =>{
        const {name, value}= event.target

        this.setState({[name]:value})
    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have account </h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='DisplayName'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handleChange}
                        required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>

            </div>
        )
    }
}

export default SignUp
