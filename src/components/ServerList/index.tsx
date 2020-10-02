import React from "react";
import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <div>
      <Container>
        <ServerButton isHome />

        <Separator />

        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton mentions={72} />
        <ServerButton />
        <ServerButton />
      </Container>
    </div>
  );
};

export default ServerList;
