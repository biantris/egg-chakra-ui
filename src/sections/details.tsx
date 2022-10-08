import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const Details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Bia" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Oliveira" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Blvd. Broken Dreams 21" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
                <option value="usa">United States of America</option>
                <option value="bra">Brazil</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
            <Checkbox defaultChecked >Ship to billing adress.</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
            <Button size="lg" w="full">Place Order</Button>
        </GridItem>

      </SimpleGrid>

    </VStack>
  );
};

export default Details;
