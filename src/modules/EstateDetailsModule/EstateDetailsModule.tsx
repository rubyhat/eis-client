import React from "react";
import useTitle from "../../hooks/useTitle";
import { Alert, Box, Container, Grid, Typography } from "@mui/material";
import { AgentCard } from "../../components/AgentCard/AgentCard";
import { DetailsList } from "./components/DetailsList/DetailsList";
import { ImageViewer } from "./components/ImageViewer/ImageViewer";
import { DetailsSkeleton } from "./components/DetailsSkeleton";
import { useDynamicMetaTags } from "../../hooks/useDynamicMetaTags";
import { useLocation, useParams } from "react-router-dom";
import { apiEstateDetailsModule } from "./api";
import { useQuery } from "@tanstack/react-query";
import { FeedbackForm } from "../../components/FeedbackForm";
import { useEstateDetailsStore } from "./store";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useFormatDate } from "../../shared/hooks/useFormatDate";

export const EstateDetailsModule = () => {
  useTitle("Детали объекта недвижимости");
  const location = useLocation();
  const { isMobile } = useScreenSize();
  const { id } = useParams();
  const { estateDetails, setEstateDetails, setActiveImage } =
    useEstateDetailsStore((state) => state);
  const { dayAndMonth, time } = useFormatDate(
    estateDetails ? estateDetails.updatedAt : "",
  );

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

    if (isSuccess) {
      setEstateDetails(estateDetailsData);
    }
  }, [estateDetailsData, isSuccess, location.state, setEstateDetails]);

  React.useEffect(() => {
    const images = estateDetails?.images;
    const activeImage = images && images.length > 0 ? images[0].imageUrl : null;
    const activeImageId = images && images.length > 0 ? images[0]._id : null;
    setActiveImage(activeImage, activeImageId);
  }, [estateDetails?.images, setActiveImage]);

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
            <Typography variant="titleLargeRegular" display="block">
              {estateDetails.geoPosition.street},{" "}
              {estateDetails.geoPosition.houseNumber}
            </Typography>
          </Grid>
          {isMobile && (
            <Grid item xs={12}>
              <ImageViewer />
            </Grid>
          )}
          <Grid item xs={12} md={5} lg={6}>
            <AgentCard estateAgent={estateDetails.estateAgent} />
            <Box padding="16px 0">
              <DetailsList estateDetails={estateDetails} />
            </Box>
            <Box
              className="description-text-block"
              dangerouslySetInnerHTML={{
                __html: estateDetails.description,
              }} // add styles for data
            ></Box>
            <Typography
              component="p"
              variant="textFootnoteRegular"
              color="customColors.labelsSecondary"
              marginTop={2}
              textAlign="right"
            >
              Обновлено: {dayAndMonth} в {time}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            {!isMobile && <ImageViewer />}
            {isMobile && (
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  borderRadius: 2,
                  backgroundColor: "customColors.labelsQuaternary",
                  margin: "16px 0",
                }}
              />
            )}
            <FeedbackForm estateAgent={estateDetails.estateAgent} />
          </Grid>
        </Grid>
      </Container>
    );
  }
};
