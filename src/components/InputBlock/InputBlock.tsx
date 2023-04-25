import styles from "./InputBlock.module.css";
import {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    >;

type InputBlockPropsType = DefaultInputPropsType & {
  placeholder: string
  title: string
  required?: boolean
}

export const InputBlock: FC<InputBlockPropsType> = ({title, placeholder, required, className, ...restProps}) => {
  return (
      <div className={styles.inputBlock}>
        <label className={styles.inputTitle}>{title} {required && <span>*</span>}</label>
        <input className={`${styles.input} ${className}`} type="text" placeholder={placeholder}
               name="nameOfSmartphones" {...restProps}/>
      </div>
  );
};
