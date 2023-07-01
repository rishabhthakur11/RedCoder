import { auth } from "@/firebase/firebase";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import LogoutIcon from "@mui/icons-material/Logout";

const Logout: React.FC = () => {
  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = () => {
    signOut();
  };
  return (
    <Button
      variant="outlined"
      sx={{ color: red[500] }}
      startIcon={<LogoutIcon />}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};
export default Logout;
