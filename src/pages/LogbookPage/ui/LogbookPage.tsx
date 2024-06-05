import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
import { GetLogInfoByIdResponse } from '@shared/api/loginfoEndpoints/types';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { HStack } from '@shared/ui/HStack/HStack';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { VStack } from '@shared/ui/VStack/VStack';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

function LogbookPage({ route, navigation }: NativeStackHeaderProps) {
  const [logState, setLogState] = useState<GetLogInfoByIdResponse | null>(null);
  const logbookQuery = useLazyQuery(loginfoEndpoints.getLogInfoById);
  const tabId = route?.params?.tabId;

  useEffect(() => {
    if (!tabId) {
      return;
    }

    logbookQuery({ id: tabId }).then(({ data, error }) => {
      if (error) {
        return;
      }
      setLogState(data);
    });
  }, [tabId, logbookQuery]);

  if (!logState) {
    return null;
  }

  return (
    <PageWrapper>
      <VStack
        justifyContent="center"
        gap={10}
      >
        {Object.keys(logState).map((key) => (
            <HStack key={key}>
                <Text>{key}</Text>
                <Text>{logState[key]}</Text>
            </HStack>
        ))}
      </VStack>
    </PageWrapper>
    // <View><Text>{tabId}</Text></View>
  );
}

export { LogbookPage };
