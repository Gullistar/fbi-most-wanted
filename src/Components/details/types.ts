import { ApiItem } from "../../App";

export interface DetailProps {
  isOpen: boolean;
  onClose: () => void;
  item: ApiItem | null;
}
