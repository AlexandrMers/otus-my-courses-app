import React, { FC } from "react";
import { Grid, Tab, Tabs } from "@mui/material";
import styles from "../styles.module.scss";
import TabPanel from "../components/TabPanel";
import AuthorizationForm from "./AuthorizationForm";
import RegistartionForm from "./RegistrationForm";

interface MainEntrancePagePropsInterface {}

const MainEntrancePage: FC<MainEntrancePagePropsInterface> = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={styles.MainContainer}
    >
      <Grid>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Авторизация" />
          <Tab label="Регистрация" />
        </Tabs>
      </Grid>

      <Grid
        style={{
          width: 400,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <TabPanel index={0} value={value}>
          <AuthorizationForm />
        </TabPanel>
        <TabPanel index={1} value={value}>
          <RegistartionForm />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MainEntrancePage;
