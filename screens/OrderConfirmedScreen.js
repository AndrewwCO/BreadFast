import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Simple QR code visual (grid pattern)
function QRCodePlaceholder() {
  return (
    <View style={qrStyles.container}>
      {/* Mimics a QR code pattern */}
      <View style={qrStyles.grid}>
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => {
            const isCorner =
              (row < 3 && col < 3) ||
              (row < 3 && col > 5) ||
              (row > 5 && col < 3);
            const isRandom = Math.sin(row * 7 + col * 13) > 0.1;
            const filled = isCorner || isRandom;
            return (
              <View
                key={`${row}-${col}`}
                style={[qrStyles.cell, filled ? qrStyles.filled : qrStyles.empty]}
              />
            );
          })
        )}
      </View>
    </View>
  );
}

const qrStyles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    borderColor: '#1A1A1A',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: '11.11%',
    aspectRatio: 1,
  },
  filled: {
    backgroundColor: '#1A1A1A',
  },
  empty: {
    backgroundColor: '#fff',
  },
});

export default function OrderConfirmedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success icon */}
        <View style={styles.successCircle}>
          <Text style={styles.checkmark}>✓</Text>
        </View>

        <Text style={styles.title}>Order Confirmed!</Text>
        <Text style={styles.subtitle}>Show this QR code at pickup</Text>

        <QRCodePlaceholder />

        {/* Order details */}
        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Order Number</Text>
            <Text style={styles.detailValue}>#BF-2845</Text>
          </View>

          <View style={[styles.detailRow, styles.pickupRow]}>
            <View>
              <Text style={styles.detailLabel}>Pickup Time</Text>
              <Text style={styles.pickupValue}>Today, 10:30 AM</Text>
            </View>
          </View>

          <View style={[styles.detailRow, styles.statusRow]}>
            <View>
              <Text style={styles.detailLabel}>Status</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>In Preparation</Text>
                <Text style={styles.statusEmoji}>👨‍🍳</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.doneBtn}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.doneBtnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  successCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#22C55E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  checkmark: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
    marginBottom: 24,
  },
  detailsCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    marginTop: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  detailRow: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  detailLabel: {
    fontSize: 11,
    color: '#aaa',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    paddingBottom: 8,
  },
  pickupRow: {
    backgroundColor: '#F97316',
    borderRadius: 14,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  pickupValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    paddingBottom: 8,
  },
  statusRow: {
    backgroundColor: '#22C55E',
    borderRadius: 14,
    marginBottom: 4,
    marginHorizontal: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  statusEmoji: {
    fontSize: 24,
  },
  doneBtn: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#fff',
  },
  doneBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
});
