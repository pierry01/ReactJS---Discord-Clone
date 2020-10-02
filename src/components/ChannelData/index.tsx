import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(() => {
    const div = messagesRef.current
    if (div) { div.scrollTop = div.scrollHeight }
  }, [messagesRef])
  
  return (
    <Container>
      <Messages ref={messagesRef}>
        {
          Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage 
              key={n}
              author="Jean Mendonça"
              date="23/06/1998"
              content="Hoje é o meu aniversário!"
            />
          ))
        }

        <ChannelMessage 
          author="Diego Fernandes"
          date="23/06/1998"
          content={
            <>
              <Mention>@Jean Mendonça</Mention>, me carrega no LoL, por favor!
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
