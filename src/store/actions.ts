import { SET_MENU } from "./actionNames"

export const SetMenu = (menu: boolean) => {
    return {
        type: SET_MENU,
        menu: menu
    }
}