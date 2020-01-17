import * as actionTypes from './actions'; 


const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            // this.setState( ( prevState ) => {//Do this in redux
            //     return { persons: prevState.persons.concat(newPerson)}
            // } );

            console.log('add')
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionTypes.DELETE_PERSON:
            console.log('delete')
            const updatedArray = state.persons.filter((person, index) => person.id !== action.personElId);
            return {
                ...state,
                ç: updatedArray
            }
    }
    return state;
}

export default reducer;