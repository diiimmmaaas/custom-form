import React, {ChangeEvent, FC, FocusEvent} from "react";
import styles from "./LeisureComponent.module.css";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {CustomCheckbox} from "@/src/components/CustomCheckbox/CustomCheckbox";

type LeisureComponentPropsType = {
  handleChange: (e: ChangeEvent<any>) => void
  handleBlur: (e: FocusEvent<any>) => void
  handleSubmit: () => void,
  values: any,
  errors: any,
  isValid: any,
  touched: any,
}

const LeisureComponent: FC<LeisureComponentPropsType> = ({
                                                               handleChange,
                                                               handleBlur,
                                                               handleSubmit,
                                                               touched,
                                                               errors,
                                                               isValid,
                                                               values
                                                             }) => {
  return (
      <div className={styles.leisureBlock}>
        <InputBlock
            required
            type="descriptionLeisure"
            name="descriptionLeisure"
            placeholder="Введите данные"
            title="Опишите подробно:
Какие именно вы оказываете услуги
Если услуг много,расписать каждую
Написать расписание
Опишите в чём ваше преимущество перед конкурентами
Техника безопасности (в категории Активный отдых)"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descriptionLeisure}
            className={errors.descriptionLeisure && touched.descriptionLeisure ? styles.inputError : ""}
        />
        {touched.descriptionLeisure && errors.descriptionLeisure && (
            <p className={styles.errorValidation}>{errors.descriptionLeisure}</p>
        )}
        <CustomCheckbox
            name='waterLeisure'
            title="Водный активный отдых (в категории Активный отдых)"
            options={[
              {id: 1, title: "Рафтинг"},
              {id: 2, title: "Каноэ"},
              {id: 3, title: "Яхты/лодки"},
            ]}
        />
        <CustomCheckbox
            name='winterLeisure'
            title="Зимний активный отдых (в категории Активный отдых)"
            options={[
              {id: 1, title: "Санки/тюбинг"},
              {id: 2, title: "Горнолыжный спорт"},
              {id: 3, title: "Катание на ездовых собаках(хаски)"},
              {id: 4, title: "Катание на снегоходе"},
            ]}
        />
        <CustomCheckbox
            name='extremeLeisure'
            title="Экстремальный отдых (в категории Активный отдых)"
            options={[
              {id: 1, title: "Веревочный парк"},
              {id: 2, title: "Экстрим-парк"},
              {id: 3, title: "Каньонинг"},
              {id: 4, title: "Дельтаплан"},
              {id: 5, title: "Парашют"},
            ]}
        />
        <CustomCheckbox
            name='landLeisure'
            title="Сухопутный активный отдых (в категории Активный отдых)"
            options={[
              {id: 1, title: "Прогулки на лошадях"},
              {id: 2, title: "Квадроциклы"},
              {id: 3, title: "Джиппинг"},
              {id: 4, title: "Канатная дорога"},
              {id: 5, title: "Походы"},
              {id: 6, title: "Экскурсии"},
              {id: 7, title: "Квесты"},
            ]}
        />
      </div>
  );
};

export default LeisureComponent;
