import { existsSync, mkdirSync, writeFileSync } from 'fs'
import path from 'path'

export default function writeJSONToFile(filePath, data) {
    const dir = path.dirname(filePath)
    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
    }
    writeFileSync(filePath, JSON.stringify(data, null, 2)) // Pretty-printed JSON for readability
}