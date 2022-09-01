import * as React from "react";
import { Text, View, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from "../assets/data/categorieData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";

Feather.loadFont();

export default Home = () => {
    const renderCategoryItem = ({ item }) => {
        return (
            <View style={[styles.categoryItemWrapper,
            { backgroundColor: item.selected ? colors.primary : colors.white
             },
             ]}>
                <Image source={item.image} style={styles.categoryItemImage} />
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categoryItemSelectedWrapper,
                {
                    backgroundColor: item.selected ? colors.white : colors.price,
                }
                ]}>
                    <Feather name="chevron-right" size={10} color={item.selected ? colors.textDark : colors.white} style={styles.categoryItemSelectedIcon} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>

            {/* titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <TextInput style={styles.searchInput} placeholder="Search..." />
            </View>

            {/* categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoryListWrapper}>
                    <FlatList
                        data={categoriesData}
                        renderItem={renderCategoryItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontSize: 16,
        color: colors.textDark,
        fontFamily: 'Montserrat-Regular',
    },
    titlesTitle: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20,
    },

    searchInput: {
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.textLight,
        fontFamily: 'Montserrat-Regular',
        color: colors.textDark,
    },
    categoriesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    categoriesTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark,
    },
    categoryListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    
    },
    categoryItemWrapper: {
        backgroundColor: colors.primary,
        marginRight: 20,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    categoryItemImage: {
        width: 60,
        height: 60,
    },
    categoryItemTitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        marginTop: 10,

    },
    categoryItemSelectedWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,

    },
    categoryItemSelectedIcon: {

    },
});