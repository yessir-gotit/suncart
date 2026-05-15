import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const auth = betterAuth({
  
    database: mongodbAdapter(async () => {
        await client.connect(); 
        return client.db();
    }),
    
    baseURL: process.env.BETTER_AUTH_URL,
    
   
    trustedOrigins: ["https://suncart-rust.vercel.app"],
    
    emailAndPassword: { 
        enabled: true,
        autoSignIn: true 
    }, 
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

    advanced: {
        useSecureCookies: true
    }
});