import { Box, Flex, Text, Textarea } from '@chakra-ui/react';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react'

const HighLight: React.FC<{ string1: string, string2: string }> = ({ string1, string2 }) => {
    let result: { text: string, isHighlight: boolean }[] = [];
    let i = 0;

    while (i < string1.length || i < string2.length) {
        if (string1[i] !== string2[i] || i >= string1.length || i >= string2.length) {
            result.push({ text: string2[i], isHighlight: true });
        } else {
            result.push({ text: string2[i], isHighlight: false });
        }
        i++;
    }

    return (
        <Text>
            {result.map(result => result.isHighlight ? <Text as={"span"} bg="green">{result.text}</Text> : result.text)}
        </Text>
    );
}

const Differences = () => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const handleChangeValue1: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setValue1(event.target.value)
    }
    const handleChangeValue2: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setValue2(event.target.value)
    }

    // useEffect(() => {
    //     ref = compareStrings(value1, value2)
    // }, [value1, value2])

    return (
        <Flex direction="column" w="full">
            <Text fontSize="3xl" fontWeight="bold">
                Differences
            </Text>
            <Flex w="full" direction={{ base: "column", md: "row" }} gap={4}>
                <Textarea value={value1} onChange={handleChangeValue1} />
                <Textarea value={value2} onChange={handleChangeValue2} />
            </Flex>
            <Flex w="full" direction={{ base: "column", md: "row" }} gap={4}>
                <Text flex={1}>
                    {value1}
                </Text>
                <Text flex={1}>
                    <HighLight string1={value1} string2={value2} />
                </Text>
            </Flex>
        </Flex>
    )
}

export default Differences