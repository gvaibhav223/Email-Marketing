import { connect } from "react-redux";
import Header from "../Layout/DashboardLayout/Header";
import { addtocart } from "../Redux/Action/action";

const mapStateToProps = (state) => ({
  data: state?.cardItems,
});

const mapDispatchToProps = (dispatch) => ({ 
  //   addtocartHandler: (data) => dispatch(addtocart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
