import React from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { FormValues, useSellModuleStore } from "../../store/useSellModuleStore";
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
import { ImagesField } from "../ImagesField";
import { initialFormState, keysToRemove } from "../../store/initValues";
import { formStyles } from "../FormFileds/assets";
import { useCreateSellOrderMutation } from "../../hooks";

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

  React.useEffect(() => setStep(1), [setStep]);

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
    resolver: yupResolver(schema), // todo: switch yup on zod
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

  const createSellOrderMutation = useCreateSellOrderMutation();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();

    const clearData = {
      ...data,
      ownerInfo: {
        ownerName: data.ownerName,
        ownerPhone: data.ownerPhone.replace(/ /g, ""),
        ownerComment: data.ownerComment,
        apartmentNumber: data.apartmentNumber,
        entranceNumber: data.entranceNumber,
        intercomNumber: data.intercomNumber,
      },
      apartmentComplex: {
        title: data.apartmentComplexTitle,
      },
      geoPosition: {
        city: data.city,
        cityRegion: data.cityRegion,
        street: data.street,
        houseNumber: data.houseNumber,
      },
    };

    // Очищаем от пустых значений
    const filteredData = Object.fromEntries(
      Object.entries(clearData).filter(
        ([key, value]) =>
          value !== "" && value !== null && !keysToRemove.includes(key),
      ),
    );

    Object.entries(filteredData).forEach(([key, value]) => {
      if (
        key === "geoPosition" ||
        key === "ownerInfo" ||
        key === "apartmentComplex" ||
        typeof value === "boolean"
      ) {
        formData.append(key, JSON.stringify(value));
      } else if (key === "images") {
        for (const file of value as string) {
          formData.append("images", file);
        }
      } else {
        formData.append(key, value as string);
      }
    });

    createSellOrderMutation.mutate({ data: formData });
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
          sx={formStyles}
        >
          <Box mb={1.5}>
            <DrawerHeader />
          </Box>
          <Box flexGrow={1}>
            {step === 1 && (
              <UserInfoFields isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 2 && (
              <EstateCategory isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 3 && (
              <GeopositionFields
                isLoading={createSellOrderMutation.isPending}
                showApartmentNumberField={showApartmentNumberField}
              />
            )}
            {step === 4 && (
              <ImagesField isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 5 && (
              <CategoryFields isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 6 && (
              <PriceField isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 7 && (
              <CommentField isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 8 && (
              <FinalField isLoading={createSellOrderMutation.isPending} />
            )}
            {step === 9 && <SuccessForm />}
          </Box>
        </Box>
      </FormProvider>
    </SwipeableDrawer>
  );
};
