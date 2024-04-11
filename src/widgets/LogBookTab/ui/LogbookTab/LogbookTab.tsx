import { View } from 'react-native';
import { Card } from '@shared/ui/Card/Card';
import { styles } from './styles';
import { LogInfo } from '../LogInfo/LogInfo';

function LogbookTab() {
    // const {t} = useTranslation();
  return (
    <View style={styles.cardView}>
      <View style={styles.logInfo}>
      <LogInfo />
      </View>
      <View style={styles.cardWrapper}>
        {/* <View style={styles.card}><Text>1</Text></View>
        <View style={styles.card}><Text>2</Text></View>
        <View style={styles.card}><Text>3</Text></View>
        <View style={styles.card}><Text>4</Text></View> */}
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

export {
    LogbookTab,
};
