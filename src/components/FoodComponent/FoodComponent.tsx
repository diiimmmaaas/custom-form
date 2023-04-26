import React, {ChangeEvent, FC, FocusEvent} from "react";
import styles from "./FoodComponent.module.css";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {CustomCheckbox} from "@/src/components/CustomCheckbox/CustomCheckbox";

type FoodComponentPropsType = {
  handleChange: (e: ChangeEvent<any>) => void
  handleBlur: (e: FocusEvent<any>) => void
  handleSubmit: () => void,
  values: any,
  errors: any,
  isValid: any,
  touched: any,
}

const FoodComponent: FC<FoodComponentPropsType> = ({
                                                               handleChange,
                                                               handleBlur,
                                                               handleSubmit,
                                                               touched,
                                                               errors,
                                                               isValid,
                                                               values
                                                             }) => {
  return (
      <div className={styles.foodBlock}>
        <InputBlock
            required
            type="descriptionFood"
            name="descriptionFood"
            placeholder="Введите данные"
            title="Подробно опишите:
Какой тип заведения,какая кухня,какие используете продукты, какие блюда готовите
Укажите особенности заведения: возможно из вашего заведения открывается красивый вид,есть террасса,у вас можно отпраздновать большое торжество,вы устраиваете вечеринки или наоборот у вас тихое семейное заведение
Курят ли в вашем заведении
В чем ваше преимущество перед вашими конкурентами
Расстояние до достопримечательностей"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.descriptionFood}
            className={errors.descriptionFood && touched.descriptionFood ? styles.inputError : ""}
        />
        {touched.descriptionFood && errors.descriptionFood && (
            <p className={styles.errorValidation}>{errors.descriptionFood}</p>
        )}
        <InputBlock
            required
            type="scheduleFood"
            name="scheduleFood"
            placeholder="Введите данные"
            title="Укажите часы работы"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.scheduleFood}
            className={errors.scheduleFood && touched.scheduleFood ? styles.inputError : ""}
        />
        {touched.scheduleFood && errors.scheduleFood && (
            <p className={styles.errorValidation}>{errors.scheduleFood}</p>
        )}
        <CustomCheckbox
            name='servicesFood'
            title="Далее отметьте услуги, которые вы оказываете
Данные услуги будут отображаться в фильтрах, по которым ваш клиент сможет вас найти"
            options={[
              {id: 1, title: "Вид на горы"},
              {id: 2, title: "Выход к водоему"},
              {id: 3, title: "С видом на пляж"},
              {id: 4, title: "Частный пляж"},
              {id: 5, title: "Рядом с горнолыжным склоном"},
            ]}
        />
        <CustomCheckbox
            name='typesFood'
            title="Тип заведения"
            options={[
              {id: 1, title: "Ресторан"},
              {id: 2, title: "Быстрый перекус"},
              {id: 3, title: "Кофейня"},
              {id: 4, title: "Пекарня"},
              {id: 5, title: "Магазин"},
              {id: 6, title: "Бар/клуб"},
              {id: 7, title: "Только доставка"},
            ]}
        />
        <CustomCheckbox
            name='dishesFood'
            title="Блюда"
            options={[
              {id: 1, title: "Шашлык"},
              {id: 2, title: "Пицца"},
              {id: 3, title: "Роллы"},
              {id: 4, title: "Бургеры"},
              {id: 5, title: "Пасты"},
              {id: 6, title: "Выпечка"},
            ]}
        />
        <CustomCheckbox
            name='featuresOfInstitutionFood'
            title="Особенности заведения "
            options={[
              {id: 1, title: "Можно заказать кальян"},
              {id: 2, title: "Бронирование"},
              {id: 3, title: "Банкет"},
              {id: 4, title: "Бесплатный Wi-Fi"},
              {id: 5, title: "Доступ для кресел-каталок"},
              {id: 6, title: "Живая музыка"},
              {id: 7, title: "Бесплатная парковка"},
              {id: 8, title: "Подают алкоголь"},
              {id: 9, title: "Заведение для некурящих"},
              {id: 10, title: "Столики на открытом воздухе"},
              {id: 11, title: "Столик с видом на водоем"},
              {id: 12, title: "Телевизор"},
            ]}
        />
        <CustomCheckbox
            name='nutritionalFeaturesFood'
            title="Пищевые особенности"
            options={[
              {id: 1, title: "Подходит для вегетерианцев"},
              {id: 2, title: "Халяльная кухня"},
              {id: 3, title: "Кошерная"},
              {id: 4, title: "Безглютеновые блюда"},
              {id: 5, title: "Местная кухня"},
            ]}
        />
      </div>
  );
};

export default FoodComponent;
