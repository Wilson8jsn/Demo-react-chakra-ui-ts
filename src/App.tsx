
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Gallery from './components/Gallery';

const images: string[] = [
  'https://res.cloudinary.com/dcba9lt2s/image/upload/v1701026668/cld-sample-2.jpg',
  'https://res.cloudinary.com/dcba9lt2s/image/upload/v1701402082/y1adugwesxcopatbwe6d.png',
  'https://res.cloudinary.com/dcba9lt2s/image/upload/v1701402204/zcw1ppiryzrgmgt6o41z.png',
];

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Gallery images={images} />
      </div>
    </ChakraProvider>
  );
}

export default App;
