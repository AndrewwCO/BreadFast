import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const ACCOUNT_ITEMS = [
  { id: 'orders', icon: '📦', label: 'Order History' },
  { id: 'payment', icon: '💳', label: 'Payment Methods' },
  { id: 'personal', icon: '👤', label: 'Personal Info' },
];

const SETTINGS_ITEMS = [
  { id: 'notifications', icon: '🔔', label: 'Notifications' },
  { id: 'help', icon: '💬', label: 'Help & Support' },
];

function MenuRow({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.menuRow} onPress={onPress}>
      <View style={styles.menuIconBox}>
        <Text style={styles.menuIcon}>{icon}</Text>
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Text style={styles.menuArrow}>›</Text>
    </TouchableOpacity>
  );
}

export default function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Profile</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* User card */}
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Carlos Gómez</Text>
            <Text style={styles.userEmail}>carlos.gomez@email.com</Text>
          </View>
          <Text style={styles.userCardArrow}>›</Text>
        </TouchableOpacity>

        {/* Account section */}
        <Text style={styles.sectionTitle}>ACCOUNT</Text>
        <View style={styles.menuCard}>
          {ACCOUNT_ITEMS.map((item, index) => (
            <View key={item.id}>
              <MenuRow icon={item.icon} label={item.label} />
              {index < ACCOUNT_ITEMS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Settings section */}
        <Text style={styles.sectionTitle}>SETTINGS</Text>
        <View style={styles.menuCard}>
          {SETTINGS_ITEMS.map((item, index) => (
            <View key={item.id}>
              <MenuRow icon={item.icon} label={item.label} />
              {index < SETTINGS_ITEMS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBF5',
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F97316',
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#F97316',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarEmoji: {
    fontSize: 22,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  userEmail: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 2,
  },
  userCardArrow: {
    fontSize: 22,
    color: 'rgba(255,255,255,0.7)',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#aaa',
    letterSpacing: 1,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  menuCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 18,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  menuIconBox: {
    width: 34,
    height: 34,
    borderRadius: 9,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuIcon: {
    fontSize: 17,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  menuArrow: {
    fontSize: 20,
    color: '#ccc',
  },
  divider: {
    height: 1,
    backgroundColor: '#F5F5F5',
    marginLeft: 62,
  },
  logoutBtn: {
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#FFD0D0',
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
});
