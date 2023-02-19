import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Minumum 4 Character required ")
    .max(30, "Too Long!")
    .required("name is Required"),
  password: Yup.string()
    .min(6, "Minumum 6 Character required")
    .max(30, "Too Long!")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email ID is Required"),
});

const About = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate("Home");
  const handleSubmit = (values) => {
    console.log(values);
    navigate("/home");
    setdata(values);
    console.log("---------------", data);
  };

  return (
    <div style={{ width: "30%", margin: "10px auto", textAlign: "center" }}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          touched,
          handleSubmit,
        }) => (
          <div>
            <input
              style={{ width: "80%", margin: "5px", padding: "12px 15px" }}
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <h4
                style={{ color: "red", textAlign: "left", paddingLeft: "30px" }}
              >
                {errors.name}
              </h4>
            )}
            <input
              style={{ width: "80%", margin: "5px", padding: "12px 15px" }}
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <h4
                style={{ color: "red", textAlign: "left", paddingLeft: "30px" }}
              >
                {errors.email}
              </h4>
            )}
            <input
              style={{ width: "80%", margin: "5px", padding: "12px 15px" }}
              type="text"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="password"
            />
            {touched.password && errors.password && (
              <h4
                style={{ color: "red", textAlign: "left", paddingLeft: "30px" }}
              >
                {errors.password}
              </h4>
            )}
            <button
              title="Submit"
              onClick={handleSubmit}
              style={{
                padding: "12px 15px",
                color: "white",
                backgroundColor: "black",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default About;
