import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ButtonGroup } from '@rneui/base';
import { loginfoEndpoints } from '@shared/api/loginfoEndpoints/loginfoEndpoints';
import { GetLogInfoByIdResponse } from '@shared/api/loginfoEndpoints/types';
import { useLazyQuery } from '@shared/lib/queryHooks/useLazyQuery';
import { Button } from '@shared/ui/Button/ui/Button';
import { HStack } from '@shared/ui/HStack/HStack';
import { Input } from '@shared/ui/Input/Input';
import { PageWrapper } from '@shared/ui/PageWrapper/ui/PageWrapper';
import { Typography } from '@shared/ui/Typography';
import { VStack } from '@shared/ui/VStack/VStack';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Divider } from '@rneui/themed';
import { formatDate } from '@shared/lib/formatters/formatDate';
import { formatTime } from '@shared/lib/formatters/formatTime';
import { useStyles } from './styles';

function LogbookPage({ route, navigation }: NativeStackHeaderProps) {
  const styles = useStyles();
  const [editMode, setEditMode] = useState(false);
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
    <View style={styles.pageWrapper}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
      <View style={styles.text}>
      <Typography.Title size="4">
            {logState.title}
      </Typography.Title>
     <Button onPress={() => setEditMode((prev) => !prev)} shape="square" type="clear">
     <Icon size={32} name={editMode ? 'eye' : 'pencil'} />
     </Button>
      </View>

        </View>

        <Divider />

        <View>
          <View style={styles.text}>
            <Typography.Title size="5">
              Место погружения
            </Typography.Title>
            <Icon size={32} name="location" />
          </View>
          <View style={styles.mapBox} />
        </View>

        <View style={styles.dateWrapper}>
            <Icon size={24} name="calendar" />

              <Typography.Text>
                {formatDate({
                  date: logState.start_datetime,
                })}
              </Typography.Text>
       <View style={styles.text}>
        <Typography.Text>Начало:</Typography.Text>
       <Typography.Text>
              {formatTime({
                date: logState.start_datetime,
              })}
       </Typography.Text>
       </View>

          <View style={styles.text}>
          <Typography.Text>Конец:</Typography.Text>
          <Typography.Text>
            {formatTime({
                date: logState.end_datetime,
              })}
          </Typography.Text>
          </View>
            <FeatherIcon size={24} name="watch" />
        </View>

        <View style={styles.text}>
          <Typography.Title size="6">Глубина:</Typography.Title>
          <Typography.Text>
            {logState.depth}
          </Typography.Text>
        </View>

        <View>
          <Typography.Title size="5">Воздух</Typography.Title>

          <View style={styles.text}>
            <View style={styles.text}>
              <Typography.Text>В начале:</Typography.Text>
              <Typography.Caption>{logState.start_pressure}</Typography.Caption>
            </View>

            <View style={styles.text}>
              <Typography.Text>В конце</Typography.Text>
              <Typography.Caption>{logState.end_pressure}</Typography.Caption>
            </View>
          </View>
        </View>

        <View>
          {/* TODO Сделать слайдер с температурой воды */}
          {/* <Typography.Text>{`Прогресс с температурой ${logState.water_temperature}`}</Typography.Text> */}
          {/* TODO сделать иконки с силой волны */}
          {/* <Typography.Text>{`иконка с силой волны ${logState.vawe_power}`}</Typography.Text> */}
        </View>
        {/* TODO сделать друзей и соединить с таблицей юзеров */}
        {/* <View>
          <Typography.Text>Имя бади</Typography.Text>
        </View> */}
        {/* TODO сделать дайвинг центр */}
        {/* <View>
          <Typography.Text>Дайвинг центр</Typography.Text>
        </View> */}

        {/* TODO Сделать гидрик на бэке */}
        {/* <View>
          <Typography.Text>Плотность гидрика</Typography.Text>
          <ButtonGroup
            buttons={['Короткий', 'Длинный']}
            // selectedIndexes={selectedIndexes}
            containerStyle={{ marginBottom: 20 }}
          />
          <ButtonGroup
            buttons={['3мм', '5мм', '7мм']}
            // selectedIndexes={selectedIndexes}
            containerStyle={{ marginBottom: 20 }}
          />

          <ButtonGroup
            buttons={['Сухой', 'Мокрый']}
            // selectedIndexes={selectedIndexes}
            containerStyle={{ marginBottom: 20 }}
          />
        </View> */}

        {/* Сделать компонент с видимостью под водой */}

        {/* <View>
          <Typography.Title size="5">Видимость под водой</Typography.Title>
          <ButtonGroup
            buttons={['бед', 'гуд', 'греат']}
            // selectedIndexes={selectedIndexes}
            containerStyle={{ marginBottom: 20 }}
          />
          <Input placeholder="Метры" size="m" />
        </View> */}

        <View>
          <Typography.Title size="5">Заметки</Typography.Title>
          <Input placeholder="напишите чтобы не забыть" />
        </View>

        <View style={styles.photos}>
          <Typography.Title size="5">Фото</Typography.Title>
          <View style={styles.photoGalery} />
        </View>

      </ScrollView>
        <View style={styles.buttonSave}>
        <Button>Сохранить</Button>
        <Button>Сохранить черновик</Button>
        </View>
    </View>
  );
}

export { LogbookPage };
