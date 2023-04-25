import styles from "./CustomCheckbox.module.css";
import {FC} from "react";
import {Field} from "formik";

type CustomCheckboxPropsType = {
  options: string[]
  title: string
  required?: boolean
}

export const CustomCheckbox: FC<CustomCheckboxPropsType> = ({
                                                              options,
                                                              title,
                                                              required, ...restProps
                                                            }) => {
  return (
      <div className={styles.checkboxBlock}>
        <h2 className={styles.checkboxTitle}>{title}</h2>
        <div className={styles.checkboxesContainer}>
          {options.map((option, index) => {
            return <div key={index} className={styles.checkboxContainer}>
              <Field className={styles.checkbox} id="formBox" type="checkbox" name="checkedCategory" value={option} />
              <label className={styles.checkboxLabel}
                     htmlFor="formBox">{option}</label>
            </div>;
          })}
          <div className={styles.checkboxContainer}>
            <Field className={styles.checkbox} id="formBox" type="checkbox" name="checkedCategory" value='Другое' />
            <label className={styles.checkboxLabel} htmlFor="formBox">Другое</label>
          </div>
        </div>
      </div>
  );
};
