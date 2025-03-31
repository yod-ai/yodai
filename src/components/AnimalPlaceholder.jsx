// src/components/AnimalPlaceholder.jsx
import React from "react";

function AnimalPlaceholder({ src, alt }) {
    return (
        // Removed extra styling so it displays just the photo.
        <div className="w-30 h-30">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
    );
}

export default AnimalPlaceholder;
