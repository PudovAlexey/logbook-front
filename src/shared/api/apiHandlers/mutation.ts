import { MutationEndpoint } from "@shared/lib/queryHooks/UseLazyMutation";

function mutation<R, P>(endpoint: MutationEndpoint<P, R>) {
  return endpoint
}

export {mutation}
