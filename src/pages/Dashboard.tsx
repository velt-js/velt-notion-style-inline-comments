import { useVeltClient, VeltComments, VeltCommentsSidebar, VeltCommentTool, VeltSidebarButton } from "@veltdev/react";
import { useEffect, useState } from "react";

export const userService = () => {
    return {
        uid: "fbb8f1db-2f35-4904-9570-7de484769518",
        displayName: "Michael Scott",
        email: "michael.scott@dundermifflin.com",
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fpeppa_pig.svg?',
        organizationId: 'hudl'

        // uid: "fbb8f1db-2f35-4904-9570-7de484769519",
        // displayName: "Jim Halpert",
        // email: "jim.halpert@dundermifflin.com",
        // photoURL: 'https://firebasestorage.googleapis.com/v0/b/snippyly-sdk-external/o/avatars%2Fpeppa_pig.svg?',
        // organizationId: 'hudl'
    }
}

export default function Dashboard() {
    const [yourAuthenticatedUser] = useState(userService());

    const { client } = useVeltClient();

    useEffect(() => {
        const initVelt = async () => {
            if (client && yourAuthenticatedUser) {

                const { uid, displayName, email, photoURL, organizationId } = yourAuthenticatedUser;

                const user = {
                    userId: uid,
                    name: displayName,
                    email: email,
                    photoUrl: photoURL,
                    organizationId: organizationId
                };

                await client.identify(user)
            }
        }
        initVelt().catch(console.error)
    }, [client, yourAuthenticatedUser]);

    useEffect(() => {
        if (client) {
            client.setDocument('notion-like-document');
        }
    }, [client]);

    return (
        <div >
            <VeltComments shadowDom={false} />
            <VeltCommentsSidebar pageMode={true} shadowDom={false} />
            <div className="flex items-center gap-4 p-8">
                <VeltSidebarButton />
                <h1 className="text-white text-2xl font-bold">Velt - Notion like comments</h1>
            </div>
        </div>
    );
}
