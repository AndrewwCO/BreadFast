import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { PRODUCTS } from '../models/Product';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Carlos</Text>
        </View>

        <TouchableOpacity style={styles.nextBatchBanner}>
          <Text style={styles.nextBatchLabel}>⏱ Next batch ready</Text>
          <Text style={styles.nextBatchTime}>10:30 AM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickReorderBtn}>
          <Text style={styles.quickReorderText}>🛒  Quick Reorder</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Available Now</Text>

        {PRODUCTS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          >
            <View style={styles.productIconBox}>
              <Text style={styles.productEmoji}>{item.emoji}</Text>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.productStatusRow}>
                <Text style={styles.statusDot}>⏰</Text>
                <Text style={styles.productStatus}>{item.status}</Text>
              </View>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBF5' },
  header: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 8 },
  greeting: { fontSize: 16, color: '#888' },
  userName: { fontSize: 26, fontWeight: '700', color: '#1A1A1A' },
  nextBatchBanner: {
    marginHorizontal: 20, marginTop: 12, backgroundColor: '#F97316',
    borderRadius: 16, padding: 16, shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3,
    shadowRadius: 8, elevation: 4,
  },
  nextBatchLabel: { color: '#FFE0C2', fontSize: 12, fontWeight: '500' },
  nextBatchTime: { color: '#fff', fontSize: 28, fontWeight: '800', marginTop: 2 },
  quickReorderBtn: {
    marginHorizontal: 20, marginTop: 12, backgroundColor: '#1A1A1A',
    borderRadius: 14, paddingVertical: 14, alignItems: 'center',
  },
  quickReorderText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  sectionTitle: {
    fontSize: 17, fontWeight: '600', color: '#1A1A1A',
    paddingHorizontal: 20, marginTop: 24, marginBottom: 12,
  },
  productCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
    marginHorizontal: 20, marginBottom: 10, borderRadius: 16, padding: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 2,
  },
  productIconBox: {
    width: 50, height: 50, borderRadius: 12, backgroundColor: '#FFF4E8',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  productEmoji: { fontSize: 24 },
  productInfo: { flex: 1 },
  productName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A' },
  productStatusRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  statusDot: { fontSize: 11, marginRight: 4 },
  productStatus: { fontSize: 12, color: '#888' },
  productPrice: { fontSize: 14, fontWeight: '700', color: '#1A1A1A', marginTop: 4 },
  addBtn: {
    width: 34, height: 34, borderRadius: 10, backgroundColor: '#F97316',
    alignItems: 'center', justifyContent: 'center', shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3,
    shadowRadius: 4, elevation: 3,
  },
  addBtnText: { color: '#fff', fontSize: 20, fontWeight: '600', lineHeight: 22 },
});