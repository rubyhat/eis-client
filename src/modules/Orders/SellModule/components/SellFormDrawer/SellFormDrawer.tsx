import React from "react";
import { Box, Button, Container, Grid, SwipeableDrawer } from "@mui/material";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  FormValues,
  initialFormState,
  useSellModuleStore,
} from "../../store/useSellModuleStore";
import { DrawerHeader } from "../DrawerHeader";
import { UserInfoFields } from "../FormFileds/UserInfoFields";
import { EstateCategory } from "../FormFileds/EstateCategory";
import { GeopositionFields } from "../FormFileds/GeopositionFields";
import { schema } from "../../validators";
import { PriceField } from "../FormFileds/PriceField";
import { CommentField } from "../FormFileds/CommentField";
import { CategoryFields } from "../FormFileds/CategoryFields";
import { FinalField } from "../FormFileds/FinalField";
import { SuccessForm } from "../SuccessForm";

const drawerPaperProps = {
  sx: {
    width: 1,
    height: "100vh",
  },
};

export const SellFormDrawer = () => {
  const {
    isDrawerOpen,
    setIsDrawerOpen,
    step,
    setStep,
    loadStateFromLocalStorage,
  } = useSellModuleStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPolicyChecked, setIsPolicyChecked] = React.useState(false);

  const handleCloseDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(false);
  };

  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialFormState,
  });

  const { watch, setValue, getValues, handleSubmit } = methods;
  const showApartmentNumberField = getValues().category === "apartment";

  // Сохранение введенных данных в LS
  React.useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("sellFormData", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // Получение введенных данных из LS
  React.useEffect(() => {
    const savedData = localStorage.getItem("sellFormData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      (Object.keys(parsedData) as (keyof FormValues)[]).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
    loadStateFromLocalStorage();
  }, [setValue, loadStateFromLocalStorage]);

  const clearLocalStorage = () => {
    // Очистка данных после успешной отправки
    localStorage.removeItem("formData");
    localStorage.removeItem("serviceTypes");
    localStorage.removeItem("estateTypes");
    localStorage.removeItem("cityTypes");
    localStorage.removeItem("roomTypes");
  };

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      setStep(8);
      console.log("success data", data);
      setIsLoading(false);
      clearLocalStorage(); // очищать форму после успешной отправки
    } catch (error) {
      console.error("Form submission error", error);
    }
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      onOpen={() => setIsDrawerOpen(true)}
      PaperProps={drawerPaperProps}
    >
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit, (error) =>
            console.log("error data", error),
          )}
          paddingBottom={2}
        >
          <Container>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box mb={1.5}>
                  <DrawerHeader />
                </Box>
                {step === 1 && <UserInfoFields isLoading={isLoading} />}
                {step === 2 && <EstateCategory isLoading={isLoading} />}
                {step === 3 && (
                  <GeopositionFields
                    isLoading={isLoading}
                    showApartmentNumberField={showApartmentNumberField}
                  />
                )}
                {step === 4 && <PriceField isLoading={isLoading} />}
                {step === 5 && <CommentField isLoading={isLoading} />}
                {step === 6 && <CategoryFields isLoading={isLoading} />}
                {step === 7 && (
                  <FinalField
                    isChecked={isPolicyChecked}
                    setIsChecked={setIsPolicyChecked}
                  />
                )}
                {step === 7 && (
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    disabled={isLoading || !isPolicyChecked}
                    sx={{
                      bottom: 16,
                      textTransform: "none",
                      position: {
                        xs: "absolute",
                        sm: "inherit",
                      },
                      width: {
                        xs: "calc(100% - 32px)",
                        sm: 568,
                      },
                    }}
                  >
                    Отправить заявку
                  </Button>
                )}
                {step === 8 && <SuccessForm />}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </FormProvider>
    </SwipeableDrawer>
  );
};
