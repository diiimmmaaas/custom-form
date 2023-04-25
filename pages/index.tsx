import styles from "../styles/Home.module.css";
import {object, string} from "yup";
import {Formik, FormikValues} from "formik";
import {InputBlock} from "@/src/components/InputBlock/InputBlock";
import {CustomCheckbox} from "@/src/components/CustomCheckbox/CustomCheckbox";

const categoryOptions = [
  "Проживание(отели,хостелы,глэмпинги,частное и т.д.)", "Питание" +
  " (рестораны,кафе,быстрый перекус,кофейни,бары и т.д.)", "Активный отдых" +
  " (квадроциклы,походы,рафтинг,прогулки на конях и т.д.)", "Места отдыха (термальные источники,беседки,бани, бассейны и т.д.)"
];

export default function Home() {

  let formSchema = object({
    email: string().required("Email является обязательным полем"),
    companyName: string().required("Это поле является обязательным"),
    privateNumber: string().required("Это поле является обязательным"),
    publicNumber: string().required("Это поле является обязательным"),
  });

  const handleSubmitValues = async (values: FormikValues) => {
    console.log(values);
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
              После заполнения анкеты в течении 5 дней с вами свяжется менеджер-
              Если у в ходе заполнения у вас возникают вопросы, вы можете
              написать|позвонить
              тел.8-906-187-72-79 или написать на почту info@uadygeya.ru
            </div>
            <div className={styles.required}>* Обязательные для заполнения поля</div>
          </div>
          {/*          <form className={styles.form} action="#">*/}
          {/*            <InputBlock placeholder="Введите Email" title="Email" required/>*/}
          {/*            <InputBlock required placeholder="Введите данные"*/}
          {/*                        title="Название юр лица или ИП/ ИНН/ ФИО Руководителя/ ФИО лица, с которым мы общаемся по вопросу размещения"/>*/}
          {/*            <InputBlock placeholder="Введите номер телефона"*/}
          {/*                        title="Номер телефона для нашей с вами связи"/>*/}
          {/*            <InputBlock placeholder="Введите номер телефона"*/}
          {/*                        title="Укажите номер телефона, по которому ваши клиенты смогут с вами связаться"/>*/}
          {/*            <InputBlock placeholder="Введите почту"*/}
          {/*                        title="Укажите электронную почту, по которой ваши клиенты смогут с вами связаться"/>*/}
          {/*            <InputBlock placeholder="Введите адрес Вашего сайта"*/}
          {/*                        title="Ссылка на ваш сайт"/>*/}
          {/*            <InputBlock placeholder="Введите ссылку на Вашу страницу ВКОНТАКТЕ"*/}
          {/*                        title="Ваша страница в ВКОНТАКТЕ (ссылка)"/>*/}
          {/*            <InputBlock placeholder="Введите ссылку на Ваш Telegram"*/}
          {/*                        title="Ссылка на ваш Telegram"/>*/}
          {/*            <InputBlock placeholder="Введите название Вашей компании"*/}
          {/*                        title="Название  (компании, отеля,ресторана, гостины,глемпинга и т.д.)"/>*/}
          {/*            <InputBlock placeholder="Введите Ваш адрес"*/}
          {/*                        title="Укажите ваш адрес полностью"/>*/}
          {/*            <CustomCheckbox options={categoryOptions}*/}
          {/*                            title="В какой категории вы оказываете услугу? Можете выбрать несколько вариантов"*/}
          {/*                            name="Проживание(отели,хостелы,глэмпинги,частное и т.д.)"/>*/}
          {/*            <InputBlock placeholder="Введите данные" title="Для размещения фото,видео материалов а так же прайс листов, направьте все имеющиеся материалы  на почту  info@uadygeya.ru или на Вотсап по номеру 8-906-187-72-79 с указанием в теме письма организации.*/}
          {/*              Так же вы можете воспользоваться облачным сервисом и приложить ссылку на облако к фотографиями*/}
          {/*              В ответе напишите куда направляете фото"/>*/}
          {/*            <InputBlock placeholder="Введите данные" title="Нажимая 'отправить' после заполнения данной анкеты,  вы даёте  согласие организации ИП Цуганова Рузанна Адамовна , которая находится по адресу: Республика Адыгея,г. Майкоп, ул.Ленина,д.137, ком.510 (далее – Приложение Узнай Адыгею), на автоматизированную и неавтоматизированную обработку ваших персональных данных, в том числе с использованием интернет-сервисов Google analytics, Яндекс.Метрика, LiveInternet, Рейтинг Mail.ru, Google Doubleclick в соответствии со следующим перечнем:*/}
          {/*• фамилия, имя отчество руководителя и сотрудников организации, реквизиты организации и условия размещения в случае оформления;*/}
          {/*• номера телефонов, ссылки на сайт и социальные сети, электронная почта;*/}
          {/*для целей повышения осведомленности посетителей Приложения об услугах Приложения, предоставления релевантной рекламной информации и оптимизации рекламы.*/}
          {/*Приложение вправе осуществлять обработку ваших персональных данных следующими способами: сбор, запись, систематизация, накопление, хранение, обновление, изменение, использование.*/}
          {/*Настоящее согласие вступает в силу с момента нажатия 'отправить' после заполнения анкеты  и действует в течение сроков, установленных действующим законодательством РФ.  Без названия"/>*/}
          {/*            <InputBlock placeholder="Введите данные"*/}
          {/*                        title="Дополнительные услуги или информация, которую мы не учли"/>*/}
          {/*            <button onClick={onSubmitHandler} type="submit"*/}
          {/*                    className={styles.submitBtn}>Получить результат*/}
          {/*            </button>*/}
          {/*          </form>*/}

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
                checkedCategory: []
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
                <div className={styles.form}>
                  <InputBlock
                      type="email"
                      name="email"
                      placeholder="Введите Email"
                      title="Email"
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
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
                      value={values.companyName}
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
                  <CustomCheckbox options={categoryOptions}
                                  title="В какой категории вы оказываете услугу? Можете выбрать несколько вариантов"
                  />
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
                  <button
                      onClick={() => handleSubmit()}
                      type="submit"
                      className={styles.submitBtn}>Получить результат
                  </button>
                </div>
            )}
          </Formik>
        </div>
      </div>
  );
}
