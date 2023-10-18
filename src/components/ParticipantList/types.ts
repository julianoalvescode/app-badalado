import { Participant } from "domain/models/participant";

export type ParticipantList = {
  participants: Participant[] | null;
  onDelete: (id: number) => void;
};
