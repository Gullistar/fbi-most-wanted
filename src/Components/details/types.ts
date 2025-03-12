import { WantedPerson } from "../../api/endpoints/wanted/types";

export interface DetailProps {
  onClose: () => void;
  item: WantedPerson | null;
}
