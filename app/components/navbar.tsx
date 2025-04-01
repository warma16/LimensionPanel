import type {User} from "~/types/user";
import {Suspense, use} from "react";

function Avatar({p}: { p: Promise<User> }) {
    const user = use(p);
    return <img src={"http://127.0.0.1:8080/static/" + user.username + ".jpg"} alt="avatar"/>
}

export default function Navbar({p}: { p: Promise<User> }) {
    return <div className="navbar shadow-sm">
        <div className="flex-1">
            <a className="btn btn-ghost text-accent text-xl border-0 hover:bg-transparent">Limension</a>
        </div>
        <div className="flex gap-2">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Suspense fallback={
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                    <span>MH</span>
                                </div>
                            </div>
                        }>
                            <Avatar p={p}/>
                        </Suspense>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
}