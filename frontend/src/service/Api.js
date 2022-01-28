/* PERMET DE CHECKER LES TYPES */
//@ts-check

/**
 * @file Api.js est le fichier qui contient les "services" de l'application.
 * @author Moshé Frydmann
 * @see <a href="https://github.com/ShemoMFR/p12_OC/tree/master" target='_blank'>Repo GitHub</a>
 */

/**
 * Function qui permet de récupérer les données d'un utilisateur
 * @type {function(number): Promise<any>}
 * @param {string} id ID de l'utilisateur
 * @returns {Promise<any>}
 */

export async function getUserDatas(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}`)
    .then(response => response.json());

    return userDatas;
}
/**
 * Function qui permet de récupérer les performances d'un utilisateur
 * @type {function(number): Promise<any>}
 * @param {string} id ID de l'utilisateur
 * @returns {Promise<any>}
 */

export async function getUserPerformance(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/performance`)
    .then(response => response.json());

    return userDatas;
}

/**
 * Function qui permet de récupérer les activités d'un utilisateur
 * @type {function(number): Promise<any>}
 * @param {string} id ID de l'utilisateur
 * @returns {Promise<any>}
 */

export async function getUserActivity(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/activity`)
    .then(response => response.json());

    return userDatas;
}

/**
 * Function qui permet de récupérer les sessions d'un utilisateur
 * @type {function(number): Promise<any>}
 * @param {string} id ID de l'utilisateur
 * @returns {Promise<any>}
 */

export async function getUserAverageSessions(id) {
    const userDatas = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    .then(response => response.json());

    return userDatas;
}

