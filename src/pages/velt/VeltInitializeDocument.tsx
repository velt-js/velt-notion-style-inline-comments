import { useSetDocuments } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
    const { setDocuments } = useSetDocuments();
    const document = useMemo(() => [
        {
            id: 'velt-notion-style-inline-comments-demo',
            metadata: {
                documentName: 'Velt Notion Style Inline Comments Demo'
            }
        },
    ], []);

    // Initialize the document. Document == video recording instance.
    useEffect(() => {
        if (setDocuments && document) {
            setDocuments(document);
        }
    }, [setDocuments, document]);

    return null;
}
