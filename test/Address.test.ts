import Address from "../src/Address"

const wrongSizeZipCode = [
    '1',
    '123456789',
]

test("Should be return error if zip code length is empty", () => {
    const emptyZipCode = ''
    expect(() =>new Address(emptyZipCode)).toThrow(new Error("ERROR! Invalid zip code"))
})

test.each(wrongSizeZipCode)("Should return error if zip code is length is inavlid", (zipCode) => {
    expect(() =>new Address(zipCode)).toThrow(new Error("ERROR! Invalid zip code"))
})