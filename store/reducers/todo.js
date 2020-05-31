import { ADD, REMOVE, UPDATE } from '../actions/todoaction';

const initialState = {
    goals: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, goals: state.goals.concat(action.value) };
        case REMOVE:
            const index = state.goals.findIndex(
                goal => goal.id === action.id
            );
            const updatedGoals = [...state.goals];
            updatedGoals.splice(index, 1);
            return { ...state, goals: updatedGoals };
        case UPDATE:
            const index1 = state.goals.findIndex(
                goal => goal.id === action.id
            );
            const updatedGoals1 = [...state.goals];
            if (updatedGoals1[index1].status === 'Completed') {
                updatedGoals1[index1].status = 'Pending';
            }
            else {
                updatedGoals1[index1].status = 'Completed';
            }
            return { ...state, goals: updatedGoals1 };
        default:
            return state;
    }
};

export default reducer;