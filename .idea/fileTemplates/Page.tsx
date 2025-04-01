import {type LoaderFunctionArgs, type MetaArgs, useLoaderData} from "react-router";

export function meta({}: MetaArgs) {
    return [
        {title: "${TITLE}"},
        {name: "${DESCRIPTION}", content: "${CONTENT}"},
    ];
}

export async function loader({params}: LoaderFunctionArgs) {
    
}

export function HydrateFallback() {
    return <div>Loading...</div>;
}

export default function ${NAME}() {
    return <div>

    </div>;
}
