import { BaseTypographyColor } from '@shared/api/types/uiTypes';
import { useState } from 'react';

type BackandErrors = Record<string, {
    status: BaseTypographyColor
    message: string
    description?: string
}>

function useBackandStatuses() {
  const [validationErrors, setValidationStatuses] = useState<BackandErrors>({});
  return {
    setValidate: (value: BackandErrors) => {
      setValidationStatuses(value);
    },
    validationErrors,
  };
}

export {
  useBackandStatuses,
};
