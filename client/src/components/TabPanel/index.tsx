import { FC, ReactNode } from "react";

import { Box } from "@mui/material";

interface TabPanelPropsInterface {
  children: ReactNode;
  value: number;
  index: number;
}

const TabPanel: FC<TabPanelPropsInterface> = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</div>;
};

export default TabPanel;
