import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { scaleFont, verticalScale, scale, colors, constants } from "../../utils";
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const PrivacyPolicy = (props) => {
    const theme = useSelector(state => state.theme)

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background_primary }}>
            <StatusBar barStyle={"light-content"} backgroundColor={'transparent'} hidden={false} translucent={true}
            />

            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={[colors.secondary_blue, colors.primary_blue]}
                style={{ width: scale(365), height: verticalScale(80), alignSelf: 'center', }}>
                <View style={{ alignSelf: 'center', width: scale(365), marginTop: verticalScale(40), flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity style={{ width: scale(130), paddingHorizontal: scale(20), }} onPress={() => { props.navigation.goBack() }} >
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={verticalScale(26)}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: constants.OPENSANS_FONT_SEMI_BOLD, fontSize: scaleFont(18), color: colors.white }}>Privacy Policy</Text>
                </View>
            </LinearGradient>


            <View style={{ justifyContent: 'center', width: scale(320), alignSelf: 'center', flex: 1, }}>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>

                    <View style={{ alignSelf: 'center', paddingVertical: verticalScale(40) }}>
                        <FontAwesome5
                            name="trophy"
                            size={verticalScale(120)}
                            color={colors.primary_blue}
                        />
                    </View>

                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, textAlign: "justify" }}>
                        Score Kings Privacy Policy
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, textAlign: "justify" }}>
                        Last Updated: 06/30/2024
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        1. Information We Collect
                        a) Personal Information:
                        - Name
                        - Email address
                        - Date of birth
                        - Location data
                        - Payment information

                        b) Non-Personal Information:
                        - Device information
                        - Usage data
                        - IP address

                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        2. How We Use Your Information

                        We use your information to:
                        - Provide and maintain our service
                        - Notify you about changes to our service
                        - Allow you to participate in interactive features of our app
                        - Provide customer support
                        - Gather analysis or valuable information to improve our service
                        - Monitor the usage of our service
                        - Detect, prevent and address technical issues
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        3. Data Retention

                        We will retain your Personal Information only for as long as is necessary for the purposes set out in this Privacy Policy.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        4. Data Transfer

                        Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        5. Disclosure of Data

                        We may disclose your Personal Information in the good faith belief that such action is necessary to:
                        - Comply with a legal obligation
                        - Protect and defend the rights or property of Score Kings
                        - Prevent or investigate possible wrongdoing in connection with the Service
                        - Protect the personal safety of users of the Service or the public
                        - Protect against legal liability
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        6. Security of Data

                        The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        7. Your Data Protection Rights

                        Depending on your location, you may have certain data protection rights. Score Kings aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        8. Children's Privacy

                        Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        9. Changes to This Privacy Policy

                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        10. Third-Party Services

                        Our app may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        11. Analytics

                        We may use third-party Service Providers to monitor and analyze the use of our Service.
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        12. Payments

                        We may provide paid products and/or services within the Service. In that case, we use third-party services for payment processing (e.g. payment processors).
                    </Text>
                    <Text style={{ color: colors.text_primary, fontSize: scaleFont(14), fontFamily: constants.OPENSANS_FONT_MEDIUM, marginTop: verticalScale(10), textAlign: "justify" }}>
                        13. Contact Us

                        If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].
                    </Text>
                </ScrollView>
            </View>

        </View>
    );
}

export default PrivacyPolicy;