import React from "react";
import { useForm } from "react-hook-form";
import { Link,useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const { googleSignin, userRegistration,error,setError,profileUpdate } = useAuth();

  const history=useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setEmail(data.Email);
    // setPassword(data.Password);
    userRegistration(data.Email, data.Password)
    .then((userCredential) => {
      //const newUser = userCredential.user;      
      setError("");
      //console.log(newUser);
      history.push('/login');
    })
    .then(()=>{
      profileUpdate(data.UserName)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      console.error(errorMessage);
    });;
  };

  return (
    <div className="container">
      
      <div className="row row-cols-3 justify-content-center">
      
        <div className="mt-3">
          <h2 className="text-center">Registration</h2>
          <br></br>
          <h3 className="text-center text-danger">{error}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                {...register("UserName", { required: true })}
                className="form-control"
              />
              {errors.UserName && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                {...register("Email", { required: true })}
                className="form-control"
              />
              {errors.Email && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                {...register("Password", { required: true })}
                className="form-control"
              />
              {errors.Password && (
                <span className="text-danger">Password is required</span>
              )}
            </div>           

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Signup
            </button>
            <Link className="text-decoration-none ms-5" to="/login">
            Already have an account?
          </Link>
          </form>

          
         
          <hr />
          <button className="btn btn-primary mb-5" onClick={googleSignin}>
            Google Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
