import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";

import { Formik, Form } from "formik";
import * as yup from "yup";

let SignupSchema = yup.object().shape({
  email: yup.string().email().required("This field is required."),
});

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
  },
}));

export default function Form2({ handleNext }) {
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
          email: "",
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
                    id="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
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
