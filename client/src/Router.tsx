import { BrowserRouter, Route, Routes } from "react-router-dom";

// Company views
import HomeView from "./views/company/HomeView";

export default function Router () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}