import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    logoImage: {
        height:150,
        width:150,
        alignSelf:"center",
        marginTop:50,
    },
    title: {
        fontSize:21,
        textAlign:"center",
        paddingTop:10,
        fontWeight:"bold",
    },
    subTitle: {
        fontSize:17,
        textAlign:"center",
    },
    form:{
        paddingTop:10,
    },
    createSection:{
        flexDirection:"row",
    },
    infoText:{

    },
    linkBtn:{
        paddingLeft:10,
        color:colors.primary,
    },
    error: {
        color:colors.danger,
    },
});
