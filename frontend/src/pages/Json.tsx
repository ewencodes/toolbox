import { Box, Button, Code, Flex, Input, Text } from '@chakra-ui/react'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

const Json = () => {
    const [json, setJson] = useState("")
    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setJson(event.target.value)
    }

    const addToClipboard = () => {
        navigator.clipboard.writeText(value)
    }

    useEffect(() => {
        if (json === "") return;

        try {
            setValue(JSON.stringify(JSON.parse(json), null, 2))
            setError("")
        } catch (e) {
            setValue("")
            setError("Invalid JSON")
        }
    }, [json])

    return (
        <Flex direction="column" gap={4} w="full">
            <Text fontSize="3xl">
                JSON
            </Text>
            <Flex direction="column" w="full" gap={4}>
                <Input placeholder="json" onChange={handleChange} />
                {value && <Box position="relative">
                    <Button colorScheme="blue" position="absolute" right={2} top={2} onClick={addToClipboard}>
                        Copy
                    </Button>
                    <Code w="full" whiteSpace="pre" variant="subtle" overflowY="auto" p={2}>
                        {value}
                    </Code>
                </Box>}
            </Flex>
            {error && <Text color="red" fontSize="2xl">
                {error}
            </Text>}
        </Flex>
    )
}

export default Json