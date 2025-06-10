# Pick Your Club - Random Team Selector

**Live Demo:** [https://pick-your-club.vercel.app/](https://pick-your-club.vercel.app/)

"Pick Your Club" is a web application designed for soccer gamers (e.g., eFootball, PES, EA SPORTS FC) who want to add an element of surprise and challenge to their gameplay. Instead of always picking your favorite or strongest team, this tool allows you to randomly select clubs based on various customizable criteria.

## ⚽ Features

* **Random Club Selection:** Get one or more random clubs to play with.
* **Filter by Star Rating:** Specify a minimum and maximum star rating for the clubs.
* **Filter by League:** Choose specific leagues to include or exclude from the selection pool.
* **Include National Teams:** Option to include national teams in the random selection.
* **Number of Clubs:** Select how many regular clubs and national teams you want to pick.
* **Image Caching:** Optimized image loading with smart caching to prevent repeated API calls.
* **Sleek User Interface:** Modern and intuitive design for easy navigation and use.
* **Responsive Design:** Works well on desktop and mobile devices.

## 🎮 How to Use

1. **Visit the Live Demo:** [https://pick-your-club.vercel.app/](https://pick-your-club.vercel.app/)
2. **Adjust Settings (Optional):**
    * Click the "Settings" (gear) icon.
    * Set your preferred star rating range.
    * Select the leagues you want to include.
    * Choose the number of regular clubs to pick.
    * Enable "Include National Teams" and set the number of national teams if desired.
    * Click "Apply Settings".
3. **Pick Clubs:** Click the main "Shuffle" button.
4. **View Results:** The application will display the randomly selected club(s). If multiple clubs are selected, you can navigate between them.
5. **Navigate Between Teams:** If multiple teams were selected, use the Previous/Next buttons to view all selected clubs.
6. **Enjoy your game!**

## 🛠️ Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** Superset of JavaScript that adds static typing.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Vite:** A fast build tool and development server.
* **Lucide React:** Beautiful and consistent icons.
* **Shadcn/ui (Dialog, Slider, Checkbox, Button):** Re-usable components built using Radix UI and Tailwind CSS.
* **API-Football:** Integration with external API for team information and images.
* **Rate Limiting:** Custom rate limiting utility for optimized API usage.

## 🚀 Getting Started Locally (Development)

To run this project locally:

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd club-picker-pes-random
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up API key (Optional for club images):**
   
   Create a `.env.local` file in the project root with your API key:
   
   ```env
   VITE_API_FOOTBALL_KEY=your_api_key_here
   ```
   
   You can get a free API key from [API-Football](https://www.api-football.com/).

4. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:8080` (or the port specified in your terminal).

## 🖼️ Image Caching Implementation

The application implements smart caching for club images to improve performance and reduce API calls:

1. **Initial Load:** When clubs are first randomized, a batch process fetches all selected club images in the background.
2. **Rate Limiting:** The application uses a custom rate limiter to prevent hitting API limits during batch fetching.
3. **Persistent Caching:** Once an image is loaded, it's stored in an in-memory cache for the duration of your session.
4. **Fallback System:** If an image can't be loaded from the API, a dynamically generated placeholder is used instead.
5. **Progress Tracking:** A visual indicator shows the progress of image loading during batch operations.

This system ensures smooth navigation between multiple selected clubs without unnecessary API calls or loading delays.

## 📞 Contact

For questions or feedback, please contact:

* GitHub: TaiVanNgo
* Email: [vantaingo.056@gmail.com](mailto:vantaingo.056@gmail.com)
* Linkedin: [Tai Ngo](https://www.linkedin.com/in/taivanngo/)

---

Enjoy adding a new layer of fun to your soccer gaming sessions!
