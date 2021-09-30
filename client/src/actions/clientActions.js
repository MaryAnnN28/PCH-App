const nodeURL = process.env.REACT_APP_STRAPI_URL;

const headers = () => ({
    'Content-Type': 'application/json'
});

// *********** FETCH ALL CLIENTS *********** //
export const fetchClients = async () => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/clients`, opts).then((data) => data.json());

    return response;
};

// *********** FETCH A CLIENT (BY ID) *********** //
export const fetchClient = async (id) => {
    const opts = {
        method: 'GET',
        headers: headers()
    };

    const response = await fetch(`${nodeURL}/clients/${id}`, opts).then((data) => data.json());

    return response;
};

export const createClient = async (id, details) => {
    const opts = {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(details)
    };

    const response = await fetch(`${nodeURL}/clients`, opts).then((data) => data.json());

    return response;
};
