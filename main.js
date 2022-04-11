
import { UI_ELEMENTS, isNotEmpty } from "./view.js"
import differenceInDays from 'date-fns/differenceInDays'
import differenceInMonths from 'date-fns/differenceInMonths'
import differenceInYears from 'date-fns/differenceInYears'
import differenceInHours from 'date-fns/differenceInHours'
import isExists from 'date-fns/isExists'

UI_ELEMENTS.INPUT_BTN.addEventListener("click", () => {
    const _day = Number(UI_ELEMENTS.DAY_IMP.value);
    const _month = Number(UI_ELEMENTS.MONTH_IMP.value);
    const _year = Number(UI_ELEMENTS.YEAR_IMP.value);
    if (isNotEmpty(_day, _month, _year)){
        const nowDate = new Date();
        const currentDate = new Date(_year, _month - 1, _day);
        if (isExists(_year, _month - 1, _day)) {
            const difInHour = differenceInHours(nowDate, currentDate);
            UI_ELEMENTS.HOUR_OUT.textContent = Math.abs(difInHour);
            const difInDay = differenceInDays(nowDate, currentDate);
            UI_ELEMENTS.DAY_OUT.textContent = Math.abs(difInDay);
            const difInMonth = differenceInMonths(nowDate, currentDate);
            UI_ELEMENTS.MONTH_OUT.textContent = Math.abs(difInMonth);
            const difInYear = differenceInYears(nowDate, currentDate);
            UI_ELEMENTS.YEAR_OUT.textContent = Math.abs(difInYear);
        }
        else {
            alert("Date is not Exists");
        }
    }
});

