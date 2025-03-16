import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAddTask } from "../../../../../hooks/useTasks";
import { Task } from "../../../../../types";
import { createPortal } from "react-dom";

const CreateTaskModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [task, setTask] = useState<Task>({
    title: "",
    taskCategory: "Work",
    dueOn: "",
    taskStatus: "TO-DO",
  });

  const { mutate: addTask, isPending } = useAddTask();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    addTask(task, {
      onSuccess: () => {
        onClose();
        setTask({
          title: "",
          taskCategory: "Work",
          dueOn: "",
          taskStatus: "TO-DO",
        });
      },
    });
  };

  return createPortal(
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Create Task
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <TextField
          label="Task Title"
          name="taskName"
          value={task.title}
          onChange={handleChange}
          fullWidth
          margin="dense"
        />

        {/* <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          multiline
          rows={3}
          fullWidth
          margin="dense"
        /> */}

        <Box display="flex" justifyContent="space-between" my={2}>
          <RadioGroup
            row
            value={task.taskCategory}
            onChange={(e) =>
              setTask((prev) => ({ ...prev, taskCategory: e.target.value }))
            }
          >
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
            <FormControlLabel
              value="Personal"
              control={<Radio />}
              label="Personal"
            />
          </RadioGroup>

          <TextField
            label="Due On"
            type="date"
            name="dueOn"
            value={task.dueOn}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <Select
            name="taskStatus"
            value={task.taskStatus}
            onChange={(e) =>
              setTask((prev) => ({ ...prev, taskStatus: e.target.value }))
            }
          >
            <MenuItem value="TO-DO">TO-DO</MenuItem>
            <MenuItem value="IN-PROGRESS">IN-PROGRESS</MenuItem>
            <MenuItem value="COMPLETED">COMPLETED</MenuItem>
          </Select>
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
          <Button onClick={onClose} variant="outlined">
            CANCEL
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={isPending}
            sx={{ backgroundColor: "#D1A3FF" }}
          >
            CREATE
          </Button>
        </Box>
      </DialogContent>
    </Dialog>,
    document.getElementById("root")!
  );
};

export default CreateTaskModal;
