import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { VStack } from '@shared/ui/VStack/VStack';
import { Alert } from '@shared/ui/Alert/ui/Alert';

type NotificationProps = {
  status: 'error' | 'warning' | 'success';
  message: string;
  description?: string;
  time?: number;
};

type AlertContextValue = {
  notify: (value: NotificationProps) => void;
};

const AlertContext = createContext<AlertContextValue | null>(null);

function AlertContextProvider({ children }: PropsWithChildren) {
  const [fireCheck, setFireCheck] = useState(false);
  const [notificationQueue, setNotificationQueue] = useState<(NotificationProps & {id: number})[]>([]);
  const notify: AlertContextValue['notify'] = (notify) => {
    const endTimer = notify.time || 2000;
    const id = Date.now();
    setNotificationQueue((prev) => [{...notify, id, time: endTimer}, ...prev])
  };
  
  useEffect(() => {
    if (!notificationQueue.length) return
    const interval = setInterval(() => {
      setFireCheck(true)
    }, 150);

    return () => {
      clearInterval(interval)
    }
  }, [notificationQueue])

  useEffect(() => {
    if (!notificationQueue.length) return
    if (!fireCheck) return;
    setFireCheck(false)

    notificationQueue.forEach((el) => {
      const timeStart = el.id;
      const timeEnd = el.time || 0
      const duration = timeStart + timeEnd
      const currentTime = Date.now();
      
      if (currentTime >= duration) {
        setNotificationQueue((prev) => prev.filter(({id}) => id !== timeStart))
      }
    })
  }, [notificationQueue, fireCheck])


  return (
    <AlertContext.Provider
      value={useMemo(
        () => ({
          notify,
        }),
        []
      )}
    >
      <>
        {children}
        <View style={styles.messageContainer}>
          <VStack gap={10}>
            {notificationQueue.map(({status, message, description, id}) => (
              <Alert key={id} status={status} message={message} description={description}/>
            ))}
          </VStack>
        </View>
      </>
    </AlertContext.Provider>
  );
}

const useNotification = () => {
  return useContext(AlertContext);
};

export { AlertContextProvider, useNotification };
