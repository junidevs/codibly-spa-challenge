import React from "react"
import { useLocalStorage } from "react-use"
import { Button, Modal, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import FavoriteIcon from "@mui/icons-material/Favorite"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "30vh",
  backgroundColor: "background.paper",
  borderRadius: 1,
  boxShadow: 24,
  p: 10,
  alignItems: "center",
  justifyContent: "center",
}

const WelcomeModal = () => {
  const [open, setOpen] = useLocalStorage("openModal", true)

  const handleClose = () => {
    setOpen(false) // You might want to set this to false to close the modal
  }

  return (
    <Modal
      open={open!}
      onClose={handleClose}
      aria-labelledby="thank-you-modal-title"
      aria-describedby="thank-you-modal-description"
    >
      <Stack sx={style}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h6" component="h2">
            Thank You!
          </Typography>
          <Stack flexDirection="row" alignItems="center">
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              I appreciate the time you`ve taken to review code of this app
            </Typography>
            <RocketLaunchIcon color="success" />
          </Stack>
          <Button onClick={handleClose}>
            <FavoriteIcon color="primary" />{" "}
            <Typography ml={3}>Close</Typography>
          </Button>
        </Stack>
      </Stack>
    </Modal>
  )
}

export default WelcomeModal
