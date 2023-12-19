import { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null,
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstName':
            return {
                ...state,
                firstName: {
                    ...state.firstName,
                    value: action.payload,
                    error: action.payload.length < 4 ? 'First name must be at least 4 characters long.' : null
                }
            };
        default:
            return {
                ...state,
                [action.type]: {
                    ...state[action.type],
                    value: action.payload
                }
            };
    }
};

const FormValidation = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    };

    return (
        <div>
            <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name='firstName'
                    value={state.firstName.value}
                    onChange={handleChange}
                />

                {state.firstName.error !== null && (
                    <p className='error'>{state.firstName.error}</p>
                )}

            </div>
            <div>
                <label>Last  Name:</label>
                <input
                    type="text"
                    name='lastName'
                    value={state.lastName.value}
                    onChange={handleChange}
                />
                {state.lastName.error !== null && (
                    <p className='error'>{state.lastSName.error}</p>
                )}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name='email'
                    value={state.email.value}
                    onChange={handleChange}
                />
                {state.email.error !== null && (
                    <p className='error'>{state.email.error}</p>
                )}
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    );
};

export default FormValidation;
