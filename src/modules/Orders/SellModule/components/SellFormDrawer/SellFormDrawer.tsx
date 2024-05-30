import React from "react";
import { Box, Container, Grid, SwipeableDrawer } from "@mui/material";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  initialFormState,
  useSellModuleStore,
} from "../../store/useSellModuleStore";
import { DrawerHeader } from "../DrawerHeader";
import { UserInfo } from "../FormFileds/UserInfo";
import { EstateCategory } from "../FormFileds/EstateCategory";

const drawerPaperProps = {
  sx: {
    width: 1,
    height: "100vh",
  },
};

const schema = yup.object().shape({
  ownerName: yup.string().required("Введите Ваше Имя"),
  ownerPhone: yup
    .string()
    .required("Введите Ваш номер телефона")
    .min(16, "Проверьте корректность введенного номера телефона")
    .max(16, "Проверьте корректность введенного номера телефона"),
  type: yup.string().required(),
  category: yup.string().required(),
});

export type FormValues = {
  ownerName: string;
  ownerPhone: string;
  type: string;
  category: string;
};

export const SellFormDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen, step } = useSellModuleStore();
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
    resolver: yupResolver(schema),
    defaultValues: initialFormState,
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(false);
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
                {step === 2 && <EstateCategory />}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </FormProvider>
    </SwipeableDrawer>
  );
};
