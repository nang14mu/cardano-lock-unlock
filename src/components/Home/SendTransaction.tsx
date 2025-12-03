"use client"

import { useState } from "react";
import { useWallet } from "@meshsdk/react";
import { MeshTxBuilder } from "@meshsdk/core";

export function SendTransaction(){
    const { wallet } = useWallet();
    
    const [ recipientAddress, setReccipientAdress ] = useState('');
    const [ unit, setUnit ] = useState('lovelace');
    const [ quantity, setQuantity ] = useState('');
    const [ result, setResult ] = useState('');

    
} 