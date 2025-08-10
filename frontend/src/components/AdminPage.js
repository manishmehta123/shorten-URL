
import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPage() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/admin/urls")
            .then(res => setUrls(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{
            maxWidth: "1000px",
            margin: "30px auto",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            fontFamily: "Arial, sans-serif"
        }}>
            <h2 style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333"
            }}>Admin - All Shortened URLs</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px"
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
                        <th>Short URL</th>
                        <th>Original URL</th>
                        <th>Visit Count</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((url, index) => (
                        <tr
                            key={url._id}
                            style={{
                                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                                transition: "background-color 0.3s"
                            }}
                            onMouseEnter={(e) =>
                                e.currentTarget.style.backgroundColor = "#eaf2ff"
                            }
                            onMouseLeave={(e) =>
                                e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#fff"
                            }
                        >
                            <td>
                                <a
                                    href={`http://localhost:5000/${url.short_code}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ color: "#007bff", textDecoration: "none" }}
                                >
                                    {url.short_code}
                                </a>
                            </td>
                            <td>{url.original_url}</td>
                            <td>{url.visit_count}</td>
                            <td>{new Date(url.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage;
