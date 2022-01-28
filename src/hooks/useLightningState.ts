import { useQuery } from "react-query";

import { LightingState } from "types/lightning";

const stateEndpoint = process.env.REACT_APP_LIGHTNING_API ?? `${window.location.origin}/state`;

export default function useLightingState() {
  const headers = new Headers()
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("X-Lightning-Type", "DEFAULT");
  headers.append("X-Lightning-Session-UUID", "1234");
  headers.append("X-Lightning-Session-ID", "1234");

  const getState = () => fetch(stateEndpoint, { headers }).then(res => res.json());

  const lightningState = useQuery<LightingState>("getLightningState", getState);

  return lightningState;
}
