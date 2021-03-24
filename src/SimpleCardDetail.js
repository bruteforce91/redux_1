import {Modal} from 'react-bootstrap'

import React from 'react'

function SimpleCardDetail({show, handleClose, hero}) {
    return (
        <>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {hero.name }</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
                    <p><b>Powers:</b> {hero.powers.join(", ")}</p>
                    <p><b>Alter-Ego:</b> {hero.alterEgo}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SimpleCardDetail
