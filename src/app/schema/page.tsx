import * as schema from "../../dossier-schema.json"

export default function Page () {
    return (<pre>
        {JSON.stringify(schema, null, 1)}
    </pre>)
}
