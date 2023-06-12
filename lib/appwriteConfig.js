import { Client, Account, Databases, Query, Locale, Storage } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);
const locale = new Locale(client);
const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('648823d908e7ea647529');

export { client, account, databases, Query, locale, storage };