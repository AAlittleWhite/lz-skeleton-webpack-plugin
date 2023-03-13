interface ParamsType {
  rootId?: string;
  title?: string;
  domStr?: string | null;
}
declare class SkeletonPlugin {
  rootId: string;
  title: string;
  domStr: string | null;
  constructor(params: ParamsType | undefined);
  apply(compiler: any): void;
}
export default SkeletonPlugin;
