const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}
type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE-LOADING',
        isLoading
    } as const
} // fix any