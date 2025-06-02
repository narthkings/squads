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

    const month = date.toLocaleString('en-NG', { month: 'short' }); // Mar
    const time = date.toLocaleTimeString('en-NG', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return `${day}${ordinal} ${month} ${time}`;
}

