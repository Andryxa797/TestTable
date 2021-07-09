const TOGGLE_BUTTON_IS_VISIBLE = 'TOGGLE_BUTTON_IS_VISIBLE'
const SORT_FIELD = 'SORT_FIELD'
const SET_STATE_DATA = 'SET_STATE_DATA'

let stateInitialization = {
    sortOptions: {
        parent: '',
        key: '',
        direction: '',
    },
    result: {},
    companies: []
}

export default function reducerTable(state = stateInitialization, action) {
    switch (action.type) {
        case TOGGLE_BUTTON_IS_VISIBLE: {
            let companies = state.companies.map((company) => {
                if (company.id === action.companyId) {
                    company.isOpen = !company.isOpen
                }
                return company
            })
            return {
                ...state,
                companies
            }
        }
        case SORT_FIELD: {
            let sortOptions = {...state.sortOptions}
            if (!(sortOptions.parent === action.parent && sortOptions.key === action.key)) {
                sortOptions.direction = ''
            }
            sortOptions.parent = action.parent
            sortOptions.key = action.key
            switch (sortOptions.direction) {
                case '':
                    sortOptions.direction = 'asc'
                    break;
                case 'asc':
                    sortOptions.direction = 'desc'
                    break;
                case 'desc':
                    sortOptions.direction = ''
                    break;
                default:
                    sortOptions.direction = ''
            }
            return {
                ...state,
                sortOptions
            }
        }
        case SET_STATE_DATA:

            return {
                ...state,
                result: {...action.result},
                companies: action.companies
            }
        default:
            return state
    }
}