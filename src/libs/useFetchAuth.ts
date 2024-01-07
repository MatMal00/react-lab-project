export const useFetchAuth = () => {
    const login = async (credentials: unknown) => {
        const response = await fetch("http://localhost:3000/authUsers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error("Invalid credentials");
        }

        return response.json();
    };

    return { login };
};
