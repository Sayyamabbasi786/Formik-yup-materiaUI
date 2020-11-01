import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";

import { Formik, Form } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "50%",
  },
}));

let SignupSchema = yup.object().shape({
  password: yup.string().required("password is required."),
});

export default function Form3({ handleNext }) {
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
          password: "",
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
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </FormGroup>

                <br />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
