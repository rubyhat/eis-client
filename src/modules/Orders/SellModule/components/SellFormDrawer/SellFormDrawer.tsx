import React from "react";
import { Box, Container, Grid, SwipeableDrawer } from "@mui/material";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  initialFormState,
  useSellModuleStore,
} from "../../store/useSellModuleStore";
import { DrawerHeader } from "../DrawerHeader";
import { UserInfo } from "../FormFileds/UserInfo";
import { EstateCategory } from "../FormFileds/EstateCategory";
import { Geoposition } from "../FormFileds/Geoposition";
import { schema } from "../../validators";

const drawerPaperProps = {
  sx: {
    width: 1,
    height: "100vh",
  },
};

export type FormValues = {
  ownerName: string;
  ownerPhone: string;
  type: string;
  category: string;
  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
};

export const SellFormDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen, step, loadStateFromLocalStorage } =
    useSellModuleStore();
  const [isLoading, setIsLoading] = React.useState(false);

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

  const { watch, setValue } = methods;

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
      console.log(parsedData);
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
  };

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(false);
    clearLocalStorage();
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
        <Box component="form" onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DrawerHeader />
              </Grid>
              <Grid item xs={12} md={6}>
                {step === 1 && <UserInfo isLoading={isLoading} />}
                {step === 2 && <EstateCategory isLoading={isLoading} />}
                {step === 3 && <Geoposition isLoading={isLoading} />}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </FormProvider>
    </SwipeableDrawer>
  );
};
