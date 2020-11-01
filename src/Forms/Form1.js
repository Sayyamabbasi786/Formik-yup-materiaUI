import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
  },
}));

export default function Form1({ handleNext }) {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            handleNext();
          }, 400);
        }}
      >
        {({ errors, handleChange, touched }) => (
          <Form className={classes.form}>
            <Card>
              <CardContent>
                <FormGroup>
                  <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    onChange={handleChange}
                    error={errors.firstName && touched.firstName}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </FormGroup>

                <br />
                <FormGroup>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    onChange={handleChange}
                    error={errors.lastName && touched.lastName}
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </FormGroup>
                <br />
                <Button type="submit" variant="contained" color="primary">
                  Next
                </Button>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
