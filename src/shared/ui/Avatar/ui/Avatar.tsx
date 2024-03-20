
import { Avatar as RneuAvatar, AvatarProps as RneuAvatarProps } from '@rneui/themed'; 
 
 type AvatarProps = RneuAvatarProps & {
    
 }
 
 function Avatar(props:AvatarProps) {
  return <RneuAvatar {...props}/>
}

export {Avatar}
