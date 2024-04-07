type formatUserNameProps = {
    name: string
    surname?: string
    patronymic?: string
    type?: 'char' | 'short' | 'full'
}

function formatUserName({name, surname, patronymic, type = 'short'}: formatUserNameProps ) {
    const formatByType = {
        'short': () => {
            if (name && surname && patronymic) {
                return `${surname} ${name[0]}.${patronymic[0]}.`
              } else if (name && surname) {
                return `${surname} ${name[0]}.`
              } else {
                return name
              }
        },
        'char': () => {
            if (name && surname) {
                return `${surname[0]}${name[0]}`
              } else {
                return name
              }
        },
        'full': () => {
            if (name && surname && patronymic) {
                return `${surname} ${name} ${patronymic}`
              } else if (name && surname) {
                return `${surname} ${name}`
              } else {
                return name
              }
        }
    }

    return formatByType[type]();
}

export {
    formatUserName
}
