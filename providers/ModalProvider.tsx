"use client";

import AuthModal from "@/components/AuthModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [setIsMounted]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal/>
        </>
    )
}

export default ModalProvider;