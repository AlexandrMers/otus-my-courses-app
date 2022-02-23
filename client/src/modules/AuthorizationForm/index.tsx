import React, { FC } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as Yup from "yup";

interface LoginFormInterface {
  login: string;
  password: string;
}

const LoginSchema = Yup.object({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const AuthorizationForm: FC = () => {
  const { control, handleSubmit } = useForm<LoginFormInterface>({
    defaultValues: {
      login: undefined,
      password: undefined,
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

      <Grid container justifyContent="flex-end">
        <Button type="submit" size="large" variant="outlined">
          Войти
        </Button>
      </Grid>
    </form>
  );
};

export default AuthorizationForm;
