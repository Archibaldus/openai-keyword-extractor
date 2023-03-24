import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [inputText, setInputText] = useState("");

  const toast = useToast();

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitText = () => {
    if (inputText === "") {
      toast({
        title: "Please insert a text",
        description: "No Text, no keywords",
        status: "error",
        duration: 3000,
        isClosable: false,
      });
    } else extractKeywords(inputText);
  };

  return (
    <>
      <Textarea
        marginTop={5}
        padding="1rem"
        backgroundColor="blue.300"
        height={200}
        onChange={textHandler}
      />
      <Button
        marginTop={3}
        backgroundColor="blue.900"
        width="100%"
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
