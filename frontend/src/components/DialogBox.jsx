import axios from 'axios';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogBox() {
    const [text, settext] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/add', { task: text })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setOpen(false);
        settext('');
    };

    const cancelHandler = (e) => {
        setOpen(false);
        settext('');
    };

    const changeHandler = (event) => {
        settext(event.target.value);
    };

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    borderRadius: 25,
                    backgroundColor: '#21b6ae',
                    padding: '10px 36px',
                    fontSize: '18px',
                }}
                onClick={handleClickOpen}
            >
                Add todo's
            </Button>
            <Dialog open={open}>
                <DialogTitle>Todo's</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add your today's task</DialogContentText>
                    <TextField
                        required="true"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter task"
                        fullWidth
                        variant="standard"
                        value={text}
                        onChange={changeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelHandler}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
