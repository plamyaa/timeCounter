
export const UI_ELEMENTS = {
    INPUT_TEXT : document.querySelector(".time__input"),
    INPUT_BTN : document.querySelector(".time__button"),

    DAY_IMP : document.getElementById("time__input-day"),
    MONTH_IMP : document.getElementById("time__input-month"),
    YEAR_IMP : document.getElementById("time__input-year"),

    HOUR_OUT : document.getElementById("time__output-hour"),
    DAY_OUT : document.getElementById("time__output-day"),
    MONTH_OUT : document.getElementById("time__output-month"),
    YEAR_OUT : document.getElementById("time__output-year")
}

export function isNotEmpty(day, month, year) {
    if (year < 101) {
        return alert("Enter a year greater than 100");
    }
    if (day >= 0) {
        if (month >= 0) {
            if (year >= 0) {
                return true;
            }
            else {
                return alert("Enter year");
            }
        }
        else {
            return alert("Enter month");
        }
    }
    else {
        return alert("Enter day");
    }
}

