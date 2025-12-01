"use client";

import { useAddress, useLovelace, useWallet } from "@meshsdk/react";

export function WalletInfo() {
  const address = useAddress();
  const balance = useLovelace();
  const { disconnect } = useWallet();

  return (
    <div
      style={{
        background: "#e8f8ef",
        border: "1px solid #c4e3d5",
        padding: "20px",
        borderRadius: "12px",
        margin: "15px 0",
        fontFamily: "Arial",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      <h3 style={{ marginBottom: "12px", display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "8px" }}>💳</span>
        Ví đã kết nối
      </h3>

      <div style={{ marginBottom: "8px" }}>
        <strong>Địa chỉ ví:</strong>
        <p
          style={{
            wordBreak: "break-all",
            marginTop: "4px",
            background: "#fff",
            padding: "8px 10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        >
          {address}
        </p>
      </div>

      <div style={{ marginTop: "10px" }}>
        <strong>Số dư:</strong>{" "}
        <span style={{ fontSize: "16px", fontWeight: "600", color: "#2a6f46" }}>
          {balance ? (Number(balance) / 1_000_000).toFixed(2) : "0"} ADA
        </span>
      </div>

      <button
        onClick={disconnect}
        style={{
          background: "#d9534f",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "15px",
          fontWeight: "600",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#c9302c";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#d9534f";
        }}
      >
        🔌 Ngắt kết nối
      </button>
    </div>
  );
}
