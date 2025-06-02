
import axiosClient from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"

export interface PlayerMarketData {
    groupId: string;
    player: {
        id: string;
        name: string;
        imageUrl: string;
        imageUrl128: string;
        position: string;
        team: {
            id: string;
        };
        number: number | null;
    };
    sport: string;
    game: {
        id: string;
        status: 'UNPLAYED' | 'LIVE' | 'COMPLETED';
        isLive: boolean;
        startDate: string;
        league: string;
        homeTeam: {
            id: string;
            name: string;
            abbreviation: string;
            nickname: string;
        };
        awayTeam: {
            id: string;
            name: string;
            abbreviation: string;
            nickname: string;
        };
    };
    market: {
        id: string;
        name: string;
    };
    parlaySelectionsCount: number;
    props: {
        lines: {
            id: string;
            selectionLine: 'over' | 'under';
            isAvailable: boolean;
        }[];
        betPoints: number;
        type: 'NORMAL' | string;
    }[];
}

export interface PlayerObj {
    props: PlayerMarketData[];
}


export const useFetchAllPlayers = () => {
    return useQuery({
        queryKey: ['fetch_all_players'],
        queryFn: async () => {
            const res = await axiosClient.get(`/bet/public-props`,
                {
                    params: {
                        size: '30',
                        marketType: 'player_shots_on_target',
                    }
                }
            )
            return res.data as PlayerObj;
        },
    })
}

