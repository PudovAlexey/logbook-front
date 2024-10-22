import { ScrollView, View } from 'react-native';
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
          navigator={navigator}
          searchValue={searchValue}
          onSearch={(e) => setSearchValue(e)}
        />
      </View>
 <View style={styles.scroller}>
 <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {logsList.map(({
 title, description, id, image_data,
}) => (
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
    </View>
  );
}

export { LogbookTab };
