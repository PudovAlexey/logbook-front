import { createTheme } from "@rneui/themed";
import { light } from "./light";
import { dark } from "./dark";

const themes = createTheme({
    lightColors: light,
    darkColors: dark,
})

export {
    themes
}