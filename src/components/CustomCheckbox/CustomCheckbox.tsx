import styles from "./CustomCheckbox.module.css";
import {FC} from "react";
import {Field} from "formik";
import {CategoryOptionsType} from "@/pages";

type CustomCheckboxPropsType = {
  options: CategoryOptionsType[]
  title: string
  name: any[]
  required?: boolean
}

export const CustomCheckbox: FC<CustomCheckboxPropsType> = ({
                                                              name,
                                                              options,
                                                              title,
                                                              required, ...restProps
                                                            }) => {
  return (
      <div className={styles.checkboxBlock}>
        <h2 className={styles.checkboxTitle}>{title}</h2>
        <div className={styles.checkboxesContainer}>
          {options.map((option, index) => {
            return <div key={option.id} className={styles.checkboxContainer}>
              <Field className={styles.checkbox} id="formBox" type="checkbox" name={name}
                     value={option.title}/>
              <label className={styles.checkboxLabel}
                     htmlFor="formBox">{option.title}</label>
            </div>;
          })}
        </div>
      </div>
  );
};
