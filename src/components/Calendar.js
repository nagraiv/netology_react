import '../css/main.css';
import PropTypes from 'prop-types';
import createCalendarData, {prepareCalendarInfo} from "../logic/createCalendarData";

function Calendar( props ) {
    const { date } = props;
    // console.log(date);

    const info = prepareCalendarInfo(date);
    const weeks = createCalendarData(date);
    // console.log(info, weeks);
    return (
    <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{ info.weekday }</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{ info.date }</div>
                <div className="ui-datepicker-material-month">{ info.monthCase }</div>
                <div className="ui-datepicker-material-year">{ info.year }</div>
            </div>
        </div>
        <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
                <span className="ui-datepicker-month">{ info.month }</span>&nbsp;
                <span className="ui-datepicker-year">{ info.year }</span>
            </div>
        </div>
        <table className="ui-datepicker-calendar">
            <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="ui-datepicker-week-end" />
                <col className="ui-datepicker-week-end" />
            </colgroup>
            <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
            </thead>
            <tbody>
                { weeks.map( w => <tr key={ w.key }>
                    { w.map( d => <td className={ d.class } key={ d.key }>
                        {d.date}
                    </td> ) }
                </tr> ) }
            </tbody>
        </table>
    </div>
    );
}

Calendar.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
}

export default Calendar;
