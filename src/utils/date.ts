export function formatDate(date: Date): string {
    const day = date.getDate();
    const ordinal =
        day % 10 === 1 && day !== 11
            ? 'st'
            : day % 10 === 2 && day !== 12
                ? 'nd'
                : day % 10 === 3 && day !== 13
                    ? 'rd'
                    : 'th';

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    const paddedMinutes = minutes.toString().padStart(2, '0');

    const time = `${hour12}:${paddedMinutes} ${ampm}`;

    return `${day}${ordinal} ${month} ${time}`;
}

