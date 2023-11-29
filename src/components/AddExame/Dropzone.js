import { useDropzone } from 'react-dropzone';
import { Center, Icon, useColorModeValue } from '@chakra-ui/react';
import { PlusCircle } from 'react-feather';

export default function Dropzone({ onDrop }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const dropText = isDragActive
    ? 'Arraste arquivos para cá... (Max 1 arquivo)'
    : 'Arraste e solte arquivos aqui, ou clique para selecioná-los (Max 1 arquivos)';

  const activeBg = useColorModeValue('gray.500', 'gray.600');
  const borderColor = useColorModeValue(
    isDragActive ? 'gray.300' : 'gray.300',
    isDragActive ? 'gray.500' : 'gray.500',
  );

  return (
    <Center
      p={3}
      cursor="pointer"
      bg={isDragActive ? activeBg : 'transparent'}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon as={PlusCircle} mr={2} />
      <p>{dropText}</p>
    </Center>
  );
}
