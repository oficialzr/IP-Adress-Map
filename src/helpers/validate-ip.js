export function validateIp(ip) {
    if (/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/gm.test(ip)) {
        return true
    }
    alert('You have to enter a valid IP adress')
    return false
}