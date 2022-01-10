
export async function getUserDatas(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}`)
    .then(response => response.json());

    return userDatas;
}

export async function getUserPerformance(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/performance`)
    .then(response => response.json());

    return userDatas;
}

export async function getUserActivity(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/activity`)
    .then(response => response.json());

    return userDatas;
}

export async function getUserAverageSessions(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => response.json());

    return userDatas;
}

