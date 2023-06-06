import React from "react";
import styles from "../../css/Components/Form/Input.module.css";
import { Proptypes } from "prop-types";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {" "}
        {label}{" "}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error && <p className={styles.error}>{error}</p>}
      onBlur = {onBlur}
    </div>
  );
};

export default Input;
