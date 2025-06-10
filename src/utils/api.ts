import { apiRateLimiter } from './rateLimiter';

interface TeamResponse {
  team: {
    id: number;
    name: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

interface ApiResponse {
  get: string;
  parameters: Record<string, string>;
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: TeamResponse[];
}

/**
 * Fetches club details from the API with rate limiting
 */
export async function getClubDetails(clubName: string, apiKey: string | undefined): Promise<string | undefined> {
  if (!apiKey || apiKey === "YOUR_API_FOOTBALL_KEY") {
    console.error(
      "API Key is missing. Make sure you have created a .env.local file and restarted your server.",
    );
    return;
  }

  // Use the rate limiter to execute the API call
  return apiRateLimiter.add(async () => {
    const url = new URL("https://v3.football.api-sports.io/teams");
    url.searchParams.append("search", clubName);
  
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": apiKey,
      },
    };
  
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(
          `API Error: ${response.statusText} (Status: ${response.status})`,
        );
      }
      
      const data = await response.json() as ApiResponse;
      
      if (data.response && data.response.length > 0) {
        const teamData = data.response[0];
        const { team: teamInfo, venue: venueInfo } = teamData;
  
        // Logs the fetched details to the browser's developer console
        console.group(
          `%cAPI Details for: ${teamInfo.name}`,
          "color: #10b981; font-weight: bold; font-size: 14px;",
        );
        console.log("Team Info:", teamInfo);
        console.log("Venue Info:", venueInfo);
        console.groupEnd();
  
        return data.response[0].team.logo;
      } else {
        console.warn(`API: No details found for a club named '${clubName}'.`);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("An error occurred during the API call:", errorMessage);
    }
  });
}

/**
 * Generates a placeholder image URL when no club image is available
 */
export function getPlaceholderImage(clubName: string): string {
  return `https://via.placeholder.com/150x150?text=${encodeURIComponent(clubName)}`;
}
