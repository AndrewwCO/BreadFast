import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const PICKUP_TIMES = [
  { time: '10:30', available: true },
  { time: '11:30', available: true },
  { time: '13:00', available: true },
];

export default function ProductDetailScreen({ navigation, route }) {
  const product = route?.params?.product || {
    name: 'French Baguette',
    price: '€2.80',
    emoji: '🥖',
    description: 'Traditional French baguette with a golden, crispy crust and soft, airy interior.',
  };

  const [quantity, setQuantity] = useState(2);
  const [selectedTime, setSelectedTime] = useState('10:30');

  const basePrice = parseFloat(product.price.replace('€', ''));
  const total = (basePrice * quantity).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backIcon}>‹</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero image area */}
        <View style={styles.heroSection}>
          <Text style={styles.heroEmoji}>{product.emoji}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.description}>
            {product.description || 'Freshly baked with the finest ingredients.'}
          </Text>

          <Text style={styles.price}>{product.price}</Text>

          {/* Quantity */}
          <Text style={styles.sectionLabel}>Quantity</Text>
          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{quantity}</Text>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Pickup time */}
          <Text style={styles.sectionLabel}>Pickup Time</Text>
          <View style={styles.timeRow}>
            {PICKUP_TIMES.map((slot) => (
              <TouchableOpacity
                key={slot.time}
                style={[
                  styles.timeSlot,
                  selectedTime === slot.time && styles.timeSlotActive,
                ]}
                onPress={() => setSelectedTime(slot.time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === slot.time && styles.timeTextActive,
                  ]}
                >
                  {slot.time}
                </Text>
                <Text
                  style={[
                    styles.availableText,
                    selectedTime === slot.time && styles.availableTextActive,
                  ]}
                >
                  Available
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.addToCartBtn}
          onPress={() => navigation.navigate('Cart')}
        >
          <Text style={styles.addToCartText}>🛒  Add to Cart - €{total}</Text>
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
  backBtn: {
    position: 'absolute',
    top: 52,
    left: 16,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  backIcon: {
    fontSize: 24,
    color: '#1A1A1A',
    lineHeight: 28,
  },
  heroSection: {
    backgroundColor: '#FFF4E8',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  heroEmoji: {
    fontSize: 100,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 100,
  },
  productName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    color: '#888',
    lineHeight: 21,
    marginTop: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F97316',
    marginTop: 12,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
    marginTop: 24,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  qtyBtn: {
    width: 38,
    height: 38,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  qtyBtnText: {
    fontSize: 20,
    color: '#1A1A1A',
    lineHeight: 24,
  },
  qtyValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    minWidth: 24,
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    gap: 10,
  },
  timeSlot: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
  },
  timeSlotActive: {
    backgroundColor: '#F97316',
    borderColor: '#F97316',
  },
  timeText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  timeTextActive: {
    color: '#fff',
  },
  availableText: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  availableTextActive: {
    color: '#FFE0C2',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 32,
    backgroundColor: '#FFFBF5',
  },
  addToCartBtn: {
    backgroundColor: '#F97316',
    borderRadius: 16,
    paddingVertical: 17,
    alignItems: 'center',
    shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
