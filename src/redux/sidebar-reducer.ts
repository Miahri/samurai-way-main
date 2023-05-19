export type SidebarType = {
    pages: Array<string>
}

let initialState: SidebarType = {
    pages: ['1', '2']
}

export const sidebarReducer = (state = initialState, action: any): SidebarType => {    /////////////to fix any
    return state;
}

