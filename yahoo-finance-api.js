export default async function getCurrentPrice(companyTag){
    const response = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${companyTag}?period1=1712788800&period2=1713571200&interval=5m&includePrePost=true&events=div%7Csplit%7Cearn&&lang=en-US&region=US`, {
method: "GET",
headers: {
"User-agent": ""
}
});
    const value = await response.json();

    return String(value.chart.result[0].meta.regularMarketPrice);
}

console.log(await getCurrentPrice('TSLA'));