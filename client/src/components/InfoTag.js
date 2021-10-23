import React from 'react';
import { Badge } from 'react-bootstrap';

function InfoTag(props) {
    return (
        <Badge pill bg={props.type} className="m-1">
            {props.info}
        </Badge>
    );
}

export default InfoTag;