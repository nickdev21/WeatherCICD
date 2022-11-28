import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        GetFCMToken();
    }
}


//  function GetFCMToken() {
const GetFCMToken = async () => {

    let fcmtoken = await AsyncStorage.getItem("fcmtoken")
    console.log(fcmtoken, "OLD FCM TOKEN");
    if (!fcmtoken) {
        try {
            let fcmtoken = await messaging().getToken()
            if (fcmtoken) {
                console.log(fcmtoken, "NEW FCM TOKEN");
                await AsyncStorage.setItem("fcmtoken", fcmtoken)
            }
        } catch (error) {
            console.log(error, "ERROR IN GETTING THE FCM TOKEN");
        }
    }

} 

export const NotificationListner = () => {
     // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });

      messaging().onMessage(async remoteMessage => {
          console.log("Notification On Foreground....", remoteMessage);
      })

      
    // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
}