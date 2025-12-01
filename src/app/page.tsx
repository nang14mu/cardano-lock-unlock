"use client";

import { useWallet } from '@meshsdk/react';
import { WalletList } from '@/components/Home/WalletList';
import { WalletInfo } from '@/components/Home/WalletInfo';

export default function Home() {
  const { connected } = useWallet();

  return (
    <div>

      {!connected && <WalletList/>}

      {connected && <WalletInfo/>}

    </div>
  )
}