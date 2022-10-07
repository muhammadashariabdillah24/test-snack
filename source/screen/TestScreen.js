import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import consumeApiDummy from '../service/testApi';
import {styles} from '../styles/TestStyle';
import {COLOR} from '../theme/Color';
import FoodCard from '../components/FoodCard';

const TestScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [moreLoading, setMoreLoading] = useState(false);
  const [isListFoodEnd, setIsListFoodEnd] = useState(false);
  const [data, setData] = useState([]);

  const getDataDummy = async () => {
    try {
      // set to true if do fetching data from server
      setIsLoading(true);

      // fetching data from server
      const data = await consumeApiDummy(page);

      // set to false if done fetching data from server
      setIsLoading(false);

      console.log('DATA : ' + JSON.stringify(data));

      // if status not equal to 200 then return null
      if (data.status !== 200) {
        return null;
      }

      if (data.data.data.length > 0) {
        setIsListFoodEnd(false);
        setMoreLoading(true);
        setData(data.data.data);
      } else {
        setIsListFoodEnd(true);
        setMoreLoading(false);
      }
    } catch (error) {
      setIsListFoodEnd(false);
      setMoreLoading(false);
    }
  };

  useEffect(() => {
    getDataDummy();
  }, [page]);

  // render component

  const renderFooter = () => (
    <View style={[styles.columnCenter, {marginVertical: 15}]}>
      {moreLoading && <ActivityIndicator />}
      {isListFoodEnd && (
        <Text style={[styles.textSmall, {color: COLOR.black05}]}>
          Opps, list makanan sudah tidak ada lagi
        </Text>
      )}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.columnCenter}>
      <Text style={[styles.textMedium, {color: COLOR.black01}]}>
        Tidak ada data
      </Text>
      <TouchableOpacity
        onPress={getDataDummy}
        style={[styles.button, styles.rowCenter, {marginTop: 20}]}>
        <Text style={[styles.textSmall, {color: COLOR.white}]}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );

  const handleLoadMore = () => {
    if (moreLoading && !isListFoodEnd) {
      setPage(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {isLoading ? (
          <View style={[styles.columnCenter, {alignSelf: 'center'}]}>
            <ActivityIndicator size="large" color={COLOR.blue} />
          </View>
        ) : (
          <FlatList
            onScrollBeginDrag={e => console.log(e)}
            contentContainerStyle={{flexGrow: 1}}
            data={data}
            renderItem={({item}) => <FoodCard foods={item} />}
            onEndReachedThreshold={0.5}
            onEndReached={handleLoadMore}
            ListEmptyComponent={renderEmpty}
            ListFooterComponent={renderFooter}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default TestScreen;
