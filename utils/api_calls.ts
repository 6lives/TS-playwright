import { CookieType } from "../types/apiTypes";

export async function authViaApi(): Promise<CookieType[]> {
    const request = await fetch('https://passport.twitch.tv/integrity', {
        method: 'POST',
        headers: {
            'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko',
            'X-Auth-Action': 'login',
            'X-Device-ID': 'NJKWUwqBKlh0zhOGBYawlIstmpiInAX8',
        }
    });

    /*
    Cookies expample:
     'set-cookie': 'ga__12_abel-ssn=0HPQjQRSewNzgqnMoLLFv8LxAC12DUfTHv3OrhP7BY1DDUwd7pXYgH7Q57vPWtpkxbCDMAj619mwLFDx68NAWh73G5I9ht4p8u1lTZaoTJ3jRQyc1E7XAf0BJCQ6qqkFMMttnMhzG87eyKDzRhluvh7RF4h2bPTfsWM4rl7qZJYG; Max-Age=86400; Path=/; Expires=Mon, 14 Oct 2024 18:13:01 GMT; HttpOnly; Secure; SameSite=None, ga__12_abel=0HPQjQRSewNzgqnMoLLFv8LxAC12DUfTHv3OrhP7BY1DDUwd7pXYgH7Q57vPWtpkxbCDMAj619mwLFDx68NAWh73G5I9ht4p8u1lTZaoTJ3jRQyc1E7XAf0BJCQ6qqkFMMttnMhzG87eyKDzRhluvh7RF4h2bPTfsWM4rl7qZJYG; Max-Age=86400; Path=/; Expires=Mon, 14 Oct 2024 18:13:01 GMT; HttpOnly',
    */

    let clearCookies: CookieType[] = []

    const cookies: string = request.headers.get('set-cookie').split(',')[0]
    //cookies duplicates, reducing it with set
    const parsedCookies: Set<string> = new Set(cookies.split(';'))
    parsedCookies.forEach(item => {
        const [name, value = ''] = item.split('=').map(str => str.trim());
        clearCookies.push({ name, value });
    })
    return clearCookies

}
