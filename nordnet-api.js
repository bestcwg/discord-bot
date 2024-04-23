//

export default async function getPortfolio(user) {
    const response = await fetch(`https://api.prod.nntech.io/shareville/v2/profiles/slug/${user}`);
    console.log(response);
}

await getPortfolio("jwg701");