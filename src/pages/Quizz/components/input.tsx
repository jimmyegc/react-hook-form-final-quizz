import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
//import lget from "lodash.get";

export const Input = ({ name, register, style, ...rest }) => {
  const context = useFormContext();
  //const { errors: allErrors } = context || {};
  //const error = lget(allErrors, name);

  return (
    <div style={style}>
      <input
        /* style={error ? { backgroundColor: "red" } : {}} */
        name={name}
        ref={register}
        {...rest}
      />

      {/* {error && (
        <div style={{ backgroundColor: "black", color: "white" }}>
          {error.message}
        </div>
      )} */}
    </div>
  );
}

Input.propTypes = {
  style: PropTypes.object
};
Input.defaultProps = {
  style: {}
};

export default Input;
