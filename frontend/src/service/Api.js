
export async function getUserDatas() {
    const userDatas = await fetch('http://localhost:3000/user/' + 18)
    .then(response => response.json());

    return userDatas;
}

export async function getUserPerformance() {
    const userDatas = await fetch('http://localhost:3000/user/' + 18 + "/performance")
    .then(response => response.json());

    return userDatas;
}

export async function getUserActivity() {
    const userDatas = await fetch('http://localhost:3000/user/' + 18 + "/activity")
    .then(response => response.json());

    return userDatas;
}

export async function getUserAverageSessions() {
    const userDatas = await fetch('http://localhost:3000/user/' + 18 + "/average-sessions")
    .then(response => response.json());

    return userDatas;
}

