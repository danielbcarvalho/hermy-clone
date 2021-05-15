import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import walletIcon from '../icons/walletIcon.png';
import hideIcon from '../icons/hideIcon.png';
import voucherIcon from '../icons/voucherIcon.png';
import cardIcon from '../icons/cardIcon.png';
import rightIcon from '../icons/rightIcon.png';
import colors from '../styles/colors';

export function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.iconContainer}>
          <Image style={styles.walletIcon} source={walletIcon} />
        </View>
        <View>
          <Text style={styles.textDescription}>Saldo Hermy</Text>
          <Text style={styles.textValue}>R$ 400,00</Text>
        </View>
        <TouchableOpacity>
          <Image source={hideIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContent}>
        <TouchableOpacity style={styles.middleButton}>
          <Image source={voucherIcon} style={styles.middleIcon} />
          <Text style={styles.textDescription}>Gerar voucher</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}>
          <Image source={cardIcon} style={styles.middleIcon} />
          <Text style={styles.textDescription}>Validar cartão</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.footerContent}>
        <Text style={styles.textDescription}>Meios de pagamento </Text>
        <Image source={rightIcon} style={styles.rightIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignContent: 'center',
    justifyContent: 'space-between',
    height: 245,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  walletIcon: {
    width: 22,
    height: 22,
  },
  textDescription: {
    color: colors.gray_text,
    fontSize: 17,
  },
  textValue: {
    color: colors.gray_dark,
    fontWeight: 'bold',
    fontSize: 28,
  },
  middleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleIcon: {
    marginRight: 15,
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  rightIcon: {
    marginLeft: 15,
  },
});
