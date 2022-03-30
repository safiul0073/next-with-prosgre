export const updateFatcher = async (url, data) => {
    // console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return await response.json();
}