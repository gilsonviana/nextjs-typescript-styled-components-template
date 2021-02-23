import Head from "next/head";

import { Text, TitleXL, Container, Row, Col } from "@styled/index";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleXL>Title XL</TitleXL>
      <Row>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
        <Col>
          <Text center weight="bold" size="extra" color="primary">
            Hello World
          </Text>
        </Col>
      </Row>
    </Container>
  );
}
