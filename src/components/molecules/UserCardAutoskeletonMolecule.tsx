export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}
// Component to display a User
export const UserProfile = ({ user }: { user?: User }) => {
    if (!user) return null;

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                maxWidth: "400px",
                margin: "0 auto",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <div
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#3b82f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "4px" }}>{user.name}</h3>
                    <p style={{ color: "#6b7280", fontSize: "14px" }}>@{user.username}</p>
                </div>
            </div>
            <div style={{ marginTop: "16px" }}>
                <p style={{ marginBottom: "8px" }}>
                    <strong>Email:</strong> {user.email}
                </p>
                <p style={{ marginBottom: "8px" }}>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p style={{ marginBottom: "8px" }}>
                    <strong>Website:</strong> {user.website}
                </p>
            </div>
        </div>
    );
};
