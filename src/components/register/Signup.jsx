import {Component} from 'react';
import axios from "axios";
import "./SignIn"
import {NavLink} from "react-router-dom";
//import {errors} from "msw/lib/types/context";
class Signup extends Component {
        state = {
            username: "",
            emil: "",
            password: "",
            passwordRepeat: "",
            apiProgress: false,
            signUpSuccess: false,
            errors: {}
        };
        onChange = (event) => {
            const {id, value} = event.target;
            this.setState({
                [id]: value
            })
        }
        submit = async (event) => {
            event.preventDefault();
            const {username, email, password} = this.state;
            const body = {
                username,
                email,
                password
            }
            this.setState({apiProgress: true})
            try {
                await axios.post("/api/1.0/users", body)
                this.setState({signUpSuccess: true})
            } catch (error) {
                if (error.response.status === 400) {
                    this.setState({errors: error.response.data.validationErrors});
                }
            }
        };
        render() {
            {/*const disabled = false;
        setTimeout(()=>{
            console.log("updating disabled");
            this.setState({disabled:false})
        },100)*/
            }
            let disabled = true;
            const {password, passwordRepeat, apiProgress, signUpSuccess, errors} = this.state;
            if (password && passwordRepeat) {
                disabled = password !== passwordRepeat;
            }

            return (
                <div className={"container"} data-testid={"signup-page"}>
                    {!signUpSuccess &&
                        <form className={"mt-5"} data-testid={"form-sign-up"}>
                            <h1>Sign Up</h1>
                            <div className={"mb-3"}>
                                <label className="form-label" htmlFor={"username"}>UserName </label>
                                <input className="form-control" id={"username"} onChange={this.onChange}/>
                                <span>{errors.username}</span>
                            </div>
                            <div className={"mb-3"}>
                                <label className="form-label" htmlFor={"email"}>E-mail </label>
                                <input className="form-control" id={"email"} onChange={this.onChange}/><br/>
                            </div>
                            <div className={"mb-3"}>
                                <label className="form-label" htmlFor={"password"}>Password </label>
                                <input className="form-control" type="password" id={"password"}
                                       onChange={this.onChange}/><br/>
                            </div>
                            <div className={"mb-3"}>
                                <label className="form-label" htmlFor={"passwordRepeat"}>Password Repeat</label>
                                <input className="form-control" type={"password"} id={"passwordRepeat"}
                                       onChange={this.onChange}/><br/>
                            </div>
                            <div>
                                <button className={"g-btn btn-outline-success"} disabled={disabled || apiProgress}
                                        onClick={this.submit}>Sign Up
                                </button>
                                {apiProgress &&
                                    <span className="spinner-border spinner-border-sm" role="status"></span>}
                            </div>
                            <div>
                                <NavLink to="/SignIn" className="badge bg-primary text-wrap">I already have an account</NavLink>
                            </div>
                        </form>}
                    {signUpSuccess && (
                        <div className="alert alert-success" role="alert">
                            <div>
                                Please check your e-mail to activate your account
                            </div>
                        </div>
                    )}
                </div>
            );
        }

}
export default Signup;