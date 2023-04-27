import styles from "../styles/Home.module.css";
import s from "../src/components/CustomCheckbox/CustomCheckbox.module.css";
import {object, string} from "yup";
import {Field, Formik, FormikValues} from "formik";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {useState} from "react";
import ResidenceComponent from "@/src/components/ResidenceComponent/ResidenceComponent";
import FoodComponent from "@/src/components/FoodComponent/FoodComponent";
import LeisureComponent from "@/src/components/LeisureComponent/LeisureComponent";
import RestingPlacesComponent
  from "@/src/components/RestingPlacesComponent/RestingPlacesComponent";

export type CategoryOptionsType = {
  id: number
  title: string
}

export default function Home() {
  const [visibleResidenceBlock, setVisibleResidenceBlock] = useState(false);
  const [visibleFoodBlock, setVisibleFoodBlock] = useState(false);
  const [visibleLeisureBlock, setVisibleLeisureBlock] = useState(false);
  const [visibleRestingPlacesBlock, setVisibleRestingPlacesBlock] = useState(false);

  let formSchema = object({
    email: string().email("Неправильно введены данные почты").required("Email является" +
        " обязательным полем"),
    companyName: string().required("Это поле является обязательным"),
    privateNumber: string().required("Это поле является обязательным"),
    publicNumber: string().required("Это поле является обязательным"),
  });

  const handleSubmitValues = async (values: FormikValues) => {
    const sendedObject = {
      email: {value: values.email, translate: "Почта"},
      companyName: {
        value: values.companyName, translate: "Название юр лица или ИП/" +
            " ИНН/ ФИО" +
            " Руководителя/ ФИО лица, с которым мы общаемся по вопросу размещения"
      },
      privateNumber: {
        value: values.privateNumber,
        translate: "Номер телефона для нашей с вами связи"
      },
      publicNumber: {
        value: values.publicNumber, translate: "Номер телефона, по" +
            " которому ваши клиенты смогут с вами связаться"
      },
      publicEmail: {
        value: values.publicEmail, translate: "Электронная почта, по" +
            " которой ваши клиенты смогут с вами связаться"
      },
      site: {value: values.site, translate: "Ссылка на сайт"},
      vk: {value: values.vk, translate: "Страница в ВКОНТАКТЕ (ссылка)\n"},
      telegram: {value: values.telegram, translate: "Ссылка на Telegtam"},
      instagram: {value: values.instagram, translate: "Cсылка на Instsgram"},
      title: {
        value: values.title,
        translate: "Название  (компании, отеля,ресторана, гостины,глемпинга и т.д.)"
      },
      address: {value: values.address, translate: "Адрес"},
      media: {value: values.media, translate: "Ссылка на медиа файлы"},
      otherInformation: {value: values.otherInformation, translate: "Другая информация"},
      checkedCategory: {value: values.checkedCategory, translate: "Выбранные категории"},
      typeOfLocation: {
        value: values.typeOfLocation, translate: "Тип размещения" +
            " (гостиница,отель,глэмпинг,хостел,кемпинг,туристическая база,домики и" +
            " тд.д.) (в категории Проживание)"
      },
      descriptionResidence: {
        value: values.descriptionResidence, translate: "Подробной" +
            " описание: -Как давно вы работаете, если давно, обновлялся ли номерной" +
            " -Что есть у вас территории(бассейн, водоем, детская площадка, беседки, мангальная зона, баня, SPA, ресторан, кафе) -Категория звездности, категории номерного фонда -Оснащени номеров -Дополнительные услуги -В чем ваше преимущество перед вашими конкурентами Расстояние до достопримечательностей Максимально подробное описание ваших услуг (в категории Проживание)"
      },
      scheduleResidence: {
        value: values.scheduleResidence, translate: "Часы работы" +
            " стойки регистрации/ Часы заезда и выезда/ Услуга РАННИЙ ЗАЕЗД/ПОЗДНИЙ" +
            " ВЫЕЗД (в категории Проживание)"
      },
      servicesResidence: {
        value: values.servicesResidence, translate: "услуги, которые" +
            " вы оказываете Данные услуги будут отображаться в фильтрах, по которым" +
            " ваш клиент сможет вас найти (в категории Проживание)"
      },
      waterProceduresResidence: {
        value: values.waterProceduresResidence,
        translate: "Водные процедуры (в категории Проживание)"
      },
      rentResidence: {
        value: values.rentResidence, translate: "Прокат (в категории Проживание)"
      },
      foodResidence: {
        value: values.foodResidence, translate: "Питание (в категории Проживание)"
      },
      transferResidence: {value: values.transferResidence, translate: "Трансфер (в категории Проживание)"},
      attendanceResidence: {value: values.attendanceResidence, translate: "Услуги (в категории Проживание)"},
      descriptionFood: {value: values.descriptionFood, translate: "Какой тип заведения,какая кухня,какие используете продукты, какие блюда готовите\n" +
            "Укажите особенности заведения: возможно из вашего заведения открывается красивый вид,есть террасса,у вас можно отпраздновать большое торжество,вы устраиваете вечеринки или наоборот у вас тихое семейное заведение\n" +
            "Курят ли в вашем заведении\n" +
            "В чем ваше преимущество перед вашими конкурентами\n" +
            "Расстояние до достопримечательностей (в категории Питание)"},
      scheduleFood: {value: values.scheduleFood, translate: "Укажите часы работы (в категории Питание)"},
      servicesFood: {value: values.servicesFood, translate: "Услуги, которые вы" +
            " оказываете\n" +
            "Данные услуги будут отображаться в фильтрах, по которым ваш клиент сможет" +
            " вас найти (в категории Питание)"},
      typesFood: {value: values.typesFood, translate: "Тип заведения (в категории Питание)"},
      dishesFood: {value: values.dishesFood, translate: "Блюда (в категории Питание)"},
      featuresOfInstitutionFood: {
        value: values.featuresOfInstitutionFood,
        translate: "Особенности заведения (в категории Питание)"
      },
      nutritionalFeaturesFood: {
        value: values.nutritionalFeaturesFood,
        translate: "Пищевые особенности (в категории Питание)"
      },
      descriptionLeisure: {value: values.descriptionLeisure, translate: "Какие именно вы оказываете услуги\n" +
            "Если услуг много,расписать каждую\n" +
            "Написать расписание\n" +
            "Опишите в чём ваше преимущество перед конкурентами\n" +
            "Техника безопасности (в категории Активный отдых)"},
      waterLeisure: {value: values.waterLeisure, translate: "Водный активный отдых (в категории Активный отдых)"},
      winterLeisure: {value: values.winterLeisure, translate: "Зимний активный отдых (в категории Активный отдых)"},
      extremeLeisure: {value: values.extremeLeisure, translate: "Экстремальный отдых (в категории Активный отдых)"},
      landLeisure: {value: values.landLeisure, translate: "Сухопутный активный отдых (в категории Активный отдых)"},
      descriptionRestingPlaces: {
        value: values.descriptionRestingPlaces,
        translate: "Какие именно вы оказываете услуги/\n" +
            "Если услуг много,расписать каждую/\n" +
            "Написать расписание/\n" +
            "Опишите в чём ваше преимущество перед конкурентами/\n" +
            "Техника безопасности (в категории Места проживание)"
      },
    };


    console.log(sendedObject);
  };

  return (
      <div className={styles.mainPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.headerTitle}>Анкета на размещение в приложении "Узнай
              Адыгею"</h1>
            <div className={styles.headerDescription}>Для размещения в приложении Узнай
              Адыгею вам нужно заполнить данную анкету. Заполняйте анкету максимально
              подробно, чтоб мы смогли отразить в вашей карточке все ваши услуги
              После заполнения анкеты в течении 5 дней с вами свяжется менеджер.
              Если у в ходе заполнения у вас возникают вопросы, вы можете
              написать|позвонить
              тел.8-906-187-72-79 или написать на почту info@uadygeya.ru
            </div>
            <div className={styles.required}>* Обязательные для заполнения поля</div>
          </div>
          <Formik
              validationSchema={formSchema}
              initialValues={{
                email: "",
                companyName: "",
                privateNumber: "",
                publicNumber: "",
                publicEmail: "",
                site: "",
                vk: "",
                telegram: "",
                instagram: "",
                title: "",
                address: "",
                media: "",
                otherInformation: "",
                checkedCategory: [],
                typeOfLocation: "",
                descriptionResidence: "",
                scheduleResidence: "",
                servicesResidence: [],
                waterProceduresResidence: [],
                rentResidence: [],
                foodResidence: [],
                transferResidence: [],
                attendanceResidence: [],
                descriptionFood: "",
                scheduleFood: "",
                servicesFood: [],
                typesFood: [],
                dishesFood: [],
                featuresOfInstitutionFood: [],
                nutritionalFeaturesFood: [],
                descriptionLeisure: "",
                waterLeisure: [],
                winterLeisure: [],
                extremeLeisure: [],
                landLeisure: [],
                descriptionRestingPlaces: "",
              }}
              onSubmit={values => handleSubmitValues(values)}>
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                touched,
              }) => (
                <div>
                  <InputBlock
                      type="email"
                      name="email"
                      placeholder="Введите Email"
                      title="Email"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email.value}
                      className={errors.email && touched.email ? styles.inputError : ""}
                  />
                  {touched.email && errors.email && (
                      <p className={styles.errorValidation}>{errors.email}</p>
                  )}
                  <InputBlock
                      type="companyName"
                      name="companyName"
                      placeholder="Введите данные"
                      title="Название юр лица или ИП/ ИНН/ ФИО Руководителя/ ФИО лица, с которым мы общаемся по вопросу размещения"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.companyName.value}
                      className={errors.companyName && touched.companyName ? styles.inputError : ""}
                  />
                  {touched.companyName && errors.companyName && (
                      <p className={styles.errorValidation}>{errors.companyName}</p>
                  )}
                  <InputBlock
                      type="privateNumber"
                      name="privateNumber"
                      placeholder="Введите номер телефона"
                      title="Номер телефона для нашей с вами связи"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.privateNumber}
                      className={errors.privateNumber && touched.privateNumber ? styles.inputError : ""}
                  />
                  {touched.privateNumber && errors.privateNumber && (
                      <p className={styles.errorValidation}>{errors.privateNumber}</p>
                  )}
                  <InputBlock
                      type="publicNumber"
                      name="publicNumber"
                      placeholder="Введите номер телефона"
                      title="Укажите номер телефона, по которому ваши клиенты смогут с вами связаться"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.publicNumber}
                      className={errors.publicNumber && touched.publicNumber ? styles.inputError : ""}
                  />
                  {touched.publicNumber && errors.publicNumber && (
                      <p className={styles.errorValidation}>{errors.publicNumber}</p>
                  )}
                  <InputBlock
                      type="publicEmail"
                      name="publicEmail"
                      placeholder="Введите почту"
                      title="Укажите электронную почту, по которой ваши клиенты смогут с вами связаться"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.publicEmail}
                      className={errors.publicEmail && touched.publicEmail ? styles.inputError : ""}
                  />
                  {touched.publicEmail && errors.publicEmail && (
                      <p className={styles.errorValidation}>{errors.publicEmail}</p>
                  )}
                  <InputBlock
                      type="site"
                      name="site"
                      placeholder="Введите адрес Вашего сайта"
                      title="Ссылка на ваш сайт"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.site}
                      className={errors.site && touched.site ? styles.inputError : ""}
                  />
                  {touched.site && errors.site && (
                      <p className={styles.errorValidation}>{errors.site}</p>
                  )}
                  <InputBlock
                      type="vk"
                      name="vk"
                      placeholder="Введите данные"
                      title="Ваша страница в ВКОНТАКТЕ (ссылка)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.vk}
                      className={errors.vk && touched.vk ? styles.inputError : ""}
                  />
                  {touched.vk && errors.vk && (
                      <p className={styles.errorValidation}>{errors.vk}</p>
                  )}
                  <InputBlock
                      type="telegram"
                      name="telegram"
                      placeholder="Введите данные"
                      title="Ссылка на ваш Telegram"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telegram}
                      className={errors.telegram && touched.telegram ? styles.inputError : ""}
                  />
                  {touched.telegram && errors.telegram && (
                      <p className={styles.errorValidation}>{errors.telegram}</p>
                  )}
                  <InputBlock
                      type="instagram"
                      name="instagram"
                      placeholder="Введите данные"
                      title="Cсылка на ваш Instsgram(запрещенная сеть в РФ)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.instagram}
                      className={errors.instagram && touched.instagram ? styles.inputError : ""}
                  />
                  {touched.instagram && errors.instagram && (
                      <p className={styles.errorValidation}>{errors.instagram}</p>
                  )}
                  <InputBlock
                      type="title"
                      name="title"
                      placeholder="Введите данные"
                      title="Название  (компании, отеля,ресторана, гостины,глемпинга и т.д.)"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      className={errors.title && touched.title ? styles.inputError : ""}
                  />
                  {touched.title && errors.title && (
                      <p className={styles.errorValidation}>{errors.title}</p>
                  )}
                  <InputBlock
                      type="address"
                      name="address"
                      placeholder="Введите данные"
                      title="Укажите ваш адрес полностью"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      className={errors.address && touched.address ? styles.inputError : ""}
                  />
                  {touched.address && errors.address && (
                      <p className={styles.errorValidation}>{errors.address}</p>
                  )}
                  <InputBlock
                      type="media"
                      name="media"
                      placeholder="Введите данные"
                      title="Для размещения фото,видео материалов а так же прайс листов, направьте все имеющиеся материалы  на почту  info@uadygeya.ru или на Вотсап по номеру 8-906-187-72-79 с указанием в теме письма организации.
Так же вы можете воспользоваться облачным сервисом и приложить ссылку на облако к фотографиями
В ответе напишите куда направляете фото
"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.media}
                      className={errors.media && touched.media ? styles.inputError : ""}
                  />
                  {touched.media && errors.media && (
                      <p className={styles.errorValidation}>{errors.media}</p>
                  )}
                  <div className={s.checkboxBlock}>
                    <h2 className={s.checkboxTitle}>В какой категории вы оказываете
                      услугу? Можете выбрать несколько вариантов</h2>
                    <div className={s.checkboxesContainer}>
                      <div className={s.checkboxContainer}>
                        <Field className={s.checkbox} id="residence" type="checkbox"
                               onClick={() => setVisibleResidenceBlock(!visibleResidenceBlock)}
                               name="checkedCategory"
                               value={"Проживание(отели,хостелы,глэмпинги,частное и т.д.)"}/>
                        <label className={s.checkboxLabel}
                               htmlFor="residence">{"Проживание(отели,хостелы,глэмпинги,частное и т.д.)"}</label>
                      </div>
                      <div className={s.checkboxContainer}>
                        <Field className={s.checkbox} id="food" type="checkbox"
                               onClick={() => setVisibleFoodBlock(!visibleFoodBlock)}
                               name="checkedCategory"
                               value={"Питание (рестораны,кафе,быстрый перекус,кофейни,бары и т.д.)"}/>
                        <label className={s.checkboxLabel}
                               htmlFor="food">{"Питание (рестораны,кафе,быстрый перекус,кофейни,бары и т.д.)"}</label>
                      </div>
                      <div className={s.checkboxContainer}>
                        <Field className={s.checkbox} id="leisure" type="checkbox"
                               onClick={() => setVisibleLeisureBlock(!visibleLeisureBlock)}
                               name="checkedCategory"
                               value={"Активный отдых (квадроциклы,походы,рафтинг,прогулки на конях и т.д.)"}/>
                        <label className={s.checkboxLabel}
                               htmlFor="leisure">{"Активный отдых (квадроциклы,походы,рафтинг,прогулки на конях и т.д.)"}</label>
                      </div>
                      <div className={s.checkboxContainer}>
                        <Field className={s.checkbox} id="restingPlaces" type="checkbox"
                               onClick={() => setVisibleRestingPlacesBlock(!visibleRestingPlacesBlock)}
                               name="checkedCategory"
                               value={"Места отдыха (термальные источники,беседки,бани, бассейны и т.д.)"}/>
                        <label className={s.checkboxLabel}
                               htmlFor="restingPlaces">{"Места отдыха (термальные источники,беседки,бани, бассейны и т.д.)"}</label>
                      </div>
                    </div>
                  </div>
                  {visibleResidenceBlock &&
                      <ResidenceComponent handleChange={handleChange}
                                          handleBlur={handleBlur}
                                          handleSubmit={handleSubmit}
                                          values={values} errors={errors}
                                          isValid={isValid}
                                          touched={touched}/>}

                  {visibleFoodBlock &&
                      <FoodComponent handleChange={handleChange} handleBlur={handleBlur}
                                     handleSubmit={handleSubmit} values={values}
                                     errors={errors} isValid={isValid}
                                     touched={touched}/>}
                  {visibleLeisureBlock && <LeisureComponent handleChange={handleChange}
                                                            handleBlur={handleBlur}
                                                            handleSubmit={handleSubmit}
                                                            values={values}
                                                            errors={errors}
                                                            isValid={isValid}
                                                            touched={touched}/>}
                  {visibleRestingPlacesBlock &&
                      <RestingPlacesComponent handleChange={handleChange}
                                              handleBlur={handleBlur}
                                              handleSubmit={handleSubmit} values={values}
                                              errors={errors} isValid={isValid}
                                              touched={touched}/>}
                  <InputBlock
                      type="otherInformation"
                      name="otherInformation"
                      placeholder="Введите данные"
                      title="Дополнительные услуги или информация, которую мы не учли"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.otherInformation}
                      className={errors.otherInformation && touched.otherInformation ? styles.inputError : ""}
                  />
                  {touched.otherInformation && errors.otherInformation && (
                      <p className={styles.errorValidation}>{errors.otherInformation}</p>
                  )}
                  <div className={styles.inputBlock}>Нажимая "отправить" после заполнения
                    данной анкеты, вы даёте согласие организации ИП Цуганова Рузанна
                    Адамовна , которая находится по адресу: Республика Адыгея,г. Майкоп,
                    ул.Ленина,д.137, ком.510 (далее – Приложение Узнай Адыгею), на
                    автоматизированную и неавтоматизированную обработку ваших персональных
                    данных, в том числе с использованием интернет-сервисов Google
                    analytics, Яндекс.Метрика, LiveInternet, Рейтинг Mail.ru, Google
                    Doubleclick в соответствии со следующим перечнем:
                    <ul className={styles.list}>
                      <li>фамилия, имя отчество руководителя и сотрудников организации,
                        реквизиты организации и условия размещения в случае оформления;
                      </li>
                      <li>номера телефонов, ссылки на сайт и социальные сети, электронная
                        почта;
                      </li>
                    </ul>
                    для целей повышения осведомленности посетителей Приложения об услугах
                    Приложения, предоставления релевантной рекламной информации и
                    оптимизации рекламы.
                    Приложение вправе осуществлять обработку ваших персональных данных
                    следующими способами: сбор, запись, систематизация, накопление,
                    хранение, обновление, изменение, использование.
                    Настоящее согласие вступает в силу с момента нажатия "отправить" после
                    заполнения анкеты и действует в течение сроков, установленных
                    действующим законодательством РФ.
                  </div>
                  <button
                      disabled={!isValid}
                      onClick={() => handleSubmit()}
                      type="submit"
                      className={isValid ? styles.submitBtn : styles.submitBtnDisabled}>Получить
                    результат
                  </button>
                </div>
            )}
          </Formik>
        </div>
      </div>
  );
}
