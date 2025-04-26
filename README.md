# Wearable Insights

This is a Next.js application built with Firebase Studio for visualizing and analyzing data from wearable devices. It uses ShadCN UI components, Tailwind CSS for styling, and Genkit for AI-powered insights.

## Features

- **Data Visualization**: Display historical health data like heart rate, steps, sleep, etc.
- **Interactive Charts**: View metrics using interactive charts.
- **Data Filtering**: Filter data by source (Fitbit, Apple Health, Garmin) and date range.
- **AI Insights**: Generate weekly summaries and health recommendations based on data patterns.
- **Dedicated Pages**: View detailed breakdowns for Heart Rate, Activity, Sleep, and AI Reports.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository** (if applicable):
    ```bash
    git clone <your-repository-url>
    cd wearable-insights 
    ```
    *(Replace `<your-repository-url>` with the actual URL if you're cloning from a Git repository)*

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root of the project directory by copying the `.env.example` file (if one exists) or creating a new one. Add the following environment variables:
    ```env
    # Required for Genkit AI features
    GOOGLE_GENAI_API_KEY=YOUR_GOOGLE_API_KEY 

    # Add any other necessary environment variables here
    ```
    Replace `YOUR_GOOGLE_API_KEY` with your actual API key from Google AI Studio or Google Cloud.

4.  **Run the development server**:
    To start the Next.js application:
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
    This will typically start the application on `http://localhost:9002`.

5.  **Run the Genkit development server** (optional, for AI feature development/testing):
    To start the Genkit flow server (usually in a separate terminal):
    ```bash
    npm run genkit:dev
    # or for watching changes
    # npm run genkit:watch
    ```
    This allows you to test and interact with the Genkit flows defined in `src/ai/flows/`.

### Development

- The main application code is located in the `src/` directory.
- Pages are defined within `src/app/`.
- Reusable UI components are in `src/components/`.
- AI-related code (Genkit flows) is in `src/ai/`.
- Styling uses Tailwind CSS and is configured in `tailwind.config.ts` and `src/app/globals.css`.

## Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
- `npm run typecheck`: Runs TypeScript type checking.
- `npm run genkit:dev`: Starts the Genkit development flow server.
- `npm run genkit:watch`: Starts the Genkit development flow server with file watching.
