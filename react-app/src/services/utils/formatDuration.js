import moment from 'moment';

export default function formatDuration(time) {
	const TIME_MOMENT = moment.utc(
		moment.duration(time, 'minutes').asMilliseconds()
	);
	const HOUR_STRING = TIME_MOMENT.hours() === 1 ? 'hour' : 'hours';
	const MINUTES_STRING = TIME_MOMENT.minutes() === 1 ? 'minute' : 'minutes';
	return TIME_MOMENT.minutes()
		? TIME_MOMENT.format(`h [${HOUR_STRING}] mm [${MINUTES_STRING}]`)
		: TIME_MOMENT.format(`h [${HOUR_STRING}]`);
}
