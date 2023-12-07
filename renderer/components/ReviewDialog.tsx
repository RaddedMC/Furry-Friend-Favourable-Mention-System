import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating, TextField, Typography } from "@mui/material";
import { useState } from "react";

/**
 * review dialog for survey feedback
 * @param props  properties
 * @returns react component
 */
export default function ReviewDialog(props: {openState: boolean, onClose: () => void}) {

    const [rating, setRating] = useState<number>(3);
    const [comment, setComment] = useState<string>("");
    
    // on aubmit, return home
    const submitFeedback = () => {
        window.location.href = "/home"
    }

    // show the generated dialog
    return <Dialog
        open={props.openState}
        onClick={(ev) => {
            ev.stopPropagation();

            // @ts-expect-error
            if (ev.target.classList.contains("MuiDialog-container")) {
                props.onClose();
            }
        }}
    >
        <DialogTitle>Write a Review</DialogTitle>
        <DialogContent>
            <DialogContentText>Thank you for using the Furry Friend Favourable Mention System! We greatly appreciate any feedback you are willing to offer.</DialogContentText>
            <div className="mt-2 flex flex-row justify-center">
                <Typography className="mr-2">Rate us!</Typography>
                <Rating value={rating} size="large" onChange={(ev, val) => setRating(val)}/>
            </div>
        </DialogContent>
        <div className="p-2">
            <TextField fullWidth multiline value={comment} onChange={(ev) => setComment(ev.target.value)} label="Any comments?"/>
        </div>
        <DialogActions>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button onClick={submitFeedback}>Submit</Button>
        </DialogActions>
    </Dialog>
}