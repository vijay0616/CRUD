import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { DataValue } from "./store/types";
import { TextFieldComponent } from "../../components/TextFieldComponent";
import Alert from "@mui/material/Alert";
import "./dashboard.css";

export const Dashboard = (props: any): JSX.Element => {
  const {
    dashboardRequest,
    dashboardReducer,
    formReducer,
    formData,
    formUpdateRequest,
    formRest,
    modalChange,
  } = props;

  const { dataRecords } = dashboardReducer;

  const handleOpen = (data: DataValue) => {
    formData(data);
    modalChange(true);
  };

  const handleClose = () => modalChange(false);

  useEffect(() => {
    formRest();
    dashboardRequest();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formData({ ...formReducer.formData, [name]: value });
  };

  const submitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    formUpdateRequest(formReducer.formData);
  };

  if (formReducer.success) {
    setTimeout(() => {
      formRest();
    }, 3000);
  }

  return (
    <Box sx={{ minWidth: 275, marginTop: 10 }}>
      <Grid container spacing={2}>
        {dataRecords.map((data: DataValue, index: number) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Button
                  sx={{ float: "right" }}
                  onClick={() => handleOpen(data)}
                >
                  Edit
                </Button>
                <Typography variant="h5" component="div">
                  {data.userId}-{data.id}-{data.title}
                </Typography>
                <Typography variant="body2">{data.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={formReducer.modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <div className="message_width">
            {formReducer.success && (
              <div className="message_width">
                <Alert
                  severity={formReducer.success ? "success" : "error"}
                >{`Success.. ID-${formReducer.successMessage.id} Updated`}</Alert>
              </div>
            )}
          </div>

          <form onSubmit={submitForm} className="form_section">
            <h2>Update Resource</h2>

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
        </Box>
      </Modal>
    </Box>
  );
};
