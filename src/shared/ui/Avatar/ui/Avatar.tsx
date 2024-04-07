import { Avatar as RneuAvatar, AvatarProps as RneuAvatarProps } from '@rneui/themed';
import { DefaultSize } from '@shared/lib/styleHooks/types';

type AvatarProps = Omit<RneuAvatarProps, 'size'> & {
  size?: DefaultSize;
};

function makeSize(size: DefaultSize) {
  switch (size) {
    case 'xl':
      return 94;
    case 'large':
      return 94;
    case 'medium':
      return 94;
    case 'small':
      return 94;
    case 'xs':
      return 94;
  }
}

function Avatar(props: AvatarProps) {
  const { size = 'medium', ...otherProps } = props;

  return (
    <RneuAvatar
      size={makeSize(size)}
      {...otherProps}
    />
  );
}

export { Avatar };
