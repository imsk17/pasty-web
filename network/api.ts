import AddPasteRequest from "../interfaces/AddPasteRequest";
import AddPasteResponse from "../interfaces/AddPasteResponse";

export async function Save(content: string, modifiability: boolean): Promise<AddPasteResponse | undefined> {
    const body: AddPasteRequest = {
        content: content,
        isModifiable: modifiability
    }
    try {
        const response = await fetch("http://localhost:8000/api/paste/", {
            body: JSON.stringify(body),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json() as AddPasteResponse
        return json
    } catch (error) {
        console.log(error)
    }
}

export async function Get(id: string): Promise<AddPasteResponse | undefined> {
    try {
        const response = await fetch(`http://localhost:8000/api/paste/${id}`)
        const json: AddPasteResponse = await response.json()
        return json
    } catch (error) {
        console.log(error)
    }
}
