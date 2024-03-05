"use client";

import axios from "axios";
import { WeatherPage } from "./ui/weatherPage/page";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-cyan-700 pt-12 pb-12">
      <div className="flex h-90 flex-col items-center w-4/5 bg-cyan-500 pt-4 ">
        <WeatherPage />
      </div>
    </main>
  );
}
