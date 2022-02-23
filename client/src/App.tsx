import React from "react";

import { Grid, Tab, Tabs } from "@mui/material";

// Components
import TabPanel from "./components/TabPanel";

// Modules
import AuthorizationForm from "./modules/AuthorizationForm";

import styles from "./styles.module.scss";
import RegistartionForm from "./modules/RegistrationForm";

function App() {
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
}

export default App;
