import { Participant } from "domain/models/participant";

export type ParticipantProps = Participant & {
  onDelete: () => void;
};
