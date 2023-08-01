import Modal from 'react-bootstrap/Modal';
import ProductContext from '../../context/ProductContext';

import { useContext } from 'react';

function PopUpModal() {
    const { open } = useContext(ProductContext);

    return (
        <>
            <div
                className="modal show"
                style={{
                    display: 'block',
                    padding: '20px 10px',
                    minWidth: '70%',
                    position: 'absolute',
                    top: '50%',
                    right: open ? '15%' : '109%',
                    background: '#a4e114',
                    zIndex: '50',
                    transition: 'right 500ms',
                    borderRadius: '10px',
                }}
            >
                <Modal.Dialog>
                    <Modal.Body>
                        <p style={{ textAlign: 'center' }}>Product added to bag!</p>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        </>
    );
}

export default PopUpModal;