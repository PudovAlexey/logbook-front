import { Text, View } from 'react-native';
import { Card } from '@shared/ui/Card/Card';
import { VStack } from '@shared/ui/VStack/VStack';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { HStack } from '@shared/ui/HStack/HStack';
import { useStyles } from './styles';
import { LogInfo } from '../LogInfo/LogInfo';

function LogbookTab() {
  const styles = useStyles();
    // const {t} = useTranslation();
  return (
    <PageWrapper>
      <View style={styles.logInfo}>
      <LogInfo />
      </View>
      <HStack justifyContent="space-between" wrap gap={10}>
      <Card />
      <Card />
      <Card />
      <Card />
      </HStack>
    </PageWrapper>
    // <VStack width={'100%'}>
    //   <View style={styles.logInfo}>
    //   {/* <LogInfo /> */}
    //   <Text>test</Text>
    //   </View>
    //   <View style={styles.cardWrapper}>
    //     {/* <View style={styles.card}><Text>1</Text></View>
    //     <View style={styles.card}><Text>2</Text></View>
    //     <View style={styles.card}><Text>3</Text></View>
    //     <View style={styles.card}><Text>4</Text></View> */}
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Card />
    //   </View>
    // </VStack>
  );
}

export {
    LogbookTab,
};
