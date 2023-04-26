import React, {ChangeEvent, FC, FocusEvent} from "react";
import styles from "./RestingPlacesComponent.module.css";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {CustomCheckbox} from "@/src/components/CustomCheckbox/CustomCheckbox";

type RestingPlacesComponentPropsType = {
  handleChange: (e: ChangeEvent<any>) => void
  handleBlur: (e: FocusEvent<any>) => void
  handleSubmit: () => void,
  values: any,
  errors: any,
  isValid: any,
  touched: any,
}

const RestingPlacesComponent: FC<RestingPlacesComponentPropsType> = ({
                                                               handleChange,
                                                               handleBlur,
                                                               handleSubmit,
                                                               touched,
                                                               errors,
                                                               isValid,
                                                               values
                                                             }) => {
  return (
      <div className={styles.restingPlacesBlock}>
        <InputBlock
            required
            type="descriptionRestingPlaces"
            name="descriptionRestingPlaces"
            placeholder="Введите данные"
            title="Опишите подробно:
Какие именно вы оказываете услуги/
Если услуг много,расписать каждую/
Написать расписание/
Опишите в чём ваше преимущество перед конкурентами/
Техника безопасности"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descriptionRestingPlaces}
            className={errors.descriptionRestingPlaces && touched.descriptionRestingPlaces ? styles.inputError : ""}
        />
        {touched.descriptionRestingPlaces && errors.descriptionRestingPlaces && (
            <p className={styles.errorValidation}>{errors.descriptionRestingPlaces}</p>
        )}
      </div>
  );
};

export default RestingPlacesComponent;
