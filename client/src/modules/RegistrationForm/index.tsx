import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

interface RegistrationFormInterface {
  login: string;
  password: string;
  confirmedPassword: string;
  name: string;
}

const LoginSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
  confirmedPassword: Yup.string()
    .test("matchPasswords", "Пароли не совпадают", (value, schema) => {
      return !!value ? value === schema.parent.password : true;
    })
    .required(),
  name: Yup.string().required(),
});

const RegistartionForm: FC = () => {
  const { control, handleSubmit } = useForm<RegistrationFormInterface>({
    defaultValues: {
      login: undefined,
      password: undefined,
      confirmedPassword: undefined,
      name: undefined,
    },
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: { login: string; password: string }) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom="15px">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              error={!!error?.message}
              helperText={error?.message}
              label="Ваше Имя"
              variant="outlined"
            />
          )}
        />
      </Box>

      <Box marginBottom="15px">
        <Controller
          name="login"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={!!error?.message}
              helperText={error?.message}
              fullWidth
              label="Логин"
              variant="outlined"
            />
          )}
        />
      </Box>

      <Box marginBottom="15px">
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={!!error?.message}
              helperText={error?.message}
              fullWidth
              label="Пароль"
              type="password"
              variant="outlined"
            />
          )}
        />
      </Box>

      <Box marginBottom="15px">
        <Controller
          name="confirmedPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              error={!!error?.message}
              helperText={error?.message}
              fullWidth
              label="Подтвердите пароль"
              type="password"
              variant="outlined"
            />
          )}
        />
      </Box>

      <Grid container justifyContent="flex-end">
        <Button type="submit" size="large" variant="outlined">
          Зарегистрироваться
        </Button>
      </Grid>
    </form>
  );
};

export default RegistartionForm;
