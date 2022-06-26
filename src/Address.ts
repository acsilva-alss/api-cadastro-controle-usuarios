export default class Address {
    NUMBER_ZIP_CODE_DIGITS = 8
    zipCode: string

    constructor(zipCode: string){
        if(!this.isValidZipcode(zipCode)) throw new Error('ERROR! Invalid zip code')
        this.zipCode = zipCode
    }

    private cleanZipCode(zipCode: string) {
        return zipCode.replace(/\D/g, "")
    }

    private isInvalidZipCodeLength (zipcode: string) {
        return zipcode.length !== this.NUMBER_ZIP_CODE_DIGITS
    }

    private isValidZipcode(zipCode: string) {
        if(!zipCode) return false
        const cleanedZipCode = this.cleanZipCode(zipCode)
        if(this.isInvalidZipCodeLength(cleanedZipCode)) return false
    }

}