const TOGGLE_BUTTON_IS_VISIBLE = 'TOGGLE_BUTTON_IS_VISIBLE'
const SORT_FIELD = 'SORT_FIELD'
const SET_STATE_DATA = 'SET_STATE_DATA'


export let setStateData = (result, companies) => {
    return {
        type: SET_STATE_DATA,
        result,
        companies
    }
}

export let toggleButtonIsVisible = (companyId) => {
    return {
        type: TOGGLE_BUTTON_IS_VISIBLE,
        companyId
    }
}

export let setSortField = (fieldParent, fieldKey) => {
    return {
        type: SORT_FIELD,
        parent: fieldParent,
        key: fieldKey
    }
}

