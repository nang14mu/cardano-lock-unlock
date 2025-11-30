"use client";

import { useWallet } from '@meshsdk/react';
import { WalletList } from '@/components/Home/WalletList';
import { WalletInfo } from '@/components/Home/WalletInfo';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div>
      <h1>Ví Cardano của tôi</h1>

      {!connected && <WalletList/>}

      {connected && <WalletInfo/>}

    </div>
  )
}