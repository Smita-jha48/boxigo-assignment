import { Dashboard } from "../pages/Dashboard";
import { MoveLayout } from "../layouts/Move";

export const routes = [
    {
        path: "/",
        element: <MoveLayout />,
         children: [
         { path: "/", element: <Dashboard />, default: true},
        ]
    }
];