import { useEffect } from 'react';
import { useVeltClient } from '@veltdev/react';

// [VELT] Initializes the current signed in user in Velt.
export default function VeltInitializeUser() {
    const { client } = useVeltClient();
    const hardcodedUser = {
        userId: 'user-4',
        name: 'Dwight Schrute',
        email: 'dwight@example.com',
        color: '#FF5733',
        textColor: '#FFFFFF',
        organizationId: 'notion-style-inline-comments-demo'
    };

    // Initialize Velt with user info and token
    useEffect(() => {
        if (hardcodedUser && client) {
            client.identify(
                {
                    userId: hardcodedUser.userId,
                    name: hardcodedUser.name,
                    email: hardcodedUser.email,
                    organizationId: hardcodedUser.organizationId,
                }
            );
        }
    }, [hardcodedUser, client]);

    return null;
}
