import { Route, Routes } from "react-router-dom";
import {
  Favorites,
  Home,
  Popular,
  PopularBattle,
  Weekly,
  WeeklyBattle,
} from "$views";
import { FunctionComponent } from "react";

export const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weekly" element={<Weekly />} />
      <Route path="/weekly-battle" element={<WeeklyBattle />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/popular-battle" element={<PopularBattle />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
