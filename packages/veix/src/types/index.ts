export type VeixNode = VeixElement | VeixText;
export type VeixNodeList = VeixNode[];
export type VeixElement = {
  tag: string;
  props: {
    children: VeixNodeList;
    etc;
  };
  className?: string;
  style?: string;
  events?: Object;
  dom?: Node;
}

export type VeixText = string | number;