import {
    SecretsManagerClient,
    GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const client = new SecretsManagerClient({
    region: "us-east-1",
});
const secret_name = "solos-wallet-keys";

export const getSecretKeysValue = async () => {
    try {
        if (process.env.ENVIRONMENT === 'dev') {
            return JSON.stringify({
                TREASURY_PRIVATE_KEY: process.env.PRIVATE_KEY
            });
        } else {
            const response = await client.send(
                new GetSecretValueCommand({
                    SecretId: secret_name,
                    VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
                })
            );
            const secret = response?.SecretString;
            if (secret) {
                return secret;
            } else {
                throw new Error("Keys not found !")
            }
        }
    } catch (error) {
        console.log("getSecretKeysValue Error", error);
        throw error
    }
};
