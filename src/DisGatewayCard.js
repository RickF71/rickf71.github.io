import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";

export default function DisGatewayCard() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const connect = () => {
    setStatus("connecting");
    setError(null);

    // Minimal intent object (client-side only)
    const intent = {
      intent: "observe",
      domain: "rick.dis.local",
      nonce: crypto.randomUUID(),
      ts: Date.now(),
      ua: navigator.userAgent,
    };

    const wsUrl =
      "wss://YOUR_TUNNEL_ENDPOINT/ws?intent=" +
      encodeURIComponent(JSON.stringify(intent));

    try {
      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        setStatus("connected");
        console.log("[DIS] connected as observer");
      };

      ws.onmessage = (msg) => {
        console.log("[DIS]", msg.data);
      };

      ws.onerror = () => {
        setError("Connection failed");
        setStatus("idle");
      };

      ws.onclose = () => {
        setStatus("idle");
      };
    } catch (e) {
      setError(e.message);
      setStatus("idle");
    }
  };

  return (
    <Card style={{ marginTop: "1.5em", border: "2px solid #333" }}>
      <Card.Body>
        <Card.Title>Live DIS Gateway</Card.Title>

        <Card.Text>
          This connects your browser to a live sovereign domain running from my
          personal network. Observer access only.
        </Card.Text>

        {error && <Alert variant="danger">{error}</Alert>}

        <Button
          variant="dark"
          onClick={connect}
          disabled={status === "connecting"}
        >
          {status === "connecting" ? "Connecting…" : "Connect as Observer"}
        </Button>

        {status === "connected" && (
          <Alert variant="success" style={{ marginTop: "1em" }}>
            Connected. You are observing a live system.
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}