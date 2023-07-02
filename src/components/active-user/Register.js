import React, { Component } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase.js"

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: ""
		};
	}

	handleInputNameChange = e => {
		const { value } = e.target;
		this.setState({ name: value });
	  };
	handleInputEmailChange = e => {
		const { value } = e.target;
		this.setState({ email: value });
	  };
	handleInputPassChange = e => {
		const { value } = e.target;
		this.setState({ password: value });
	  };
	handleSubmit = (e) => {
		console.log('line 28:::: ')
		e.preventDefault();
	}
	signup = () => {
		console.log("line 31:::")
		createUserWithEmailAndPassword(auth, this.state.email, this.state.password).then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log('User signed up:', user);
			// ...
		})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log("line 19::: ", errorCode, errorMessage)
			})
	}

	render() {
		return (
			<div className="modal about-modal w3-agileits fade" id="myModal3" tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div className="modal-body login-page ">
							<div className="login-top sign-top">
								<div className="agileits-login">
									<h5>Register</h5>
									<form onSubmit={this.signup}>
										<input type="text" name="Username" placeholder="Username" required="" onChange={this.handleInputNameChange} />
										<input type="email" name="Email" placeholder="Email" required="" onChange={this.handleInputEmailChange}/>
										<input type="password" name="Password" placeholder="Password" required="" onChange={this.handleInputPassChange} />
										<div className="wthree-text">
											<ul>
												<li>
													<label className="anim">
														<input type="checkbox" className="checkbox" />
														<span> I accept the terms of use</span>
													</label>
												</li>
											</ul>
											<div className="clearfix"> </div>
										</div>
										<div className="w3ls-submit">
											<input type="submit" value="Register" />
										</div>
									</form>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
