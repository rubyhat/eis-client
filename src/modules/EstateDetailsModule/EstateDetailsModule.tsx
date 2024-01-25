import React from "react";
import useTitle from "../../hooks/useTitle";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { AgentCard } from "../../components/AgentCard/AgentCard";
import { DetailsList } from "./components/DetailsList/DetailsList";
import { ImageViewer } from "./components/ImageViewer/ImageViewer";
import { DetailsSkeleton } from "./components/DetailsSkeleton";
import { useDynamicMetaTags } from "../../hooks/useDynamicMetaTags";
import { DisplayEstateObject } from "../CatalogModule/store";
import { useLocation, useParams } from "react-router-dom";
import { apiEstateDetailsModule } from "./api";
import { useQuery } from "@tanstack/react-query";

export const EstateDetailsModule = () => {
  useTitle("Детали объекта недвижимости");
  const location = useLocation();
  const { id } = useParams();
  const [estateDetails, setEstateDetails] =
    React.useState<DisplayEstateObject | null>(null);

  const {
    data: estateDetailsData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryFn: () =>
      id
        ? apiEstateDetailsModule.getDetailsById(id)
        : Promise.reject("No ID provided"),
    queryKey: ["estateDetails", id],
    enabled: !location.state?.estateDetails,
  });

  React.useEffect(() => {
    if (location.state?.estateDetails)
      setEstateDetails(location.state.estateDetails);

    if (isSuccess) setEstateDetails(estateDetailsData);
  }, [estateDetailsData, isSuccess, location.state]);

  // todo: add dynamic data
  useDynamicMetaTags({
    title:
      estateDetails?.geoPosition.street +
        ", " +
        estateDetails?.geoPosition.houseNumber || "Детали недвижимости",
    description: "",
  });

  if (isLoading) {
    return <DetailsSkeleton />;
  }

  if (isError) {
    return (
      <Grid item xs={12} className="fadeIn">
        <Alert severity="warning">
          Произошла ошибка во время запроса данных с сервера! В данный момент
          уже ведутся работы по улучшению платформы, скоро здесь появятся
          информация об объекте недвижимости, пожалуйста, попробуйте зайти
          позднее!
        </Alert>
      </Grid>
    );
  }

  if (estateDetails) {
    return (
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="titleLargeRegular"
              marginBottom={4}
              display="block"
            >
              {estateDetails.geoPosition.street},{" "}
              {estateDetails.geoPosition.houseNumber}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <AgentCard />
            <Box padding="16px 0">
              <DetailsList estateDetails={estateDetails} />
            </Box>
            <Box>
              <Typography
                variant="textBodyRegular"
                dangerouslySetInnerHTML={{
                  __html: estateDetails.description,
                }} // add styles for data
              ></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <ImageViewer />
          </Grid>
        </Grid>
      </Container>
    );
  }
};
