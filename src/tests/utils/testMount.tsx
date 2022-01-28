import React from "react";
import { mount } from "@cypress/react";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export default function testMount(element: JSX.Element) {
  return mount(
    <QueryClientProvider client={client}>
      {element}
    </QueryClientProvider>
  )
}
