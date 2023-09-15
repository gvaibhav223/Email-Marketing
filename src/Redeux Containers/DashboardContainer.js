import { connect } from "react-redux";
import Dashboard from "../Pages/View/Dashboard/Dashboard";
import { addtocart, removetocart } from "../Redux/Action/action";

const mapStateToProps = (state) => ({
  data: state?.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  addtocartHandler: (data) => dispatch(addtocart(data)),
  removetocartHandler: (data) => dispatch(removetocart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
