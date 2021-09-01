export const CREATE_TODO = "INSERT INTO Todo (description, isCompleted) VALUES ($1, false) RETURNING *"
export const GET_ALL_TODO = "SELECT * FROM todo"
export const GET_TODO_BY_ID = "SELECT * FROM todo WHERE id=$1"
export const GET_TODO_BY_DESCRIPTION = "SELECT * FROM todo WHERE description ~ $1";
export const DELETE_TODO = "DELETE FROM todo WHERE id=$1"
export const UPDATE_TODO =
    "UPDATE todo SET description=$1, isCompleted=$2 WHERE id=$3 RETURNING *";