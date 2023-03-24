import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import KeywordsModal from "./components/KeywordsModal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // for getting user input and API reponse
  const extractKeywords = async (text) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter uppercase and seperate each Keyword with a comma\n\n" +
          text +
          " ",
        max_tokens: 50,
        temperature: 0.5,
        frequency_penalty: 1,
      }),
    };

    setIsLoading(true);
    setIsOpen(true);
    const response = await fetch(import.meta.env.VITE_API_URL, options);

    const jsonData = await response.json();

    const data = jsonData["choices"][0]["text"].trim();

    setKeywords(data);
    setIsLoading(false);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
      </Container>
      <KeywordsModal
        isOpen={isOpen}
        isLoading={isLoading}
        keywords={keywords}
        onClose={closeModalHandler}
      />
    </Box>
  );
};

export default App;
