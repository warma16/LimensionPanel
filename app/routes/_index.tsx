import {type LoaderFunctionArgs, type MetaArgs, useLoaderData} from "react-router";
import Navbar from "~/components/navbar";
import type {User} from "~/types/user";
import type {Mission} from "~/types/mission";
import {Suspense} from "react";
import {MissionCard} from "~/components/mission-card";

export function meta({}: MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: LoaderFunctionArgs): Promise<[Promise<User>, Promise<Mission>, Promise<Mission>]> {
    return [
        fetch("http://127.0.0.1:8080/test").then((res): Promise<User> => res.json()),
        fetch("http://127.0.0.1:8080/mission").then((res): Promise<Mission> => res.json()),
        fetch("http://localhost:8080/delay").then((res): Promise<Mission> => res.json())
    ];
}

export default function Index() {
    const [user, mission, promise] = useLoaderData<typeof loader>();
    return <div>
        <Navbar p={user}/>
        <Suspense fallback={<div>Loading...</div>}>
            <MissionCard p={mission}/>
            <MissionCard p={promise}/>
        </Suspense>
    </div>
}
