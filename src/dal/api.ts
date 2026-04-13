const apiKey = "2cbd0ca7-7476-429e-9c64-1d96e78ee5c5"
const headers = {
    "api-key": apiKey,
}

export const getTrack = async (trackId: string) => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    })
    return await res.json()
}

export const getTracks = async () => {
    const res = await fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
    return await res.json()
}