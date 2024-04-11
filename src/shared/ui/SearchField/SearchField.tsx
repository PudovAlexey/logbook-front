import React from 'react';
// import AndtIcon from 'react-native-vector-icons/AntDesign';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
import { InputProps, Input } from '../Input/Input';

export type SearchFieldProps = InputProps & {
  onClear?: () => void;
};

function SearchField({ onClear, ...props }: SearchFieldProps) {
  return (
    <Input
    //   leftIcon={(
    //     <AndtIcon
    //       name="search1"
    //       size={24}
    //     />
    //   )}
    //   rightIcon={(
    //     <EntypoIcon.Button
    //       onPress={onClear}
    //       name="cross"
    //       size={24}
    //     />
    //   )}
      {...props}
    />
  );
}

export { SearchField };
