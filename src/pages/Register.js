import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Section from "../components/Section/Section";
import Loader from "react-loader-spinner";
import Button from "../components/Button/Button";
import {
    Tittle,
    Form,
    FormRow,
    CheckBoxWrapper,
    InputLabel,
    InputText,
    TextArea,
    InputCheckbox,
    InputError,
    Center,
  } from "../lib/style/generalStyles";
  import { breakpoints } from "../lib/style/theme";
import { Title } from "../components/EventCard/EventCardStyles";

  const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
        isAdmin: false,
      },
  
      validationSchema: Yup.object({
        firstName: Yup.string().required("First name is required!"),
        lastName: Yup.string().required("Last name is required!"),
        email: Yup.string()
          .email("Invalid email adress")
          .required("Your email is required!"),
        password: Yup.string()
          .min(8, "Password must contain at least 8 characters")
          .required("Password is required"),
        passwordConfirmation: Yup.string().test(
          "passwords-match",
          "passwords must-match",
          function (value) {
            return this.parent.password === value;
          }
        ),
      }),
  
      onSubmit: (values) => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          alert(JSON.stringify(values));
        }, 2000);
      },
    });
    return (
      <>
      <Title>Register</Title>
        <Section withoutTopPadding={true}>
          <Center>
            {!isLoading ? (
              <Form onSubmit={formik.handleSubmit}>
                <FormRow marginBottom={true}>
                  <InputLabel htmlFor="firstName">First name</InputLabel>
                  <InputText
                    id="firstName"
                    type="text"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <InputError>{formik.errors.firstName}</InputError>
                  ) : null}
                </FormRow>
                <FormRow marginBottom={true}>
                  <InputLabel htmlFor="lastName">Last name</InputLabel>
                  <InputText
                    id="lastName"
                    type="text"
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <InputError>{formik.errors.lastName}</InputError>
                  ) : null}
                </FormRow>
                <FormRow marginBottom={true}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <InputText
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <InputError>{formik.errors.email}</InputError>
                  ) : null}
                </FormRow>
                <FormRow marginBottom={true}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <InputText
                    id="password"
                    type="text"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <InputError>{formik.errors.password}</InputError>
                  ) : null}
                </FormRow>
                <FormRow marginBottom={true}>
                  <InputLabel htmlFor="passwordConfirmation">
                    Confirm password
                  </InputLabel>
                  <InputText
                    id="passwordConfirmation"
                    type="text"
                    {...formik.getFieldProps("passwordConfirmation")}
                  />
                  {formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation ? (
                    <InputError>{formik.errors.passwordConfirmation}</InputError>
                  ) : null}
                </FormRow>
                <FormRow marginBottom={true}>
                  <CheckBoxWrapper>
                    <InputCheckbox
                      id="isAdmin"
                      type="checkbox"
                      {...formik.getFieldProps("isAdmin")}
                    />
                    <InputLabel htmlFor="isAdmin">Register as Admin</InputLabel>
                  </CheckBoxWrapper>
                </FormRow>
                <Button text="Register" />
              </Form>
            ) : (
              <Loader type="TailSpin" color="#e4b43c" height={100} width={100} />
            )}
          </Center>
        </Section>
      </>
    );
  };
  
  export default Register;