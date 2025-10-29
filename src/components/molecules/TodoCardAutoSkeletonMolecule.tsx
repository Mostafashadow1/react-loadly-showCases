
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
// Component to display Todos
export const TodoList = ({ todos }: { todos?: Todo[] }) => {
    if (!todos || todos.length === 0) return null;

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Todos</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            padding: "12px",
                            marginBottom: "8px",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: "20px",
                                height: "20px",
                                borderRadius: "4px",
                                backgroundColor: todo.completed ? "#10b981" : "#e5e7eb",
                                border: "2px solid",
                                borderColor: todo.completed ? "#10b981" : "#9ca3af",
                            }}
                        >
                            {todo.completed && "✓"}
                        </span>
                        <span
                            style={{
                                flex: 1,
                                textDecoration: todo.completed ? "line-through" : "none",

                            }}
                            className={`text-gray-100 ${todo.completed ? "opacity-60" : "opacity-100"}`}
                        >
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
