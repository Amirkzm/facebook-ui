import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Button,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";

const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
  },
});

const tooltipStyle = (theme) => ({
  position: "fixed",
  bottom: 30,
  right: 30,
  bgcolor: "primary.main",
  "&>*": {
    fontSize: 36,
  },
  [theme.breakpoints.down("sm")]: {
    "&>*": {
      fontSize: 16,
      bottom: 10,
      right: 10,
    },
  },
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  const [postCreated, setPostCreated] = useState(false);

  return (
    <>
      <Tooltip title="ADD POST" onClick={() => setOpen(true)} sx={tooltipStyle}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            size="small"
            sx={{ width: "90%", ml: "5%", mb: 2 }}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="outlined"
            size="small"
            defaultValue={"Write body of the post"}
            multiline
            rows={4}
            sx={{ width: "90%", ml: "5%", mb: 2 }}
          />

          <TextField
            select
            label="visibality"
            value="public"
            helperText="Please select post visability"
            sx={{ width: "90%", ml: "5%" }}
          >
            <MenuItem key="public" value="public">
              public
            </MenuItem>
            <MenuItem key="private" value="private">
              private
            </MenuItem>
            <MenuItem key="listed" value="listed">
              listed
            </MenuItem>
          </TextField>
          <Box sx={{ width: "90%", ml: "5%" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Who can comment?
            </FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="Anyone"
                control={<Radio />}
                label="Anyone"
              />
              <FormControlLabel
                value="Friends Only"
                control={<Radio />}
                label="Friends Only"
              />
              <FormControlLabel
                value="No One"
                control={<Radio />}
                label="No One"
              />
            </RadioGroup>
          </Box>
          <Box sx={{ width: "90%", ml: "5%", mt: 6 }}>
            <Button
              color="primary"
              variant="outlined"
              sx={{ mr: 3 }}
              onClick={() => setPostCreated(true)}
            >
              Create
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={postCreated}
        autoHideDuration={500}
        onClose={() => {
          setOpen(false);
          setTimeout(() => setPostCreated(false), 3000);
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={() => setPostCreated(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddPost;
