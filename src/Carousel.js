import React from 'react';
import { ScrollView, Image, Dimensions, Header, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const images = [
  'https://images.unsplash.com/photo-1533033315434-ca311a9cde65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e772a093ea189414039208af1072728&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1523304867125-2293c498e08a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16daa09684e0c8db98a040147f7b5a0f&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1520121843168-25f75bb5c99a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=537b9839af403e73e4245d75857835f6&auto=format&fit=crop&w=655&q=80',
  'https://images.unsplash.com/photo-1519587107946-3e3ae929150e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=910846fc0215e0db73e027a021499f8a&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1495745713439-7efd16a9555c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04dac6c44ebf3f41bc3401cd9e4430dc&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1481014472607-f71254019973?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ef224b7a523caa5d3d836eba7fb884a&auto=format&fit=crop&w=634&q=80'
];

const Carousel = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    pagingEnabled
    style={{ backgroundColor: '#fdc65c' }}
  >
    {images.map(uri => (
      <Image
        key={uri}
        style={{ width, height: height - 112 }}
        source={{ uri }}
      />
    ))}
  </ScrollView>
);

export default Carousel;
