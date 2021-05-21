import React from "react";
import {FormGroup, Input} from "reactstrap";

export default function MovieDetailsDropdown(props) {

    const handleSelect = (e) => {
        props.handleMenuSelect(e.target.value);
    }

    return(
        <FormGroup>
            <Input
                type="select"
                name="select"
                id="inputState"
                onChange={handleSelect}
            >
                <option value="">Find Movies By...</option>
                <option value="1">Now Playing</option>
                <option value="2">Most Popular</option>
                <option value="3">Top Rated</option>
                <option value="4">Upcoming</option>
            </Input>
        </FormGroup>

    );

}
