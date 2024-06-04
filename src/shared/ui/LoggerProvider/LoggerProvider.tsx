import {
    PropsWithChildren,
 createContext, useContext, useMemo, useState,
} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Button } from '../Button/ui/Button';
import { useStyles } from './styles';
import { BottomSheet } from '../BottomSheet/ui/BottomSheet';

type LogItem = {
    date: string
    data: string
    color: 'error' | 'info' | 'query' | 'queryError'
}

type LoggerPushProps = {
    title: string
    data: any
    color: LogItem['color']
};

type LoggerContextProps = {
    loggerPush: (value: LoggerPushProps) => void
};

const LoggerContext = createContext<Partial<LoggerContextProps>>({});

function LoggerProvider({ children }: PropsWithChildren) {
    const [debugOpen, setDebugOpen] = useState(false);
    const styles = useStyles();
    const [loggerStack, setLoggerStack] = useState<LogItem[]>([]);

    const loggerPush = ({ data, color, title, }: LoggerPushProps) => {
        const date = new Date().toISOString();

        setLoggerStack((prev) => [...prev, {
            date,
            data: JSON.stringify(data),
            color,
            title,
        }]);
    };

    return (
      <LoggerContext.Provider value={useMemo(() => ({
        loggerPush,
      }), [])}
      >
      <View style={styles.buttonWrapper}>
          {children}
      </View>
      <View style={styles.button}>
      <Button onPress={() => setDebugOpen(true)}>DBG</Button>
      </View>
      <BottomSheet onChangeVisibilityPress={(isOpen) => setDebugOpen(isOpen)} isVisible={debugOpen}>
          <ScrollView style={styles.dbgBackground}>
            {loggerStack.map(({ data, date, color, title }) => (
                <View style={{
                    ...styles.dbgBlock,
                    backgroundColor: color,
                    ...styles[color],
                }}
                >
                    <Text>{title}</Text>
                    <Text>{date}</Text>
                    <Text>{data}</Text>

                </View>
            ))}
          </ScrollView>
      </BottomSheet>
      </LoggerContext.Provider>
    );
}

function useLogger() {
    return useContext(LoggerContext);
}

export {
    LoggerProvider,
    useLogger,
};
