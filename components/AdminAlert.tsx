"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdminAlert() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const success = searchParams.get('success');
    useEffect(() => {
        if (success) {
            let message = "";
            if (success === 'added') message = "✅ Employee added successfully!";
            if (success === 'updated') message = "✅ Employee updated successfully!";
            if (success === 'deleted') message = "✅ Employee deleted successfully!";

            window.alert(message);
            router.replace('/admin');
        }
    }, [success, router]);

    return null;
}
