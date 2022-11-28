import {
	Platform,
	StyleSheet
} from 'react-native';
import { Colors, Constants, Fonts } from '.';

export const globalStyles = StyleSheet.create({
	button: {
		height: 50,
		backgroundColor: Colors.BLACK,
		borderRadius: 15,
		justifyContent: "center", alignItems: "center",
		// marginHorizontal: 20,
		marginBottom: 15
	},
	buttonText: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 19,
		color: Colors.WHITE
	},
	view: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	buttonText2: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 12,
		color: Colors.WHITE,
	},

	TextInput: {
		height: 47,
		borderWidth: 1,
		borderRadius: 7,
		// borderColor: Colors.BORDER, 
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 20
	},
	Applybutton: {
		height: 50,
		width: Constants.SCREEN_WIDTH / 2.4,
		backgroundColor: Colors.BLACK,
		borderRadius: 13,
		justifyContent: "center", alignItems: "center",
		// marginHorizontal: 20,
		marginBottom: 15,
		marginHorizontal: 10
	},
	ApplybuttonText: {
		fontFamily: Fonts.MEDIUM,
		fontSize: 19,
		color: Colors.WHITE,
		marginTop: Platform.OS == "android" ? 3 : 0
	},
});