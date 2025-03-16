import { useState } from "react";
import { Edit, Trash2, Plus, MoreVertical, PlusIcon } from "lucide-react";
import {
  Box,
  Button,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Select,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  useAddTask,
  useEditTask,
  useDeleteTask,
  useGetTasks,
} from "../../../../../hooks/useTasks";
import { useFilters } from "../../../../../context/filterContext";
import { Task } from "../../../../../types";
import CreateTaskModal from "./CreateTaskModal";

const TodoTable = () => {
  const { data: tasks = [] } = useGetTasks();
  const { categories, statuses } = useFilters();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    dueOn: "",
    taskStatus: statuses[0],
    taskCategory: categories[0],
  });

  const [createTaskModalIsOpen, setCreateTaskModalIsOpen] = useState(false);

  const closeCreateTaskModal = () => setCreateTaskModalIsOpen(false);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => setAnchorEl(null);

  const addTask = useAddTask();
  const editTask = useEditTask();
  const deleteTask = useDeleteTask();

  const handleAddTask = () => {
    addTask.mutate(newTask);
    setNewTask({
      title: "",
      dueOn: "",
      taskStatus: statuses[0],
      taskCategory: categories[0],
    });
  };

  const handleEditTask = (id: string) => {
    editTask.mutate({ id, updatedTask: newTask });
    closeMenu();
  };

  const handleDeleteTask = (id: string) => {
    deleteTask.mutate(id);
    closeMenu();
  };

  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ backgroundColor: "#F8BFFF" }}
        >
          <Typography variant="h6">Todo ({(tasks || []).length})</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Due On</TableCell>
                  <TableCell>Task Status</TableCell>
                  <TableCell>Task Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Button
                      startIcon={<PlusIcon />}
                      sx={{ color: "black" }}
                      onClick={() => setCreateTaskModalIsOpen(true)}
                    >
                      Add Task
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <TextField
                      variant="standard"
                      placeholder="Task Title"
                      value={newTask.title}
                      onChange={(e) =>
                        setNewTask({ ...newTask, title: e.target.value })
                      }
                      InputProps={{ disableUnderline: true }}
                      sx={{
                        border: "none",
                        "& .MuiInputBase-root": { padding: 0, marginBottom: 2 },
                      }}
                    />
                    <Box display="flex" alignItems="center" gap={2}>
                      <Button
                        variant="contained"
                        startIcon={<Plus />}
                        onClick={handleAddTask}
                        sx={{
                          backgroundColor: "purple",
                          color: "white",
                          borderRadius: "30px",
                        }}
                      >
                        ADD
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="date"
                      value={newTask.dueOn}
                      onChange={(e) =>
                        setNewTask({ ...newTask, dueOn: e.target.value })
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Select
                      value={newTask.taskStatus}
                      onChange={(e) =>
                        setNewTask({ ...newTask, taskStatus: e.target.value })
                      }
                    >
                      {statuses.map((status) => (
                        <MenuItem key={status} value={status}>
                          {status}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={newTask.taskCategory}
                      onChange={(e) =>
                        setNewTask({ ...newTask, taskCategory: e.target.value })
                      }
                    >
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>

                {(tasks || []).map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.dueOn}</TableCell>
                    <TableCell>{task.taskStatus}</TableCell>
                    <TableCell>{task.taskCategory}</TableCell>
                    <TableCell>
                      <IconButton onClick={openMenu}>
                        <MoreVertical />
                      </IconButton>
                      <MuiMenu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                      >
                        <MenuItem onClick={() => handleEditTask(task.id!)}>
                          <Edit size={16} /> Edit
                        </MenuItem>
                        <MenuItem onClick={() => handleDeleteTask(task.id!)}>
                          <Trash2 size={16} color="red" /> Delete
                        </MenuItem>
                      </MuiMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      <CreateTaskModal
        open={createTaskModalIsOpen}
        onClose={closeCreateTaskModal}
      />
    </>
  );
};

export default TodoTable;
