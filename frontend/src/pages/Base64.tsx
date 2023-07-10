import { Flex, Input, Text, Textarea } from '@chakra-ui/react'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

const Decode = () => {
    const [b64, setB64] = useState("");
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            setValue(atob(b64))
            setError("")
        } catch (e) {
            setError("Invalid base 64.")
            setValue("")
        }
    }, [b64])

    const handleB64Change: ChangeEventHandler<HTMLInputElement> = (event) => {
        setB64(event.target.value)
    }

    return (
        <Flex direction="column" w="full" gap={3}>
            <Text fontSize="3xl" mb={2} fontWeight="bold">
                Decode
            </Text>
            <Flex direction="column" gap={2}>
                <Input placeholder='Base64 string' onChange={handleB64Change} />
                <Textarea placeholder='Result' value={value} />
            </Flex>
            {error && <Text color="red" fontSize="3xl">
                {error}
            </Text>}
        </Flex>
    )
}

const Encode = () => {
    const [value, setValue] = useState("");
    const [b64, setB64] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        try {
            setB64(btoa(value))
            setError("")
        } catch (e) {
            setError("Invalid string.")
            setB64("")
        }
    }, [value])

    const handleValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    return (
        <Flex direction="column" w="full" gap={3}>
            <Text fontSize="3xl" fontWeight="bold">
                Encode
            </Text>
            <Flex direction="column" gap={2}>
                <Input placeholder='String' onChange={handleValueChange} />
                <Textarea placeholder='Result' value={b64} />
            </Flex>
            {error && <Text color="red" fontSize="3xl">
                {error}
            </Text>}
        </Flex>
    )
}

const Base64 = () => {
    return (
        <Flex direction="column" w="full" gap={5}>
            <Decode />
            <Encode />
        </Flex>
    )
}

export default Base64