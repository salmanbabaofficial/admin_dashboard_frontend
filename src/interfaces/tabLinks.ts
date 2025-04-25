import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface TabLinks {
  id: number;
  icon: IconDefinition;
  link: string;
  route: string;
  click?: VoidFunction
}
