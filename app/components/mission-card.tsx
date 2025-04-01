import type {Mission} from "~/types/mission";
import {use} from "react";

export function MissionCard({p}: { p: Promise<Mission> }) {
    const v = use(p);
    return <div className="card bg-base-100 w-96 shadow-sm hover:bg-accent mt-2">
        <div className="card-body">
            <h2 className="card-title">{v.name}</h2>
            <p>{v.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                        <path fill="currentColor" fillRule="evenodd"
                              d="M19 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m22-32a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                              clipRule="evenodd"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
}
