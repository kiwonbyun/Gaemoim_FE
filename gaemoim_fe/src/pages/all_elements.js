import React from "react";
import Button from "../elements/Button";

const AllElements = () => {
    return (
        <React.Fragment>
            <Button>큰버튼</Button>
            <Button size="S">작은버튼</Button>
            <Button color="light">큰버튼</Button>
            <Button size="S" color="light">작은버튼</Button>
        </React.Fragment>
    );
}

export default AllElements;