import React from "react";
import useTitle from "../../hooks/useTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AgentCard } from "../../components/AgentCard/AgentCard";
import { DetailsList } from "./components/DetailsList/DetailsList";
import { ImageViewer } from "./components/ImageViewer/ImageViewer";
import { DetailsSkeleton } from "./components/DetailsSkeleton";
import { useDynamicMetaTags } from "../../hooks/useDynamicMetaTags";

export const EstateDetailsModule = () => {
  useTitle("Детали объекта недвижимости");
  // todo: upd skelete when data will be received
  const [isLoading] = React.useState(false);
  // todo: add dynamic data
  useDynamicMetaTags({
    title: "Проспект Нуркена Абдирова, 124/3а",
    description:
      "Тихий двор, неугловая, кухня-студия, улучшенная, пластиковые окна, счётчики. Здравствуйте уважаемые покупатели!",
  });

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="titleLargeRegular"
            marginBottom={4}
            display="block"
          >
            Проспект Нуркена Абдирова, 124/3а
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <AgentCard />
          <Box padding="16px 0">
            <DetailsList />
          </Box>
          <Box>
            <Typography variant="textBodyRegular">
              Тихий двор, неугловая, кухня-студия, улучшенная, пластиковые окна,
              счётчики. Здравствуйте уважаемые покупатели !<br />
              <br />
              Вашему вниманию предлагаем улучшенную 2ух комнатную квартиру на
              Степном-4 !<br />
              <br />
              Квартира после перепланировки и косметического ремонта, увеличили
              санузел, вынесли кухню в другое место, включили в площадь квартиры
              тамбур, сделали натяжной, поменяли трубы отопления и проводку.
              <br />
              <br />
              После продажи недвижимости всё остаётся. ДОКУМЕНТЫ узаконены.
              <br />
              <br />
              На этаже всего лишь две квартиры. Подъезд чистый и ухоженный, во
              дворе большая детская площадка, достаточное количество парковочных
              мест. <br />
              <br />
              Вокруг дома расположились три школы: №23, 39, 5, два детских
              садика, супермаркет Корзина, Норма, торговый дом Алмаз, остановки:
              овощной, швейная, турист, Корзина !<br />
              <br />
              Спасибо за внимание ! По запросу отправляем подробный видеообзор !
              <br />
              <br />
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} lg={6}>
          <ImageViewer />
        </Grid>
      </Grid>
    </Container>
  );
};
