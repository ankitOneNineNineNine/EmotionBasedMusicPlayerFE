import React from "react";
import { dispError, dispSuccess } from "../helpers/toaster";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../reduxComponents/action";
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      register: false,
      takenEmail: [],
      takenUserName: [],
      formErr: {
        email: "Empty field",
        userName: "Empty field",
        password: "Empty field",
      },
      formDet: {
        email: "",
        userName: "",
        password: "",
      },
    };
  }

  componentDidMount() {
    axios({
      url: `http://localhost:8000/auth/checkDuplicate`,
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {},
    }).then((data) => {
      var takenEmail = [];
      var takenUserName = [];
      data.data.forEach((record) => {
        takenEmail.push(record.email);
        takenUserName.push(record.userName);
      });

      this.setState({
        takenEmail,
        takenUserName,
      });
    });
  }

  formChange = (e) => {
    let { name, value } = e.target;
    this.setState(
      (prev) => ({
        formDet: {
          ...prev.formDet,
          [name]: value,
        },
      }),
      () => {
        this.validator(name);
      }
    );
  };
  validator = (name) => {
    if (this.state.formDet[name].length > 0) {
      if (name === "email" && !this.state.formDet[name].includes("@")) {
        this.setState((prev) => ({
          formErr: {
            ...prev.formErr,
            [name]: "Invalid Email",
          },
        }));
      } else if (
        name === "email" &&
        this.state.takenEmail.indexOf(this.state.formDet[name]) > -1
      ) {
        this.setState((prev) => ({
          formErr: {
            ...prev.formErr,
            [name]: name + " already taken",
          },
        }));
      } else if (
        name === "userName" &&
        this.state.takenUserName.indexOf(this.state.formDet[name]) > -1
      ) {
        this.setState((prev) => ({
          formErr: {
            ...prev.formErr,
            [name]: name + " already taken",
          },
        }));
      } else if (name === "password" && this.state.formDet[name].length < 8) {
        this.setState((prev) => ({
          formErr: {
            ...prev.formErr,
            [name]: "Password length less than 8",
          },
        }));
      } else {
        this.setState((prev) => ({
          formErr: {
            ...prev.formErr,
            [name]: "",
          },
        }));
      }
    } else {
      this.setState((prev) => ({
        formErr: {
          ...prev.formErr,
          [name]: "Empty Field",
        },
      }));
    }
  };
  submit = (e) => {
    e.preventDefault();
    let err = Object.values(this.state.formErr);
    let submit = err.every((err) => err.length === 0);
    if (!this.state.register) {
      submit = true;
    }
    let url;
    if (this.state.register) {
      url = `http://localhost:8000/auth/register`;
    } else {
      url = `http://localhost:8000/auth/login`;
    }
    if (submit) {
      axios({
        url: url,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: this.state.formDet,
      })
        .then((data) => {
          localStorage.setItem("$token$", JSON.stringify(data.data.token));

          this.props.setUser(data.data.user);
          dispSuccess(`Hello ${data.data.user.userName}`);
          this.props.dispForm(false);
        })
        .catch((err) => {
          dispError(err);
        });
    }
  };
  render() {
    return (
      <div>
        <span onClick={() => this.props.dispForm(false)}>&times;</span>
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">
                {this.state.register ? "Sign Up" : "Sign In"}
              </legend>
              <div className="mt3">
                {this.state.register ? (
                  <>
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      Email
                    </label>
                    <input
                      onChange={this.formChange}
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email"
                      id="email-address"
                      value={this.state.formDet.email}
                    />
                    <p style={{ color: "red" }}>{this.state.formErr.email}</p>
                    <label className="db fw6 lh-copy f6" htmlFor="userName">
                      Username
                    </label>
                    <input
                      onChange={this.formChange}
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="userName"
                      value={this.state.formDet.userName}
                      id="userName"
                    />
                    <p style={{ color: "red" }}>
                      {this.state.formErr.userName}
                    </p>
                  </>
                ) : (
                  <>
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      Email or Username
                    </label>
                    <input
                      onChange={this.formChange}
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="userName"
                      value={this.state.formDet.userName}
                      id="userName"
                    />
                  </>
                )}
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>

                <input
                  onChange={this.formChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.formDet.password}
                />
                {this.state.register ? (
                  <p style={{ color: "red" }}>{this.state.formErr.password}</p>
                ) : null}
              </div>
            </fieldset>
            <div className="">
              {!this.state.register ? (
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  onClick={this.submit}
                  value="Sign in"
                />
              ) : (
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  onClick={this.submit}
                  value="Sign up"
                />
              )}
            </div>
            <div className="lh-copy mt3">
              {!this.state.register ? (
                <>
                  <span
                    className="f6 link dim black db"
                    onClick={() =>
                      this.setState({
                        register: true,
                        formDet: { email: "", password: "", userName: "" },
                        formErr: {
                          email: "Empty field",
                          userName: "Empty field",
                          password: "Empty field",
                        },
                      })
                    }
                  >
                    Sign up
                  </span>
                  <a href="#0" className="f6 link dim black db">
                    Forgot your password?
                  </a>
                </>
              ) : (
                <span
                  className="f6 link dim black db"
                  onClick={() =>
                    this.setState({
                      register: false,
                      formDet: { email: "", password: "", userName: "" },
                      formErr: {
                        email: "Empty field",
                        userName: "Empty field",
                        password: "Empty field",
                      },
                    })
                  }
                >
                  Sign in
                </span>
              )}
            </div>
          </form>
        </main>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Form);
