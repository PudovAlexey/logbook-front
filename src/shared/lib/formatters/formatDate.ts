import dayjs from 'dayjs';

type formatDateProps = {
    date: string
}

function formatDate({date}: formatDateProps) {
  return dayjs(date).format('DD.MM.YYYY')
}

export {
    formatDate
}
