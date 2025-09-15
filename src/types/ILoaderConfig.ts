import type {
  IBaseLoaderProps,
  IElementLoaderProps,
  IFluidLoaderProps,
  IGeometricLoaderProps,
  ILogoLoaderProps,
  ISkeletonLoaderProps,
  ITextLoaderProps,
} from "react-loadly";

export type LoaderPropsMap = {
  spin: IBaseLoaderProps;
  pulse: IGeometricLoaderProps;
  wave: IFluidLoaderProps;
  grid: IGeometricLoaderProps;
  typing: ITextLoaderProps;
  logo: ILogoLoaderProps;
  bars: IGeometricLoaderProps;
  dots: IGeometricLoaderProps;
  blob: IFluidLoaderProps;
  ring: IGeometricLoaderProps;
  flow: IFluidLoaderProps;
  rotate: IGeometricLoaderProps;
  element: IElementLoaderProps;
  bounce: IGeometricLoaderProps;
  skeleton: ISkeletonLoaderProps;
};

type LoaderInterfaces = {
  IBaseLoaderProps: IBaseLoaderProps;
  IElementLoaderProps: IElementLoaderProps;
  IFluidLoaderProps: IFluidLoaderProps;
  IGeometricLoaderProps: IGeometricLoaderProps;
  ILogoLoaderProps: ILogoLoaderProps;
  ISkeletonLoaderProps: ISkeletonLoaderProps;
  ITextLoaderProps: ITextLoaderProps;
};

type LoaderInterfaceName = keyof LoaderInterfaces;

export type LoaderKind = keyof LoaderPropsMap;

// Make the uniqueProps array more flexible to avoid type conflicts
export interface ILoaderConfig<K extends LoaderKind> {
  component: React.ComponentType<LoaderPropsMap[K]>;
  title: string;
  interface: LoaderInterfaceName;
  commonProps: (keyof IBaseLoaderProps)[];
  uniqueProps: (keyof LoaderPropsMap[K])[]; // More flexible type
}

export const commonProps: (keyof IBaseLoaderProps)[] = [
  "color",
  "size",
  "speed",
  "loadingText",
];
