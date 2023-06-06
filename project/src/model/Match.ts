import { Team } from "./Team";

export interface Match{
    id: number;
    homeTeam: Team;
    awayTeam: Team;
    startDate: string;
}
export interface MatchDetailsResponse {
    event: Match
}