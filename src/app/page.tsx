"use client";

import { useWallet } from '@meshsdk/react';
import { WalletList } from '@/components/Home/WalletList';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div>
      <h1>Ví Cardano của tôi</h1>

      {!connected && <WalletList/>}
    </div>
  )
}