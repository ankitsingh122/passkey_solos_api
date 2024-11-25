import joi from '@hapi/joi';

const schema = joi.object({
    email: joi.string().trim().email().required(),
    password: joi.string().required(),
})

const adminProfileSchema = joi.object({
    firstName: joi.string().trim().required(),
    lastName: joi.string().required(),
    email: joi.string().trim().email().required(),
    password: joi.string().required(),
})

const forgotPasswordSchema = joi.object({
    email: joi.string().trim().email().required()
})

const validateResetPasswordSchema = joi.object({
    password: joi.string().required(),
})

const validateChangePasswordSchema = joi.object({
    password: joi.string().required(),
})

const propertyDetailsSchema = joi.object({
    propertyName: joi.string().trim().messages({ 'string.empty': 'Please enter Property Name', 'any.required': 'Please enter Property Name' }),
    location: joi.string().trim().messages({ 'string.empty': 'Please enter Location', 'any.required': 'Please enter Location' }),
    description: joi.string().trim().messages({ 'string.empty': 'Please enter Description', 'any.required': 'Please enter Description' }),
    area: joi.number().messages({ 'number.base': 'Area should be a number', 'number.empty': 'Please enter Area', 'any.required': 'Please enter Area' }),
    propertyType: joi.string().trim().messages({ 'string.empty': 'Please enter Property Type', 'any.required': 'Please enter Property Type' }),
    interestPerAnnum: joi.number().messages({ 'number.base': 'Interest Per Annum should be a number', 'number.empty': 'Please enter Interest Per Annum', 'any.required': 'Please enter Interest Per Annum' }),
    price: joi.number().unsafe().messages({ 'number.base': 'Price should be a number', 'number.empty': 'Please enter Price', 'any.required': 'Please enter Price' }),
    dueDate: joi.string().trim().isoDate().messages({ 'string.base': 'Due Date should be a string', 'string.empty': 'Please enter Due Date', 'string.isoDate': 'Due Date should be in ISO date format (YYYY-MM-DD)', 'any.required': 'Please enter Due Date' }),
    MonthlyFees: joi.number().messages({ 'number.base': 'Monthly Fees should be a number', 'number.empty': 'Please enter Monthly Fees', 'any.required': 'Please enter Monthly Fees' }),
    aminities: joi.array().items(joi.object({  // Modify aminities to accept objects
        id: joi.string(),
        value: joi.string(),
        image: joi.string(),
        label: joi.string(),
    })),
    imageURL: joi.string(),
    propertyDocument: joi.string(),
}).optional();


const agreementDetailsSchema = joi.object({
    propertyId: joi.string().trim().required(),
    userId: joi.string().trim().required(),
    leaseRequestId: joi.string().trim().required(),
    propertyName: joi.string().trim().required().messages({ 'string.empty': 'Please enter Property Name', 'any.required': 'Please enter Property Name' }),
    propertyType: joi.string().trim().required().messages({ 'string.empty': 'Please enter Property Type', 'any.required': 'Please enter Property Type' }),
    streetAddress: joi.string().trim().required().messages({ 'string.empty': 'Please enter Street Address', 'any.required': 'Please enter Street Address' }),
    city: joi.string().trim().required().messages({ 'string.empty': 'Please enter City', 'any.required': 'Please enter City' }),
    state: joi.string().trim().required().messages({ 'string.empty': 'Please enter State', 'any.required': 'Please enter State' }),
    country: joi.string().trim().required().messages({ 'string.empty': 'Please enter Country', 'any.required': 'Please enter Country' }),
    apn: joi.string().trim().required().messages({ 'string.empty': 'Please enter APN', 'any.required': 'Please enter APN' }),
    typeOfPropertyOwnership: joi.string().trim().required().messages({ 'string.empty': 'Please enter Property Ownership', 'any.required': 'Please enter Property Ownership' }),
    tract: joi.string().trim().required().messages({ 'string.empty': 'Please enter tract', 'any.required': 'Please enter tract' }),
    landValue: joi.string().trim().required().messages({ 'string.empty': 'Please enter Land Value', 'any.required': 'Please enter Land Value' }),
    improvements: joi.string().trim().required().messages({ 'string.empty': 'Please enter Improvements', 'any.required': 'Please enter Improvements' }),
    totalValue: joi.string().trim().required().messages({ 'string.empty': 'Please enter Total Value', 'any.required': 'Please enter Total Value' }),
    monthlyLeaseFee: joi.string().trim().required().messages({ 'string.empty': 'Please enter Monthly Lease Fee', 'any.required': 'Please enter Monthly Lease Fee' }),
    leaseTerm: joi.string().trim().required().messages({ 'string.empty': 'Please enter Lease Term', 'any.required': 'Please enter Lease Term' }),
    leaseStartDate: joi.string().trim().required().messages({ 'string.empty': 'Please enter Lease Start Date', 'any.required': 'Please enter Lease Start Date' }),
    leaseExpirationDate: joi.string().trim().required().messages({ 'string.empty': 'Please enter Lease Expiration Date', 'any.required': 'Please enter Lease Expiration Date' }),
    unit: joi.string().allow('', null).optional(),
});
const NftDataSchema = joi.object({
    name: joi.string().required(),
    symbol: joi.string().required(),
    description: joi.string().required(),
    categoryId: joi.string().required(),
    type: joi.string().required(),
    contractAddress: joi.string().required(),
    price: joi.string().required(),
})
const adminRegisterSchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
})
const fredDataSchema = joi.object({
    amount: joi.string().required(),
    numberOfUsers: joi.number().required(),
    expiryDate: joi.date().required(),
})
const sendTokenByAdmin = joi.object({
    amount: joi.string().min(1).max(100).required(),
    symbol: joi.string().min(1).max(100).required(),
    walletAddress: joi.string().min(4).max(100).required(),
})
const NftCategorySchema = joi.object({
    categoryName: joi.string().required()
})
const SfredCategorySchema = joi.object({
    categoryName: joi.string().required(),
})
export const validateNftCategory = (client: any) => {
    return NftCategorySchema.validate(client)
}
export const validateSfredCategory = (client: any) => {
    return SfredCategorySchema.validate(client)
}
export const validateFredCategory = (client: any) => {
    return fredDataSchema.validate(client)
}
export const validateNftDetails = (client: any) => {
    return NftDataSchema.validate(client)
}
export const validateAgreementDetails = (client: any) => {
    return agreementDetailsSchema.validate(client)
}

const adminConversionRate = joi.object({
    conversionRate: joi.number().required()
})
const adminSellpercentage = joi.object({
    sellPercentage: joi.number().required()
})
const adminCommissionWallet = joi.object({
    commissionWallet: joi.string().min(4).max(100).required(),
})
const adminConversionRateForSoloReward = joi.object({
    conversionRateForSoloReward: joi.number().required()
})
const adminConversionRateForLoan = joi.object({
    conversionRateForLoan: joi.number().required()
})
const getFredExchangeRedTokenPercentage = joi.object({
    FredExchangeRedTokenPercentage: joi.number().required()
})
const adminBookingPercentage = joi.object({
    bookingPercentage: joi.string().required()
})
const validateAdminPasswordSchema = joi.object({
    oldPassword: joi.string().required(),
    newPassword: joi.string().required(),
})

export const validateBookingPercentage = (admin: any) => {
    return adminBookingPercentage.validate(admin)
}
export const validateConversionRate = (admin: any) => {
    return adminConversionRate.validate(admin)
}
export const validatesellpercentage = (admin: any) => {
    return adminSellpercentage.validate(admin)
}
export const validateCommissionWallet = (admin: any) => {
    return adminCommissionWallet.validate(admin)
}
export const validateConversionRateForSoloReward = (admin: any) => {
    return adminConversionRateForSoloReward.validate(admin)
}
export const validateFredExchangeRedTokenPercentage = (admin: any) => {
    return getFredExchangeRedTokenPercentage.validate(admin)
}
export const validateadminConversionRateForLoan = (admin: any) => {
    return adminConversionRateForLoan.validate(admin)
}

export const validatePropertyDetails = (admin: any) => {
    return propertyDetailsSchema.validate(admin)
}

export const validateAdmin = (admin: any) => {
    return schema.validate(admin)
}

export const validateProfile = (admin: any) => {
    return adminProfileSchema.validate(admin)
}

export const validateForgotPassword = (admin: any) => {
    return forgotPasswordSchema.validate(admin)
}

export const validateResetPassword = (admin: any) => {
    return validateResetPasswordSchema.validate(admin)
}

export const validateChangePassword = (admin: any) => {
    return validateChangePasswordSchema.validate(admin)
}
export const validateAdminPassword = (client: any) => {
    return validateAdminPasswordSchema.validate(client)
}
export const validateAdminRegister = (client: any) => {
    return adminRegisterSchema.validate(client)
}
export const validateSendToken = (client: any) => {
    return sendTokenByAdmin.validate(client)
}


