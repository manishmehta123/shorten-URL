// import React from "react";
// import UrlForm from "./components/UrlForm"; // ✅ Fixed path

// function App() {
//     return (
//         <div>
//             <h1>URL Shortener</h1>
//             <UrlForm />
//         </div>
//     );
// }

// export default App;
import React from "react";
import UrlForm from "./components/UrlForm";
import AdminPage from "./components/AdminPage";

function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>URL Shortener</h1>
            <UrlForm />
            <hr />
            <AdminPage />
        </div>
    );
}

export default App;
