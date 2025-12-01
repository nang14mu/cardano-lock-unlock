"use client";

import { useWallet, useWalletList } from "@meshsdk/react";

export function WalletList() {
  const walletList = useWalletList();
  const { connect } = useWallet();

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto", fontFamily: "Arial" }}>
      <h3 style={{ marginBottom: "15px", fontSize: "20px" }}>
        🔗 Chọn ví để kết nối
      </h3>

      {walletList.map((wallet, index) => (
        <div
          key={index}
          onClick={() => connect(wallet.name)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "12px 16px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            backgroundColor: "white",
            margin: "12px 0",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.08)";
          }}
        >
          <img
            src={wallet.icon}
            alt={wallet.name}
            width="40"
            style={{
              borderRadius: "50%",
              background: "#f1f1f1",
              padding: "6px",
            }}
          />

          <div style={{ marginLeft: "14px" }}>
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              {wallet.name}
            </div>

            <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>
              Phiên bản: {wallet.version}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
