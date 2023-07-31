import React from "react";
import { 
  Wrap, 
  WrapItem,
  Button,
  useToast
} from "@chakra-ui/react";

export default function Notification(props) {
  const { texto_toast } = props
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']
  
  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${texto_toast}`,
                status: status,
                isClosable: true,
              })
            }
          >
            Texto Botao
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}