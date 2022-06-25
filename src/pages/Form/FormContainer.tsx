import {
  formData,
  formRequest,
  formSuccess,
  formFailed,
  formRest,
} from "./store/actions";
import { ApplicationState } from "../../stores/index";
import { Form } from "./Form";
import { connect } from "react-redux";

const mapStateToProps = (props: ApplicationState) => {
  return {
    dashboardReducer: props.dashboardReducer,
    formReducer: props.formReducer,
  };
};

const mapStateToDispatch = {
  formData,
  formRequest,
  formSuccess,
  formFailed,
  formRest,
};

export default connect(mapStateToProps, mapStateToDispatch)(Form);
