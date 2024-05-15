import { Text, View } from 'react-native';
import { Card } from '@shared/ui/Card/Card';
import { VStack } from '@shared/ui/VStack/VStack';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { HStack } from '@shared/ui/HStack/HStack';
import { useState } from 'react';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
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
    <>
      <View style={styles.logInfo}>
        <LogInfo
          searchValue={searchValue}
          onSearch={(e) => setSearchValue(e)}
        />
      </View>
      <PageWrapper>
        <HStack
          justifyContent="space-between"
          wrap
          gap={10}
        >
          {logsList.map(({ title, description, id }) => (
            <LogbookCardItem
              onCardClick={onLogBookTabItemClick}
              key={id}
              id={id}
              title={title}
              description={description}
            />
          ))}
        </HStack>
      </PageWrapper>
    </>
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
