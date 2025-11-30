"use client";

import { useWallet } from '@meshsdk/react';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div>
      <h1>Ví Cardano của tôi</h1>
    </div>
  )
}