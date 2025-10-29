// API Types
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const PostCard = ({ post }: { post?: Post }) => {
    if (!post) return null;

    return (
        <article
            style={{
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "12px" }}>{post.title}</h1>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>{post.body}</p>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #e5e7eb" }}>
                <span style={{ fontSize: "14px", color: "#9ca3af" }}>
                    Post ID: {post.id} | User ID: {post.userId}
                </span>
            </div>
        </article>
    );
};