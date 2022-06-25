import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { TextFieldComponent } from "../../components/TextFieldComponent";
import Alert from "@mui/material/Alert";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./style.css";

export const Form = (props: any): JSX.Element => {
  const { formReducer, formData, formRequest, formRest } = props;

  const users = formReducer.users;

  const handleChange = (
    event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    formData({ ...formReducer.formData, [name]: value });
  };

  const submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    formRequest(formReducer.formData);
  };

  if (formReducer.success) {
    setTimeout(() => {
      formRest();
    }, 3000);
  }
  useEffect(() => {
    formRest();
  }, []);

  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} className="mt-5 center">
            {formReducer.success && (
              <div className="message_width">
                <Alert
                  severity={formReducer.success ? "success" : "error"}
                >{`Success.. ID-${formReducer.successMessage.id} created`}</Alert>
              </div>
            )}

            <form onSubmit={submitForm} className="form_section">
              <h2>Add New Resource</h2>
              <FormControl className="input_size">
                <InputLabel id="demo-simple-select-label">User Id</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="User Id"
                  onChange={handleChange}
                  name="userId"
                  value={formReducer.formData.userId ?? ""}
                  required={true}
                >
                  <MenuItem value="" hidden>
                    Select User ID
                  </MenuItem>
                  {users.map((user: any, index: number) => (
                    <MenuItem value={user.id} key={index}>
                      {user.id}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextFieldComponent
                color="primary"
                id="text-title"
                name="title"
                label="Title"
                className="input_size"
                onchangeHandler={handleChange}
                value={formReducer.formData.title ?? ""}
                required={true}
              />

              <TextFieldComponent
                color="primary"
                id="text-body"
                name="body"
                label="Body"
                multiline={true}
                className="input_size"
                value={formReducer.formData.body ?? ""}
                onchangeHandler={handleChange}
                required={true}
              />

              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
