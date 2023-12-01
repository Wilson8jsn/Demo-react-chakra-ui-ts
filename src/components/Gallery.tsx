// En src/components/Gallery.tsx
import React from 'react';
import { Box, Image, SimpleGrid } from '@chakra-ui/react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      {images.map((image, index) => (
        <Box key={index} boxShadow="md" textAlign="center" mt="200px">
          <Image src={image} alt={`Image ${index + 1}`} mx="auto" width="400px" height="400px" />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Gallery;
