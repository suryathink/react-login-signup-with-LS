import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "../Sign/Sign_img";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  //   console.log(inpval);
  const getData = (e) => {
    const { value, name } = e.target;
    // console.log(value,name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    //  console.log(inpval)

    const getUserArr = localStorage.getItem("userData");
    // console.log(getUserArr)

    const { email, password } = inpval;

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email Addres");
    } else if (password === "") {
      alert("Password Field is Required");
    } else if (password.length < 5) {
      alert("Password Length should be Greater than 5");
    } else {
      if (getUserArr && getUserArr.length) {
        const userInfo = JSON.parse(getUserArr);
        //  console.log(userInfo)
        const userLogin = userInfo.filter((el, i) => {
          return el.email === email && el.password === password;
        });

        if (userLogin.length === 0) {
          alert("Invalid Details");
        } else {
          console.log("User LoggedIn successfully", userLogin);

          localStorage.setItem("user_login", JSON.stringify(userLogin));

          history("/details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-4">Log In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  onChange={getData}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  name="password"
                  onChange={getData}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                onClick={addData}
                variant="primary"
                className="col-lg-6"
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an Account? <NavLink to="/home">Create One</NavLink>{" "}
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
