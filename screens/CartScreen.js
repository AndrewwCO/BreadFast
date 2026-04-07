import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  SafeAreaView, ScrollView,
} from 'react-native';
import { INITIAL_CART_ITEMS } from '../models/Cart';
import { updateQuantity, removeItem, getTotal } from '../services/CartService';

export default function CartScreen({ navigation }) {
  const [items, setItems] = useState(INITIAL_CART_ITEMS);

  const handleUpdateQty = (id, delta) => {
    setItems(prev => updateQuantity(prev, id, delta));
  };

  const handleRemove = (id) => {
    setItems(prev => removeItem(prev, id));
  };

  const total = getTotal(items);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.itemIconBox}>
              <Text style={styles.itemEmoji}>{item.emoji}</Text>
            </View>
            <View style={styles.itemInfo}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleRemove(item.id)}>
                  <Text style={styles.removeBtn}>✕</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemPrice}>€{(item.price * item.qty).toFixed(2)}</Text>
              <View style={styles.qtyRow}>
                <TouchableOpacity style={styles.qtyBtn} onPress={() => handleUpdateQty(item.id, -1)}>
                  <Text style={styles.qtyBtnText}>−</Text>
                </TouchableOpacity>
                <Text style={styles.qtyValue}>{item.qty}</Text>
                <TouchableOpacity style={styles.qtyBtnActive} onPress={() => handleUpdateQty(item.id, 1)}>
                  <Text style={styles.qtyBtnActiveText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.pickupCard}>
          <Text style={styles.pickupIcon}>⏰</Text>
          <View>
            <Text style={styles.pickupLabel}>Pickup Time</Text>
            <Text style={styles.pickupValue}>Today, 10:30 AM</Text>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>€{total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('OrderConfirmed')}
        >
          <Text style={styles.checkoutText}>💳  Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBF5' },
  header: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 16,
  },
  backBtn: {
    width: 36, height: 36, borderRadius: 10, backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center', shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08,
    shadowRadius: 4, elevation: 2,
  },
  backIcon: { fontSize: 24, color: '#1A1A1A', lineHeight: 28 },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1A1A1A' },
  scroll: { paddingHorizontal: 20 },
  cartItem: {
    flexDirection: 'row', backgroundColor: '#fff', borderRadius: 16,
    padding: 14, marginBottom: 12, shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05,
    shadowRadius: 6, elevation: 2,
  },
  itemIconBox: {
    width: 52, height: 52, borderRadius: 12, backgroundColor: '#FFF4E8',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  itemEmoji: { fontSize: 26 },
  itemInfo: { flex: 1 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  itemName: { fontSize: 15, fontWeight: '600', color: '#1A1A1A', flex: 1 },
  removeBtn: { fontSize: 14, color: '#aaa', paddingLeft: 8 },
  itemPrice: { fontSize: 14, fontWeight: '700', color: '#1A1A1A', marginTop: 2 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8, gap: 12 },
  qtyBtn: {
    width: 32, height: 32, borderRadius: 8, borderWidth: 1.5,
    borderColor: '#E5E5E5', alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#fff',
  },
  qtyBtnText: { fontSize: 18, color: '#1A1A1A', lineHeight: 22 },
  qtyBtnActive: {
    width: 32, height: 32, borderRadius: 8, backgroundColor: '#F97316',
    alignItems: 'center', justifyContent: 'center',
  },
  qtyBtnActiveText: { fontSize: 18, color: '#fff', fontWeight: '600', lineHeight: 22 },
  qtyValue: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', minWidth: 20, textAlign: 'center' },
  pickupCard: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF4E8',
    borderRadius: 14, padding: 16, gap: 12, marginTop: 4,
  },
  pickupIcon: { fontSize: 22 },
  pickupLabel: { fontSize: 12, color: '#888', fontWeight: '500' },
  pickupValue: { fontSize: 15, fontWeight: '700', color: '#1A1A1A', marginTop: 2 },
  footer: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#FFFBF5', paddingHorizontal: 20,
    paddingBottom: 32, paddingTop: 12,
    borderTopWidth: 1, borderTopColor: '#F0EDE8',
  },
  totalRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  totalLabel: { fontSize: 16, fontWeight: '600', color: '#888' },
  totalValue: { fontSize: 22, fontWeight: '800', color: '#1A1A1A' },
  checkoutBtn: {
    backgroundColor: '#F97316', borderRadius: 16, paddingVertical: 17,
    alignItems: 'center', shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.35,
    shadowRadius: 12, elevation: 6,
  },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});