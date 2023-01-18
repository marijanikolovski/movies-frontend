import React from 'react'

import { Button } from "react-bootstrap";

export const MovieSearchComponent = ({ handleSearchTerm, handleSearch, debouncedHandleChange }) => {
    return (
        <div className="d-lg-flex justify-content-center">
            <input
                className="mr-3"
                type="text"
                onChange={handleSearchTerm}
                placeholder="Input search term here"
            />
            <Button style={{ margin: "5px" }} onClick={debouncedHandleChange(handleSearch, 750)}>
                Search
            </Button>
        </div>
    )
}

