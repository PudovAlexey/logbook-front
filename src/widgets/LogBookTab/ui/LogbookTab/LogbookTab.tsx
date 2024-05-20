import { ScrollView, Text, View } from 'react-native';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { HStack } from '@shared/ui/HStack/HStack';
import { useLogsLoader } from '@widgets/LogBookTab/lib/hooks/useLogsLoader';
import { LogbookCardItem } from '@entities/LogbookCardItem/ui/LogbookCardItem';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useStyles } from './styles';
import { LogInfo } from '../LogInfo/LogInfo';

type LogbookTabProps = {
  navigator: NativeStackHeaderProps;
};

function LogbookTab({ navigator }: LogbookTabProps) {
  const { searchValue, setSearchValue, logsList } = useLogsLoader();
  const styles = useStyles();
  // const {t} = useTranslation();

  const onLogBookTabItemClick = (tabId: number) => {
    navigator.navigation.push('logbookPage', { tabId });
  };

  return (
    <View>
      <View style={styles.logInfo}>
        <LogInfo
          searchValue={searchValue}
          onSearch={(e) => setSearchValue(e)}
        />
      </View>
 <View style={styles.scroller}>
 <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.container}>
          {logsList.map(({
 title, description, id, image_data,
}) => (
            // <View style={styles.item}>
            //   <Text>1</Text>
            // </View>
            <LogbookCardItem
              onCardClick={onLogBookTabItemClick}
              key={id}
              id={id}
              title={title}
              description={description}
              image_data={image_data}
            />
          ))}
        </View>
 </ScrollView>
 </View>
      {/* <PageWrapper>
      </PageWrapper> */}
    </View>
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

export { LogbookTab };
