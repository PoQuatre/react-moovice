import { Route, Routes } from "react-router-dom";
import {
  Favorites,
  Home,
  Popular,
  PopularBattle,
  Weekly,
  WeeklyBattle,
} from "$views";
import { AppNavbar } from "$components";
import { FunctionComponent } from "react";

export const App: FunctionComponent = () => {
  return (
    <>
      <AppNavbar />

      <div className="pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/weekly-battle" element={<WeeklyBattle />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/popular-battle" element={<PopularBattle />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
};
