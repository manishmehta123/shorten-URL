
// import React, { useState } from "react";
// import axios from "axios";

// function UrlForm() {
//     const [longUrl, setLongUrl] = useState("");
//     const [shortUrl, setShortUrl] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:5000/api/shorten", { original_url: longUrl });
//             setShortUrl(res.data.short_url);
//         } catch (err) {
//             alert("Error: " + err.message);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Enter long URL"
//                     value={longUrl}
//                     onChange={(e) => setLongUrl(e.target.value)}
//                     style={{ padding: "8px", width: "300px" }}
//                 />
//                 <button type="submit" style={{ padding: "8px", marginLeft: "5px" }}>Shorten</button>
//             </form>
//             {shortUrl && (
//                 <p>Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a></p>
//             )}
//         </div>
//     );
// }

// export default UrlForm;
import React, { useState } from "react";
import axios from "axios";

function UrlForm() {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/shorten", { original_url: longUrl });
            setShortUrl(res.data.short_url);
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const formContainer = {
        maxWidth: "500px",
        margin: "30px auto",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
    };

    const inputStyle = {
        padding: "10px",
        width: "70%",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        fontSize: "14px"
    };

    const buttonStyle = {
        padding: "10px 15px",
        marginLeft: "5px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px"
    };

    const linkStyle = {
        color: "#007bff",
        textDecoration: "none"
    };

    return (
        <div style={formContainer}>
            <h3 style={{ marginBottom: "20px", color: "#333" }}>Shorten Your URL</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>Shorten</button>
            </form>
            {shortUrl && (
                <p style={{ marginTop: "15px" }}>
                    Short URL: <a href={shortUrl} target="_blank" rel="noreferrer" style={linkStyle}>{shortUrl}</a>
                </p>
            )}
        </div>
    );
}

export default UrlForm;
