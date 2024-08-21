// src/components/ProductCompanySearchPage.js
import React, { useState } from 'react';

const ProductCompanySearchPage = ({ profiles }) => {
    const [filters, setFilters] = useState({
        language: '',
        education: '',
        specialization: '',
        searchText: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredProfiles = profiles.filter((profile) => {
        return (
            (filters.language === '' || profile.languages.includes(filters.language)) &&
            (filters.education === '' || profile.education.includes(filters.education)) &&
            (filters.specialization === '' || profile.specialization.includes(filters.specialization)) &&
            (filters.searchText === '' || profile.name.toLowerCase().includes(filters.searchText.toLowerCase()))
        );
    });

    return (
        <div className="product-company-search-page">
            <h1>Search Content Creators</h1>
            <div className="filters">
                <input
                    type="text"
                    name="searchText"
                    placeholder="Search by Name"
                    value={filters.searchText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="language"
                    placeholder="Filter by Language"
                    value={filters.language}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="education"
                    placeholder="Filter by Education"
                    value={filters.education}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="specialization"
                    placeholder="Filter by Specialization"
                    value={filters.specialization}
                    onChange={handleChange}
                />
            </div>
            <div className="profile-list">
                {filteredProfiles.map((profile, index) => (
                    <div key={index} className="profile-card">
                        <h2>{profile.name}</h2>
                        <p>Languages: {profile.languages.join(', ')}</p>
                        <p>Education: {profile.education}</p>
                        <p>Specialization: {profile.specialization}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCompanySearchPage;
