import { useState } from 'react';

type BackandErrors = Record<string, {
    message: string
    description?: string
}>

function useBackandStatuses() {
  const [validationErrors, setValidationStatuses] = useState<BackandErrors>({});
  return {
    setValidationErrors: (value: BackandErrors) => {
      setValidationStatuses(value);
    },
    validationErrors,
  };
}

export {
  useBackandStatuses,
};
