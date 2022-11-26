export const actionType = {
    NEW_TASK: "new_task",
    COMPLETED: "completed",
    DELETE_TASK: "delete_task",
    CHENGE_COLOR: "chenge_color",
}

export const initialState = {
    1: { completed: true, text: "Design ui", color: "green" },
    2: { completed: false, text: "discover state", color: "red" },
    3: { completed: false, text: "discover actions" },
}




export function reducer(state, action) {
    const { text, id, completed, color } = action.payload
    switch (action.type) {
        case actionType.NEW_TASK:
            const newKeyTask = Math.max(...Object.keys(state)) + 1
            return {
                ...state,
                [newKeyTask]: {
                    completed: false,
                    text: text
                }
            };
        case actionType.COMPLETED:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    completed: !completed
                }
            }
        case actionType.DELETE_TASK:
            delete state[id]
            return {
                ...state
            }
        case actionType.CHENGE_COLOR:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    color
                }
            }

        default:
            throw Error(`action type not allowed: ${action.type}`);
    }
}















