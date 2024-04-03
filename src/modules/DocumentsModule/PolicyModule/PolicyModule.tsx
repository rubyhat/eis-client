import React from "react";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// todo: add document
export const PolicyModule = () => {
  return (
    <Container className="policy-module">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="titleFirstRegular">
            Политика конфиденциальности и согласие на обработку персональных
            данных
          </Typography>
          <Typography
            component="p"
            variant="textBodyRegular"
            sx={{ width: 1, textAlign: "end", margin: "24px 0" }}
          >
            ИП «Агентство Недвижимости Артура Розе»
            <br />
            Республика Казахстан, г. Караганда
            <br />
            ул. Нуркена Абдирова, д. 5<br />
            ИИН: 990517351288
            <br />
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            Настоящая Политика конфиденциальности персональных данных (далее –
            Политика) действует в отношении всей информации, размещенной на
            сайте в сети Интернет по адресу:{" "}
            <Typography
              component={Link}
              to="/"
              sx={{
                color: "customColors.colorsOrange",
                textDecoration: "underline",
              }}
            >
              www.roze.kz
            </Typography>{" "}
            (далее - Сайт), которую могут получить о Пользователе (и/или
            посетители), как зарегистрированные так и не зарегистрированные, во
            время использования Сайтом, его разделов и продуктов.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            Использование Сайта или его разделов, означает безоговорочное
            согласие и принятие Пользователем настоящей Политикой и указанными в
            ней условиями обработки его персональной информации, а также
            принятие Согласия на обработку персональных данных (далее –
            Согласие).
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            В случае несогласия с условиями Политики и/или Согласия –
            Пользователь должен воздержаться от использования Сайта, его
            сервисов, программ и продуктов, и должен покинуть Сайт.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>1. </strong>Присоединяясь к настоящей Политике и оставляя
            свои данные на сайте{" "}
            <Typography
              component={Link}
              to="/"
              sx={{
                color: "customColors.colorsOrange",
                textDecoration: "underline",
              }}
            >
              www.roze.kz
            </Typography>{" "}
            Пользователь:
          </Typography>

          <Box component="ul" sx={{ listStyle: "inherit" }}>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                подтверждает, что указанные им персональные данные являются
                полными, актуальными, достоверными данными, принадлежащими лично
                ему;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                признает и подтверждает, что он внимательно и в полном объёме
                ознакомился с настоящей Политикой и содержащейся в нёй условиями
                обработки его персональных данных, указываемых им в полях
                онлайн-заявки (регистрации) на Сайте;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                признаёт и подтверждает, что все положения настоящего Соглашения
                и условия обработки его персональных данных ему понятны;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                признаёт и подтверждает, что все положения настоящего Соглашения
                и условия обработки его персональных данных ему понятны;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                признаёт и подтверждает, что Сайт{" "}
                <Box
                  component="a"
                  href="https://roze.kz"
                  target="_blank"
                  sx={{
                    color: "customColors.colorsOrange",
                    textDecoration: "underline",
                  }}
                >
                  www.roze.kz
                </Box>{" "}
                не контролирует и не несет ответственности за сайты третьих лиц,
                на которые Пользователь может перейти по ссылкам, доступным на
                Сайте{" "}
                <Box
                  component="a"
                  href="https://roze.kz"
                  target="_blank"
                  sx={{
                    color: "customColors.colorsOrange",
                    textDecoration: "underline",
                  }}
                >
                  www.roze.kz
                </Box>
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                даёт Компании согласие на обработку предоставляемых персональных
                данных для целей регистрации Пользователя на Сайте, подачи
                заявки в формах обратной связи и иных целей, указанных в
                Политике; Пользователь дает свое согласие на обработку его
                персональных данных, а именно совершение действий,
                предусмотренных{" "}
                <strong>
                  ч. 12 ст. 1 Закон Республики Казахстан от 21 мая 2013 года №
                  94-V «О персональных данных и их защите»
                </strong>
                : действия, направленные на накопление, хранение, изменение,
                дополнение, использование, распространение, обезличивание,
                блокирование и уничтожение персональных данных, и подтверждает,
                что давая такое согласие, он действует свободно, своей волей и в
                своих интересах либо в интересах представляемого им на законных
                основаниях недееспособного лица.
              </Typography>
            </Box>
          </Box>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>2. </strong>Согласие Пользователя на обработку персональных
            данных является конкретным и осознанным. Персональные данные
            Пользователя обрабатываются в целях регистрации Пользователя на
            Сайте и оказания Пользователю платных и бесплатных услуг, проведения
            Компанией маркетинговых акций, взаимодействия с потенциальными
            клиентами, составления аналитических отчетов, а также поздравлений с
            днем рождения и других коммуникаций между Компанией и Пользователем.
            Согласие применяется для обработки персональных данных Пользователя,
            указанных в{" "}
            <Box
              id="anchor1"
              component="a"
              href="#anchor1"
              sx={{
                color: "customColors.colorsOrange",
                textDecoration: "underline",
              }}
            >
              Приложении № 1 к Политике в отношении обработки персональных
              данных «Обобщённый Перечень Обрабатываемых Персональных Данных»
            </Box>
            .
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>3. </strong>Данные, которые автоматически передаются
            разделам Сайта в процессе их использования с помощью установленного
            на устройстве Пользователя программного обеспечения, в том числе:
            IP-адрес, данные файлов cookie, информация о браузере Пользователя
            (или иной программе, с помощью которой осуществляется доступ к
            сервисам), технические характеристики оборудования и программного
            обеспечения, используемых Пользователем, дата и время доступа к
            сервисам, адреса запрашиваемых страниц и иная подобная информация.
            Дополнительно на Сайте происходит сбор и обработка обезличенных
            данных о посетителях (например, файлов «cookie») с помощью
            интернет-сервисов:
          </Typography>
          <Box component="ul" sx={{ listStyle: "inherit" }}>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                статистики Google Analytics{" "}
                <Box
                  component="a"
                  href="https://analytics.google.com/"
                  target="_blank"
                  sx={{
                    color: "customColors.colorsOrange",
                    textDecoration: "underline",
                  }}
                >
                  https://analytics.google.com/
                </Box>
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                статистика ошибок сайта на стороне клиента Sentry{" "}
                <Box
                  component="a"
                  href="https://sentry.io/"
                  target="_blank"
                  sx={{
                    color: "customColors.colorsOrange",
                    textDecoration: "underline",
                  }}
                >
                  https://sentry.io/
                </Box>
              </Typography>
            </Box>
          </Box>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>4. </strong>Пользователь предоставляет Компании право
            осуществлять следующие действия (операции) с персональными данными:
          </Typography>
          <Box component="ul" sx={{ listStyle: "inherit" }}>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                сбор и накопление;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                хранение в течение сроков, установленных нормативными
                документами и действующим законодательством;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                уточнение (обновление, изменение);
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                использование в указанных в настоящем соглашении целях;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                уничтожение / обезличивание;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                передача третьим лицам в целях исполнения обязательств по
                договору с Пользователем, с соблюдением мер, обеспечивающих
                защиту персональных данных от несанкционированного доступа, а
                также по требованию суда.
              </Typography>
            </Box>
          </Box>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>5. </strong>Безопасность персональных данных обеспечивается
            путём реализации правовых, организационных и технических мер,
            необходимых для выполнения в полном объёме требований действующего
            законодательства в области защиты персональных данных. Компания
            обеспечивает сохранность персональных данных и принимает все
            возможные меры, исключающие доступ к персональным данным
            неуполномоченных лиц.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>6. </strong>Целевой аудиторией, принимающей решение об
            оказании Компанией Услуг, являются совершеннолетние лица, однако
            могут возникать случаи, когда лицо, не достигшее возраста
            совершеннолетия, предусмотренного действующим законодательством,
            примет решение ознакомиться с Услугами на Сайте или приобрести
            соответствующие Услуги. В случае, когда Компании известно, что
            Пользователем является лицо, не достигшее возраста совершеннолетия,
            предусмотренного действующим законодательством, Компания не
            обрабатывает Персональные данные Пользователя, кроме случаев, когда
            законными представителями несовершеннолетнего лица заведомо было
            предоставлено согласие на обработку Персональных данных такого лица.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>7. </strong>Указанное согласие действует на весь срок
            использования Сайта и существования личного кабинета с момента
            предоставления данных и может быть отозвано Пользователем путём
            подачи соответствующего заявления.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>8. </strong>Отзыв согласия на обработку персональных данных,
            а также просьба об уточнении данных, их блокировании, а также полном
            или частичном удалении могут быть осуществлены путём направления
            Пользователем соответствующего заявления в письменной форме на адрес
            электронной почты: support@roze.kz. Также Пользователь вправе
            ознакомиться с перечнем своих персональных данных, обрабатываемых
            Компанией, направив заявление на вышеуказанный адрес электронной
            почты.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>9. </strong>Компания вправе вносить изменения в настоящее
            Соглашение. При внесении изменений в актуальной редакции указывается
            дата последнего обновления. Новая редакция Соглашения вступает в
            силу с момента ее размещения, если иное не предусмотрено новой
            редакцией Соглашения.
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>10. </strong>Действующая редакция настоящего Соглашения об
            обработке персональных данных постоянно размещена на Сайте по
            адресу:{" "}
            <Box
              component="a"
              href="https://roze.kz/docs/policy"
              target="_blank"
              sx={{
                color: "customColors.colorsOrange",
                textDecoration: "underline",
              }}
            >
              https://roze.kz/docs/policy
            </Box>
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={2}>
            <strong>11. </strong>Сведения о Компании:
          </Typography>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            ИП «Агентство Недвижимости Артура Розе»
            <br />
            Республика Казахстан, г. Караганда
            <br />
            ул. Нуркена Абдирова, д. 5<br />
            ИИН: 990517351288
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            variant="textBodyRegular"
            sx={{ width: 1, textAlign: "end", margin: "24px 0" }}
          >
            Приложение № 1
            <br />
            к Политике в отношении обработки персональных данных
            <br />
          </Typography>
          <Typography component="h2" variant="titleSecondRegular">
            Обобщённый перечень обрабатываемых персональных данных
          </Typography>
          <Typography component="h2" variant="textBodyRegular" marginTop={1}>
            Сайт собирает и хранит только ту персональную информацию, которая
            необходима для предоставления сервисов или исполнения соглашений и
            договоров с Пользователем, за исключением случаев, когда
            законодательством предусмотрено обязательное хранение персональной
            информации в течение определенного законом срока.
          </Typography>
          <Typography component="h2" variant="textBodyRegular" marginTop={1}>
            Персональную информацию Пользователя Сайт обрабатывает в следующих
            целях:
          </Typography>
          <Box component="ul" sx={{ listStyle: "inherit" }}>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Для обработки Заявки Пользователя на оказание консультации, по
                запрашиваемой информации.
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Для обработки Заявки пользователя о необходимости ему помощи
                через службу технической поддержки с Администрацией Сайта
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Установления с Пользователем обратной связи, включая направление
                уведомлений, запросов, касающихся использования Сайта, оказания
                услуг, обработку запросов и заявок от Пользователя.
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Подтверждения достоверности и полноты персональных данных,
                предоставленных Пользователем.
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Уведомления Пользователя Сайта о проводимых акциях, скидках,
                различных программах.
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Предоставления Пользователю эффективной клиентской и технической
                поддержки при возникновении проблем, связанных с использованием
                Сайта.
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                Осуществления рекламной деятельности с согласия Пользователя.
              </Typography>
            </Box>
          </Box>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            Перечень персональных данных, обрабатываемых в Компании, с целью
            подачи заявки в формах обратной связи:
          </Typography>
          <Box component="ul" sx={{ listStyle: "inherit" }}>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                фамилия, имя, отчество;
              </Typography>
            </Box>
            <Box component="li" marginTop={1}>
              <Typography component="p" variant="textBodyRegular">
                номер телефона;
              </Typography>
            </Box>
          </Box>
          <Typography component="p" variant="textBodyRegular" marginTop={1}>
            Перечень персональных данных, обрабатываемых в Компании, с целью
            регистрации Пользователя на Сайте{" "}
            <Box
              component="a"
              href="https://roze.kz"
              target="_blank"
              sx={{
                color: "customColors.colorsOrange",
                textDecoration: "underline",
              }}
            >
              www.roze.kz
            </Box>
            :
          </Typography>
          <Alert severity="info" sx={{ marginTop: 1 }}>
            На данный момент Компания не предоставляет возможности регистрации
            на Сайте для Пользователя, поэтому никакие Персональные Данные для
            этой цели не собираются и не обрабатываются.
          </Alert>
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{ width: 1, textAlign: "end", margin: "24px 0" }}
          >
            Дата обновления: 03.04.2024
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
