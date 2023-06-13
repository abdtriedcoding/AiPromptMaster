import { ID, Query } from "appwrite";
import { databases } from "./appwriteConfig";
export const sendFormDataToDB = async (e, userId, username, tag, prompt, timestamp, location, setFormData) => {
    e.preventDefault();
    try {
        await databases.createDocument('64882f652d5bd19b2990', '64882f87f0e782686a74', ID.unique(), {
            uid: userId ?? "",
            username: username ?? "",
            tag: tag ?? "",
            prompt: prompt ?? "",
            timestamp: timestamp,
            location: location ?? "",
        });
        setFormData({
            tag: "",
            prompt: "",
        });
    } catch (error) {
        alert(error.message)
    }
};

export const fetchPrompts = async () => {
    try {
        const promise = await databases.listDocuments('64882f652d5bd19b2990', '64882f87f0e782686a74', [
            Query.orderDesc('timestamp'),
        ]);
        return promise;
    } catch (error) {
        alert(error.message)
    }
};

export const fetchPromptsByUserId = async (userId) => {
    try {
        const promise = await databases.listDocuments('64882f652d5bd19b2990', '64882f87f0e782686a74', [
            Query.equal('uid', [`${userId}`]),
            Query.orderDesc('timestamp'),
        ]);
        return promise;
    } catch (error) {
        alert(error.message)
    }
};

export const getPromptsById = async ($id) => {
    try {
        const promise = await databases.getDocument('64882f652d5bd19b2990', '64882f87f0e782686a74', $id);
        return promise;
    } catch (error) {
        alert(error.message)
    }
};

export const updatePrompt = async (e, $id, tag, prompt, setFormData) => {
    e.preventDefault();
    try {
        await databases.updateDocument(
            '64882f652d5bd19b2990', '64882f87f0e782686a74',
            $id, // assuming $id is the document to be updated
            {
                tag: tag ?? "",
                prompt: prompt ?? "",
            }
        );
        setFormData({
            tag: "",
            prompt: "",
        });
    } catch (error) {
        alert(error.message)
    }
};
