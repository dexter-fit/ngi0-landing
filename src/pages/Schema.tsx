import * as schema from "../dossier-schema.json"

const Schema = () => {
    return <pre>
        {JSON.stringify(schema, null, 1)}
    </pre>
}

export {Schema}
