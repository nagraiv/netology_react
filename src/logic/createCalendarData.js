import moment from 'moment';
import 'moment/locale/ru'

export function prepareCalendarInfo(date) {
    const info = {};

    moment().locale('ru');

    const weekday = moment(date).format('dddd');
    info.weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

    const dateMonth = moment(date).format('DD MMMM').split(' ');
    info.date = dateMonth[0];
    info.monthCase = dateMonth[1];

    info.month = moment(date).format('MMMM');
    info.year = moment(date).format('YYYY');

    return info;
}

function createCalendarData(date) {
    moment().locale('ru');

    const now = moment(date).startOf('date');
    const nowDay = now.format('DD.MM');
    const currentMonth = moment(now).format('MMMM');

    const firstDayOfMonth = moment(now).startOf('month');

    const calendarStart = moment(firstDayOfMonth).subtract(firstDayOfMonth.day() - 1, 'days');
    // console.log(calendarStart.format());

    const lastDayOfMonth = moment(now).endOf('month').startOf('date');;
    const nextMonth = moment(lastDayOfMonth).add(1, 'months').format('MMMM');
    // console.log(nextMonth);

    const calendar = [];
    let currentDay = calendarStart;
    while (currentDay.format('MMMM') !== nextMonth) {
        const week = [];
        for (let i = 0; i < 7; i += 1) {
            const dayObj = {};
            dayObj.date = currentDay.get('date');
            dayObj.key = currentDay.format('DD.MM')
            dayObj.class = '';
            dayObj.class += currentDay.format('MMMM') === currentMonth ? '' : 'ui-datepicker-other-month ';
            dayObj.class += dayObj.key === nowDay ? 'ui-datepicker-today ' : '';
            week.push(dayObj);
            currentDay.add(1, 'days');
        }
        week.key = week[0].date + '-' + week[6].date;
        calendar.push(week);
    }

    return calendar;
}

export default createCalendarData;
