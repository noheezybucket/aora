import { Client, ID, Account, Avatars, Databases, Query } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.dartisan.aora',
    projectId: "67cc675e00190302e937",
    databaseId: '67cc6ac500293f5b2e7e',
    userCollectionId: '67cc6ae00016de0bcdea',
    videoCollectionId: '67cc6afb0034b049ccb0',
    storageId: '67cc6cc2001b38328b92'
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = appwriteConfig;

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)
    ;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


// Register User
export const signUp = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email, password, username
        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

        return newUser
    } catch (error) {
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);

    }
}

export const logOut = async () => {
    try {
        await account.deleteSession('current');
        console.log("User logged out successfully");
    } catch (error) {
        console.error("Error logging out:", error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;
        console.log(currentAccount)

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if (!currentUser) throw Error;

        return currentAccount

    } catch (error) {
        throw new Error(error);

    }
}

export const getAllPosts =  async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
             videoCollectionId,
        )

        return posts.documents
    } catch (error) {
        throw new Error(error);
    }
}