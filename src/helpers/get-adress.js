export async function getAdress(ip = '8.8.8.8.') {
    const response = fetch(`http://ip-api.com/json/${ip}`)
    return (await response).json()
}
