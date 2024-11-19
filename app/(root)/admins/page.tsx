async function Page() {
    const response = await fetch("http://localhost:3000/api/admins")
    const admins = await response.json();

    return (
        <main>
            <code>{JSON.stringify(admins, null, 2)}</code>
        </main>
    );
}

export default Page;