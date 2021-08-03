import { types } from "../types/types";


export const openAddScreen = () =>({

    type: types.addOpen


});

export const closeAddScreen = () => ({
    type: types.addClose
})
