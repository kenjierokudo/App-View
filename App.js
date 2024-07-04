import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, SafeAreaView, Alert, ImageBackground } from 'react-native';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [itemCounts, setItemCounts] = useState({});

  const collections = [
    {
      id: '1',
      name: 'Naruto Uzumak  i',
      items: '13K',
      owners: '100K',
      imageUrl: 'https://i.pinimg.com/736x/70/81/f5/7081f568c291de3e029c850ff6d01c44.jpg',
      backgroundUrl: 'https://i.pinimg.com/736x/70/81/f5/7081f568c291de3e029c850ff6d01c44.jpg'
    },
    {
      id: '2',
      name: 'Nakano Miku',
      items: '12K',
      owners: '5.34K',
      imageUrl: 'https://i.pinimg.com/564x/68/00/7f/68007f6c614af84b5773f76124b50520.jpg',
      backgroundUrl: 'https://i.pinimg.com/564x/5e/a8/72/5ea87293beed7d1445a47bd924f397c6.jpg'
    },
    {
      id: '3',
      name: 'Goku',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/236x/7b/b1/a3/7bb1a3a6a6ecef6daa3a67056e8679e5.jpg',
      backgroundUrl: 'https://i.pinimg.com/236x/7b/b1/a3/7bb1a3a6a6ecef6daa3a67056e8679e5.jpg'
    },
    {
      id: '4',
      name: 'Tanjiro Kamado',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/236x/4f/62/d2/4f62d2bc39cb6092fe4dedb978c285c5.jpg',
      backgroundUrl: 'https://i.pinimg.com/236x/4f/62/d2/4f62d2bc39cb6092fe4dedb978c285c5.jpg'
    },
    {
      id: '5',
      name: 'Ayano kKouji',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/564x/a0/eb/4b/a0eb4b54f9cc06ac83d8d251f6c3bb2b.jpg',
      backgroundUrl: 'https://i.pinimg.com/564x/a0/eb/4b/a0eb4b54f9cc06ac83d8d251f6c3bb2b.jpg'
    },
    {
      id: '6',
      name: 'Itadori Yuji',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/564x/c4/70/21/c47021ea0100597257265bf0e54699bb.jpg',
      backgroundUrl: 'https://i.pinimg.com/564x/b3/b5/ed/b3b5ed1c6dc01a8c0be59d220f8870a3.jpg'
    },
    {
      id: '7',
      name: 'Gojo Satoru',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/236x/f2/63/7f/f2637ff12e70ca25f06adefdfaffc01f.jpg',
      backgroundUrl: 'https://i.pinimg.com/236x/f2/63/7f/f2637ff12e70ca25f06adefdfaffc01f.jpg'
    },
    {
      id: '8',
      name: 'Saitama',
      items: '10K',
      owners: '6.37K',
      imageUrl: 'https://i.pinimg.com/236x/33/f0/e3/33f0e36b3bd39b997c89fe5a2bb5e74b.jpg',
      backgroundUrl: 'https://i.pinimg.com/236x/33/f0/e3/33f0e36b3bd39b997c89fe5a2bb5e74b.jpg'
    },
    {
      id: '9',
      name: 'Saai Akuto',
      items: '20K',
      owners: '7.76K',
      imageUrl: 'https://i.pinimg.com/474x/6f/cf/f0/6fcff067d6992c46a914ac6a83f691b9.jpg',
      backgroundUrl: 'https://i.pinimg.com/474x/6f/cf/f0/6fcff067d6992c46a914ac6a83f691b9.jpg'
    },
    {
      id: '10',
      name: 'Leonis',
      items: '3K',
      owners: '5.55K',
      imageUrl: 'https://i.pinimg.com/736x/0a/22/b2/0a22b2250846546d9e8fbc1ffd8f9c6f.jpg',
      backgroundUrl: 'https://i.pinimg.com/736x/0a/22/b2/0a22b2250846546d9e8fbc1ffd8f9c6f.jpg'
    }
  ];

  useEffect(() => {
    setFilteredCollections(
      collections.filter(collection =>
        collection.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);


  useEffect(() => {
    const counts = {};
    collections.forEach(collection => {
      counts[collection.id] = 0;
    });
    setItemCounts(counts);
  }, []);


  const handleIncrement = id => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1
    }));
  };

  const handleDecrement = id => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search characters"
        />
        <Text style={styles.header}>Character Wind Bracker</Text>
        <FlatList
          data={filteredCollections}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ImageBackground source={{ uri: item.backgroundUrl }} style={styles.itemContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.details}>Items: {item.items}</Text>
                <Text style={styles.details}>Owners: {item.owners}</Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity style={styles.counterButton} onPress={() => handleDecrement(item.id)}>
                    <Text style={styles.counterButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{itemCounts[item.id]}</Text>
                  <TouchableOpacity style={styles.counterButton} onPress={() => handleIncrement(item.id)}>
                    <Text style={styles.counterButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          )}
        />
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Husbunya Ganteng Yaa wkwkw')}>
        <Text style={styles.buttonText}>Di Pilih Mas Brooo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{ uri: 'https://i.pinimg.com/564x/59/17/21/591721aac4d0d2146df64617dd1d7388.jpg' }}
        style={styles.backgroundImage}
      />
      <Text style={styles.headerTitle}>Kenjie</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  headerContainer: {
    height: 300,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.8
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
  button: {
    borderWidth: 5,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 20,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  counterButton: {
    backgroundColor: '#ddd',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 20,
  },
  counterText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default App;
