import React, {ChangeEvent, FC, FocusEvent} from "react";
import styles from "./ResidenceComponent.module.css";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {CustomCheckbox} from "@/src/components/CustomCheckbox/CustomCheckbox";

type ResidenceComponentPropsType = {
  handleChange: (e: ChangeEvent<any>) => void
  handleBlur: (e: FocusEvent<any>) => void
  handleSubmit: () => void,
  values: any,
  errors: any,
  isValid: any,
  touched: any,
}

const ResidenceComponent: FC<ResidenceComponentPropsType> = ({
                                                               handleChange,
                                                               handleBlur,
                                                               handleSubmit,
                                                               touched,
                                                               errors,
                                                               isValid,
                                                               values
                                                             }) => {
  return (
      <div className={styles.residenceBlock}>
        <h2 className='subtitleCategory'>Дополнительные вопросы к категории "Проживание"</h2>
        <InputBlock
            required
            type="typeOfLocation"
            name="typeOfLocation"
            placeholder="Введите данные"
            title="Какой у вас тип размещения
(гостиница,отель,глэмпинг,хостел,кемпинг,туристическая база,домики и тд.д.)(в категории Проживание)."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.typeOfLocation}
            className={errors.typeOfLocation && touched.typeOfLocation ? styles.inputError : ""}
        />
        {touched.typeOfLocation && errors.typeOfLocation && (
            <p className={styles.errorValidation}>{errors.typeOfLocation}</p>
        )}
        <InputBlock
            required
            type="descriptionResidence"
            name="descriptionResidence"
            placeholder="Введите данные"
            title="Подробно опишите:
-Как давно вы работаете, если давно, обновлялся ли номерной.
-Что есть у вас территории(бассейн, водоем, детская площадка, беседки, мангальная зона, баня, SPA, ресторан, кафе).
-Категория звездности, категории номерного фонда.
-Оснащени номеров.
-Дополнительные услуги.
-В чем ваше преимущество перед вашими конкурентами.
Расстояние до достопримечательностей.
Максимально подробное описание ваших услуг."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descriptionResidence}
            className={errors.descriptionResidence && touched.descriptionResidence ? styles.inputError : ""}
        />
        {touched.descriptionResidence && errors.descriptionResidence && (
            <p className={styles.errorValidation}>{errors.descriptionResidence}</p>
        )}
        <InputBlock
            required
            type="scheduleResidence"
            name="scheduleResidence"
            placeholder="Введите данные"
            title="Укажите часы работы стойки регистрации/ Часы заезда и выезда/ Услуга РАННИЙ ЗАЕЗД/ПОЗДНИЙ ВЫЕЗД."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.scheduleResidence}
            className={errors.scheduleResidence && touched.scheduleResidence ? styles.inputError : ""}
        />
        {touched.scheduleResidence && errors.scheduleResidence && (
            <p className={styles.errorValidation}>{errors.scheduleResidence}</p>
        )}
        <CustomCheckbox
            name='servicesResidence'
            title="Далее отметьте услуги, которые вы оказываете.
Данные услуги будут отображаться в фильтрах, по которым ваш клиент сможет вас найти."
            options={[
              {id: 1, title: "Верховая езда"},
              {id: 2, title: "Зал для занятия йогой"},
              {id: 3, title: "Детская игровая комната"},
              {id: 4, title: "Пешие тур-походы"},
              {id: 5, title: "Баня"},
              {id: 6, title: "SPA"},
              {id: 7, title: "Фитнес -зал"},
            ]}
        />
        <CustomCheckbox
            name='waterProceduresResidence'
            title="Водные процедуры."
            options={[
              {id: 1, title: "Бассейн открытый"},
              {id: 2, title: "Бассейн крытый"},
              {id: 3, title: "Бассейн с видом"},
              {id: 4, title: "Бар у бассейна"},
              {id: 5, title: "Джакузи"},
            ]}
        />
        <CustomCheckbox
            name='rentResidence'
            title="Прокат."
            options={[
              {id: 1, title: "Прокат велосипедов"},
              {id: 2, title: "Прокат горнолыжного снаряжения"},
              {id: 3, title: "Прокат квадроциклов"},
            ]}
        />
        <CustomCheckbox
            name='foodResidence'
            title="Питание."
            options={[
              {id: 1, title: "Ресторан"},
              {id: 2, title: "Кофеварка/чайник"},
              {id: 3, title: "Кофейня"},
              {id: 4, title: "Завтрак включен"},
              {id: 5, title: "Мини-кухня"},
            ]}
        />
        <CustomCheckbox
            name='transferResidence'
            title="Трансфер."
            options={[
              {id: 1, title: "Бесплатная парковка"},
              {id: 2, title: "Есть трансфер"},
              {id: 3, title: "Маршрутный автобус"},
              {id: 4, title: "Станция зарядки автомобилей"},
            ]}
        />
        <CustomCheckbox
            name='attendanceResidence'
            title="Услуги."
            options={[
              {id: 1, title: "Бесплатный WI-FI"},
              {id: 2, title: "Лобби/бар"},
              {id: 3, title: "Бесплатное проживание для детей"},
              {id: 4, title: "Бизнесс-центр"},
              {id: 5, title: "Кальянная"},
              {id: 6, title: "Кабельное и спутниковое ТВ"},
              {id: 7, title: "Люкс для новобрачных"},
              {id: 8, title: "Можно с домашними питомцами"},
              {id: 9, title: "Пандусы для кресел-каталок"},
              {id: 10, title: "Помещение для конференций"},
            ]}
        />
      </div>
  );
};

export default ResidenceComponent;
