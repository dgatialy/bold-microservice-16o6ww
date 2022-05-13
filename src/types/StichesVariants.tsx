import type * as Stitches from "@stitches/react";

// https://discord.com/channels/752614004387610674/752795957674115092/908425594428092458
type VariantValues<T> = T extends string | boolean ? T : never;
export type StitchesVariants<
  StitchesComponent,
  V = Required<Stitches.VariantProps<StitchesComponent>>
> = {
  [key in keyof V]: VariantValues<V[key]>;
};
