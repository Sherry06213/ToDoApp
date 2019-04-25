import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
const action = {
    type: ADD_REMINDER,
    text,
    dueDate
}
console.log('Actions in addReminder', action);
return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('Deleting reminders', action)
    return action
}

export const clearReminder = () => {
    return {
        type: CLEAR_REMINDER
    }
}