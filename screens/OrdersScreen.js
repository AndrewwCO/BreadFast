import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ORDERS = [
  { id: '#BF-2845', date: 'Today, 10:30 AM', total: '€10.10', status: 'In Preparation', statusColor: '#22C55E' },
  { id: '#BF-2831', date: 'Yesterday, 9:00 AM', total: '€5.60', status: 'Completed', statusColor: '#888' },
  { id: '#BF-2820', date: 'Mar 8, 8:30 AM', total: '€7.30', status: 'Completed', statusColor: '#888' },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Orders</Text>
      {ORDERS.map(order => (
        <View key={order.id} style={styles.orderCard}>
          <View style={styles.orderHeader}>
            <Text style={styles.orderId}>{order.id}</Text>
            <View style={[styles.statusBadge, { backgroundColor: order.statusColor + '20' }]}>
              <Text style={[styles.statusText, { color: order.statusColor }]}>{order.status}</Text>
            </View>
          </View>
          <View style={styles.orderFooter}>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderTotal}>{order.total}</Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    paddingTop: 16,
    paddingBottom: 16,
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderId: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  statusBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDate: {
    fontSize: 13,
    color: '#888',
  },
  orderTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
