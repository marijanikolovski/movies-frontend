import React from 'react'
import { Button } from "react-bootstrap";

export const MovieFilterComponent = ({ handleSearch, handleSearchTerm, genres }) => {
    return (
        <div className="d-lg-flex mb-5 mt-3 justify-content-center">
            <select
                onChange={handleSearchTerm}
            >
                <option key={'-1'}>Choose a genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
            <Button style={{ margin: "5px" }} onClick={handleSearch}>
                Filter
            </Button>
        </div>
    )
}
