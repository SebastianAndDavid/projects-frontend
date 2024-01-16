import { MilestoneItemProps } from "./phaseItem.interface";

export default function MilestoneItem({ milestone }: MilestoneItemProps) {
  return <div>{milestone.name}</div>;
}
