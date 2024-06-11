import dayjs from 'dayjs';

type formatDateProps = {
    date?: string
}

function formatTime({ date }: formatDateProps) {
  if (date) {
    return dayjs(date).format('HH:mm');
  }
    return date;
}

export {
    formatTime,
};
