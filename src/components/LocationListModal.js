import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { LocationList } from './LocationList';

export const LocationListModal = () => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='location-container'>
        <Button className='location-button' color='primary' onClick={toggle}>
          <span>SELECT LOCATION</span>
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>CHANGE LOCATION</ModalHeader>
        <ModalBody>
          <LocationList />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={toggle}>
            SELECT LOCATION
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
