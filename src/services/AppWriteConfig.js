import { Client , Account} from "appwrite";

const client = new Client();



client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('640b3f52ef0c4f81952e') // Your project ID
    ;

export const account = new Account(client);