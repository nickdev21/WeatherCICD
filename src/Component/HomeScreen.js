import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Image,
  Animated,
} from 'react-native';
import AreaCard from '../../components/AreaCard/AreaACard';
import Card from '../../components/Card/Card';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import InformationModal from '../../components/InformationModal/InformationModal';
import Offer from '../../components/Offer/Offer';
import QuickFilter from '../../components/QuickFilter/QuickFilter';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import RestaurantByArea from '../../components/RestaurantByArea/RestaurantByArea';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import Search from '../../components/Search/Search';
import {quickLink} from '../../Dummy/Dummy';
import {Colors, Constants, Fonts, ScreenNames, Server} from '../../global';
import HomeHeader from './HomeHeader';
import {styles} from './HomeStyle';
import NearMeSvg from '../../assets/svg/NearMe.svg';
import {connect} from 'react-redux';
import {PERMISSIONS, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const {width, height} = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const HomeScreen = ({userId, toggleModal, isSignedIn}) => {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  //Variables

  //States
  const [
    isInformationModalVisible,
    setIsInformationModalVisible,
  ] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const [featuredRestaurant, setFeaturedRestaurant] = React.useState(null);
  const [allCuisine, setAllCuisine] = React.useState(null);
  const [recommendations, setRecommendations] = React.useState(null);
  const [coolAreas, setCoolAreas] = React.useState(null);
  const [nearByRestaurants, setNearByRestaurants] = React.useState(null);
  const [bookingsNotReviewed, setBookingsNotReviewed] = React.useState(null);
  const [ads, setAds] = React.useState(null);

  const [refreshing, setRefreshing] = React.useState(false);
  //Refs

  //Functions

  const toggleIsInformationModalVisible = () => {
    setIsInformationModalVisible(!isInformationModalVisible);
  };
  const renderItemOffer = ({item, index}) => {
    return <Offer item={item} />;
  };

  const goToMaps = () => {
    navigation.navigate(ScreenNames.FIND_RESTAURANT_MAP);
  };

  const getFeaturedRestaurant = async () => {
    // console.warn("fire");
    try {
      const response = await axios.get(
        `${Server.BASE_URL}/${Server.END_POINT.FEATURED_RESTAURANT}`,
      );
      setFeaturedRestaurant(response.data.featuredRestaurants);
    } catch (error) {
      console.warn('errror', error.message);
    }
  };

  const getRecommendation = async () => {
    const response = await axios.get(
      `${Server.BASE_URL}/${Server.END_POINT.RECOMMENDATION}`,
    );
    setRecommendations(response.data.data);
  };

  const getCoolAreas = async () => {
    const response = await axios.get(
      `${Server.BASE_URL}/${Server.END_POINT.COOL_AREAS}`,
    );
    setCoolAreas(response.data.data);
  };

  const getRestaurantsNearBy = async () => {
    Geolocation.getCurrentPosition(
      async ({coords}) => {
        const longitude = coords.longitude;
        const latitude = coords.latitude;
        const altitude = coords.altitude;
        const response = await axios.post(
          `${Server.BASE_URL}/${Server.END_POINT.NEAR_BY_RESTAURANT}`,
          {
            latitude: latitude,
            longitude: longitude,
            maxHeight: 100,
          },
        );
        setNearByRestaurants(response.data.data);
      },
      (err) => {
        // if (isMounted.current == true) {
        //     setLoading(false);
        // }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };
  const requestPermission = async () => {
    const isAndroid = Platform.OS == 'android';

    if (isAndroid) {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      // console.log("result", result);
      if (result) {
        getRestaurantsNearBy();
      } else {
        const isGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (isGranted == PermissionsAndroid.RESULTS.GRANTED) {
          ToastAndroid.show('User Granted Permission', ToastAndroid.SHORT);
          getRestaurantsNearBy();
        }
      }
    } else {
      await request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
        console.log('LOCATION_ALWAYS', result);
        if (result == 'granted') {
          getRestaurantsNearBy();
        }
      });
    }
  };

  const getAllBookingsNotReviewed = async () => {
    try {
      let postData = {
        userId: userId,
        status: 'CHECK-OUT',
      };
      const response = await axios.post(
        `${Server.BASE_URL}/${Server.END_POINT.BOOKINGS_STATUS}`,
        postData,
      );
      if (response.data.message != 'No Bookings') {
        if (typeof response.data.data != 'undefined') {
          console.warn(response.data.data.length);
          setBookingsNotReviewed(response.data.data);
        }
      }
    } catch (error) {
      console.warn(error.message);
      setBookingsNotReviewed([]);
    }
  };

  const getAllCusine = async () => {
    let response = null;
    response = await axios.get(
      `${Server.BASE_URL}/${Server.END_POINT.ALL_CUISINE}`,
    );
    setAllCuisine(response.data.data);
  };

  const getAds = async () => {
    const response = await axios.get(
      `${Server.BASE_URL}/${Server.END_POINT.ADS}`,
    );
    setAds(response.data.data);
  };
  //UseEffect
  React.useEffect(() => {
    // toggleIsInformationModalVisible()
    getAllCusine();
    getFeaturedRestaurant();
    getRecommendation();
    getCoolAreas();
    requestPermission();
    getAds();
    if (isSignedIn) {
      getAllBookingsNotReviewed();
    }
  }, []);

  React.useEffect(() => {
    if (toggleModal) {
      toggleIsInformationModalVisible();
    }
  }, [toggleModal]);

  const [indicatorIndex, setIndicatorIndex] = React.useState(0);

  const _onMomentumScrollEnd = ({nativeEvent}) => {
    const index = Math.round(
      nativeEvent.contentOffset.x / Constants.SCREEN_WIDTH,
    );
    setIndicatorIndex(index);
  };

  const renderCard = (item, index) => (
    <Card
      item={item}
      index={index}
      getAllBookingsNotReviewed={getAllBookingsNotReviewed}
    />
  );

  const seeAll = () => {
    navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, {id: null});
  };
  //UI
  return (
    <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <FocusAwareStatusBar isLightBar isTopSpace={false} />
      <ScrollView
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} />}>
        <HomeHeader />
        <View style={{marginHorizontal: 20}}>
          <Search placeHolder={'Search'} inputText={false} />
        </View>
        <View style={{flex: 1}}>
          <View>
            <View style={{margin: 0, height: 'auto'}}>
              <View style={{marginHorizontal: 20}}>
                <Text style={styles.quickLink}>Cuisine</Text>
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={allCuisine}
                contentContainerStyle={{paddingHorizontal: 10}}
                horizontal
                keyExtractor={(item, idx) => `${item._id}-cuisine`}
                renderItem={({item, idx}) => {
                  return (
                    <View key={idx} style={styles.bubbleContainer}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: encodeURI(item.cuisineImage)}}
                          id={idx}
                          style={{
                            height: 74,
                            width: 74,
                            margin: 12,
                            borderRadius: 74 / 2,
                          }}
                        />
                        <Text style={{fontSize: 14, fontWeight: '700'}}>
                          {item.cuisineName}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{marginVertical: 10}}>
              {featuredRestaurant && featuredRestaurant.length > 0 && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginVertical: 15,
                  }}>
                  <View>
                    <Text style={styles.quickLink}>Featured Restaurants</Text>
                    <Text style={styles.font1}>
                      Restaurant Features you may be interested in..
                    </Text>
                  </View>
                  <TouchableOpacity onPress={seeAll} style={styles.seeAllStyle}>
                    <Text style={styles.font2}>See All</Text>
                  </TouchableOpacity>
                </View>
              )}
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={featuredRestaurant}
                style={{marginVertical: 10}}
                extraData={featuredRestaurant}
                contentContainerStyle={{paddingHorizontal: 10}}
                horizontal
                bounces={false}
                pagingEnabled
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                scrollEventThrottle={16}
                keyExtractor={(item, idx) => `${idx}-restaurant`}
                renderItem={({item, index}) => {
                  const inputRange = [
                    (index - 2) * ITEM_SIZE,
                    (index - 1) * ITEM_SIZE,
                    index * ITEM_SIZE,
                  ];

                  const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0, 0],
                    extrapolate: 'clamp',
                  });
                  return (
                    <Animated.View
                      style={{
                        shadowColor: 'rgb(0, 0, 0)',
                        shadowOffset: {
                          width: 3,
                          height: 3,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        elevation: 2,
                        backgroundColor: 'white',
                        marginVertical: 10,
                        marginHorizontal: 5,
                        borderRadius: 12,
                        height: 'auto',
                        transform: [{translateY}],
                      }}>
                      <RestaurantCard
                        // restaurant_id={item._id}
                        cuisineNames={item.cuisineNames.join(' | ')}
                        // navigation={navigation}
                        // coverImage={item.restaurant_images[0]}
                        // rating={item.current_rating}
                        // // likeStatus={item.likeStatus}
                        // likeStatus={false}
                        // restaurantName={item.restaurant_name}
                        // restaurantLocality={item.address}
                        // restaurantType={item.cuisines}
                        item={item}
                      />
                    </Animated.View>
                  );
                }}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false},
                )}
              />
            </View>

            <View style={{marginHorizontal: 10}}>
              {ads && (
                <FlatList
                  horizontal
                  contentContainerStyle={{paddingHorizontal: 10}}
                  data={ads}
                  showsHorizontalScrollIndicator={false}
                  renderItem={renderItemOffer}
                />
              )}
            </View>

            {recommendations && recommendations.length > 0 && (
              <View
                style={{justifyContent: 'space-between', marginHorizontal: 10}}>
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                    flexDirection: 'row',
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.quickLink}>Recommendations</Text>
                    <Text style={styles.font1}>
                      Some of the best recommendations for you !
                    </Text>
                  </View>
                  <TouchableOpacity onPress={seeAll} style={styles.seeAllStyle}>
                    <Text style={styles.font2}>See All</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={recommendations}
                  horizontal
                  contentContainerStyle={{}}
                  keyExtractor={(item, idx) => `${idx}-restaurant`}
                  renderItem={({item, idx}) => {
                    return <RecommendCard item={item} />;
                  }}
                />
              </View>
            )}

            {coolAreas && coolAreas.length > 0 && (
              <View style={{marginHorizontal: 0, marginVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.quickLink}>Cool Areas</Text>
                    <Text style={styles.font1}>
                      Some cool areas for dining out !
                    </Text>
                  </View>
                  <TouchableOpacity onPress={seeAll} style={styles.seeAllStyle}>
                    <Text style={styles.font2}>See All</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={coolAreas}
                  extraData={coolAreas}
                  contentContainerStyle={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}
                  horizontal
                  keyExtractor={(item, idx) => `${item.name}-restaurant`}
                  renderItem={({item, index}) => {
                    return <AreaCard item={item} index={index} />;
                  }}
                />
              </View>
            )}

            {nearByRestaurants && nearByRestaurants.length > 0 && (
              <View style={{marginHorizontal: 0, marginVertical: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  }}>
                  <View style={{flex: 1}}>
                    <Text style={styles.quickLink}>Restaurants by Area</Text>
                    <Text style={styles.font1}>
                      Trending Restaurants near you !
                    </Text>
                  </View>
                  <TouchableOpacity onPress={seeAll} style={styles.seeAllStyle}>
                    <Text style={styles.font2}>See All</Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={nearByRestaurants}
                  contentContainerStyle={{
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                  }}
                  horizontal
                  keyExtractor={(item, idx) => `${idx}-restaurant`}
                  renderItem={({item, idx}) => {
                    return <RestaurantByArea item={item} />;
                  }}
                />

                {/* <FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{ marginHorizontal: 20 }} data={[1, 2, 4]}
									renderItem={renderCard} /> */}
              </View>
            )}
          </View>
        </View>
        <InformationModal
          toggleIsInformationModalVisible={toggleIsInformationModalVisible}
          isInformationModalVisible={isInformationModalVisible}
        />
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          alignItems: 'center',
          bottom: 15,
        }}>
        <TouchableOpacity
          onPress={goToMaps}
          style={{
            backgroundColor: Colors.WHITE,
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            borderRadius: 30,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              fontFamily: Fonts.MEDIUM,
              marginRight: 5,
              fontSize: 16,
              marginBottom: -4,
            }}>
            Near me
          </Text>
          <NearMeSvg />
        </TouchableOpacity>
        {bookingsNotReviewed && bookingsNotReviewed.length > 0 && (
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={_onMomentumScrollEnd}
            contentContainerStyle={{alignItems: 'center'}}>
            {bookingsNotReviewed.map(renderCard)}
          </ScrollView>
        )}
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  userId: state.user.userId,
  toggleModal: state.user.toggleModal,
});

export default connect(mapStateToProps, null)(HomeScreen);
