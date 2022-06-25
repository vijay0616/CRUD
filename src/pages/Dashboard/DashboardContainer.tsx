import {
  dashboardRequest,
  dashboardSuccess,
  dashboardFailed,
} from "./store/actions";
import {
  formData,
  formUpdateRequest,
  formSuccess,
  formFailed,
  formRest,
  modalChange,
} from "../Form/store/actions";
import { ApplicationState } from "../../stores/index";
import { Dashboard } from "./Dashboard";
import { connect } from "react-redux";

const mapStateToProps = (props: ApplicationState) => {
  return {
    dashboardReducer: props.dashboardReducer,
    formReducer: props.formReducer,
  };
};

const mapStateToDispatch = {
  dashboardRequest,
  dashboardSuccess,
  dashboardFailed,
  formData,
  formUpdateRequest,
  formSuccess,
  formFailed,
  formRest,
  modalChange,
};

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
