import { Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text>
        Paste in your text below and we do the magic to extract the keywords
      </Text>
    </>
  );
};

export default Header;
