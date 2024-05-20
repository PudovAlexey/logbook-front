import dayjs from 'dayjs';

type formatDateProps = {
    date?: string
}

function formatDate({ date }: formatDateProps) {
  if (date) {
    return dayjs(date).format('DD.MM.YYYY');
  }
    return date;
}

export {
    formatDate,
};
